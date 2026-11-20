# 🖥️ Pulsanti VM/CT (Proxmox) e Docker (Synology)

Due funzioni opzionali, entrambe **solo YAML** (non sono nell'editor visuale), che aggiungono dei pulsanti con un popup di comando:

- **`shc-proxmox-card`, opzione `guests`**: pulsanti **VM** e **CT** con l'elenco dei guest, lo stato e **AVVIA / ARRESTA / STOP / RIAVVIA** (con conferme).
- **`shc-nas-card`, opzione `docker`**: pulsante **Docker** con l'elenco dei container del NAS Synology e **AVVIA / STOP / RIAVVIA**.

Senza queste opzioni le card restano identiche a prima. I testi dei popup per ora sono solo in italiano.

> English version of the whole guide: [jump to English](#english-guide).

---

## 1. Proxmox: pulsanti VM e CT

### Come funziona
Home Assistant legge l'elenco dei guest dall'API di Proxmox (sensore REST) e, quando premi un pulsante, la card chiama uno **script** di Home Assistant che manda il comando all'API di Proxmox con un **token** dedicato. Il token ha solo i permessi di vedere e accendere/spegnere le macchine: niente console, niente modifica della configurazione, niente accesso al disco.

### Prerequisiti
- Proxmox VE 7 o 8 raggiungibile da Home Assistant sulla porta 8006.
- Accesso da amministratore a Proxmox (shell del nodo) per creare ruolo, utente e token.
- La card `shc-proxmox-card` già funzionante.

### Passo 1 — ruolo, utente e token su Proxmox
Dalla shell del nodo Proxmox (come `root`):

```bash
# ruolo con i soli permessi che servono: vedere e accendere/spegnere
pveum role add HAPower --privs "VM.Audit VM.PowerMgmt"

# utente dedicato (nessuna password: usa solo il token)
pveum user add homeassistant@pve --comment "Home Assistant"

# token con separazione dei privilegi (privsep=1). Il segreto viene mostrato UNA SOLA VOLTA: copialo subito
pveum user token add homeassistant@pve ha --privsep 1

# permessi: vanno dati sia al token sia all'utente
pveum acl modify / --tokens 'homeassistant@pve!ha' --roles HAPower
pveum acl modify / --users homeassistant@pve --roles PVEAuditor,HAPower
```

⚠️ **Il punto che fa perdere tempo.** Con `privsep=1` i permessi effettivi del token sono l'**intersezione** tra quelli del token e quelli dell'utente. Se il ruolo è dato solo al token e non anche all'utente (ultima riga), tutte le chiamate rispondono **403 Forbidden** anche se il token "sembra" configurato bene. Verifica con:

```bash
pveum user permissions homeassistant@pve --path /
pveum user token permissions homeassistant@pve ha --path /
```

Permessi ancora più stretti: al posto di `/` puoi dare il ruolo solo sui singoli guest, ad esempio `pveum acl modify /vms/101 ...`. Il sensore con l'elenco mostrerà solo i guest su cui l'utente ha `VM.Audit`.

### Passo 2 — il token nei segreti di Home Assistant
Nel file dei segreti di Home Assistant aggiungi (il formato è `PVEAPIToken=utente@realm!nometoken=segreto`):

```yaml
proxmox_ha_token: "PVEAPIToken=homeassistant@pve!ha=xxxxx-xxxxx-xxxxx"
```

Non scrivere mai il token nello YAML delle card o dei package, né in un repository.

### Passo 3 — il package
Copia [`packages/proxmox_guests.yaml`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/proxmox_guests.yaml) in `/config/packages/` (con i package attivi in `configuration.yaml`) e cambia:
- `192.168.1.10` → l'IP del tuo Proxmox;
- `pve` nell'URL dei comandi → il nome del tuo nodo;
- la mappa `exclusive` dello script (vedi sotto) → i tuoi guest, oppure `{}`.

Riavvia Home Assistant (nuovo `rest_command` e `script`). Dopo il riavvio deve esistere `sensor.proxmox_guests` con l'attributo `data` (elenco dei guest) e lo script `script.proxmox_guest_action`. Se il sensore è vuoto o `unavailable`: controlla IP, porta 8006, il token e il punto sul 403 qui sopra.

### Passo 4 — la card

```yaml
type: custom:shc-proxmox-card
name: Proxmox
guests:
  entity: sensor.proxmox_guests          # sensore con l'attributo data (elenco guest)
  script: script.proxmox_guest_action    # script che manda il comando
  exclusive:                             # opzionale: guest che non devono girare insieme
    "101": "102"
    "102": "101"
```

| Campo | Descrizione |
|---|---|
| `guests.entity` | Sensore con l'elenco dei guest nell'attributo `data` (quello del package). |
| `guests.script` | Script che riceve `type` (`qemu` o `lxc`), `vmid` e `action` (`start`, `shutdown`, `stop`, `reboot`). |
| `guests.exclusive` | Mappa `vmid: vmid incompatibile`. Serve ai guest che usano la stessa risorsa esclusiva (tipicamente la GPU in passthrough). Prima di avviare uno dei due, il **popup chiede conferma** e lo **script spegne l'altro** (arresto pulito, attende che sia spento, poi avvia). |

⚠️ La mappa `exclusive` va scritta **due volte**: nella card (solo per il messaggio di conferma) e nello script (è lì che avviene davvero lo spegnimento). Tienile uguali.

Il pulsante **VM** mostra i guest `qemu`, il pulsante **CT** i container `lxc`. Per ogni guest:
- spento: **AVVIA**;
- acceso: **ARRESTA** (arresto pulito via ACPI, attende 60 s poi forza), **STOP** (forzato, come staccare la corrente: richiede conferma), **RIAVVIA**.

---

## 2. Synology: pulsante Docker

### Come funziona
Home Assistant si collega al NAS via **SSH con una chiave dedicata** che può eseguire **un solo comando fisso**: uno script (`ha_docker.sh`) che accetta soltanto `list`, `start <nome>`, `stop <nome>`, `restart <nome>`. Anche se la chiave venisse rubata, non apre una shell e non può fare altro che quelle quattro cose sui container Docker.

### Prerequisiti
- Synology con DSM 7 e **Container Manager** (Docker) installato.
- SSH attivo sul NAS (Pannello di controllo → Terminale e SNMP) e la cartella home degli utenti attivata (Pannello di controllo → Utente e gruppo → Avanzate → Abilita servizio home utente).
- Un utente del NAS che possa usare Docker (di solito membro di `administrators`, oppure del gruppo `docker`). Meglio un utente dedicato a questo scopo.
- Home Assistant OS/Container con il comando `ssh` disponibile (c'è nel core).

### Passo 1 — il wrapper sul NAS
Salva [`packages/ha_docker.sh`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/ha_docker.sh) nella home dell'utente del NAS (es. `/var/services/homes/nasuser/ha_docker.sh`) e rendilo eseguibile (`chmod 755`). Il nome del container è validato (solo lettere, numeri, `_`, `.`, `-`): un nome strano viene rifiutato.

### Passo 2 — la chiave SSH dedicata
Su Home Assistant (terminale/SSH add-on), nella cartella `/config/.ssh_nas/` (che **non** deve finire in git: aggiungila al `.gitignore`):

```bash
mkdir -p /config/.ssh_nas && chmod 700 /config/.ssh_nas
ssh-keygen -t ed25519 -N "" -C ha-nas-docker -f /config/.ssh_nas/id_ha_nas_docker
cat /config/.ssh_nas/id_ha_nas_docker.pub
```

Sul NAS, nel file `~/.ssh/authorized_keys` dell'utente, aggiungi **una riga** con il comando forzato davanti alla chiave pubblica appena creata:

```
command="/var/services/homes/nasuser/ha_docker.sh",no-pty,no-port-forwarding,no-X11-forwarding,no-agent-forwarding ssh-ed25519 AAAAC3...xxxxx ha-nas-docker
```

I permessi su Synology devono essere stretti, altrimenti SSH ignora la chiave: home dell'utente `755` al massimo, `~/.ssh` `700`, `authorized_keys` `600`.

Prova da Home Assistant:

```bash
ssh -i /config/.ssh_nas/id_ha_nas_docker nasuser@192.168.1.20 list
```

Deve stampare un JSON `{"containers":[...]}`. Se chiede la password, la riga in `authorized_keys` o i permessi non sono a posto. Se risponde "permission denied" sul socket Docker, l'utente non ha i diritti su Docker (vedi prerequisiti).

### Passo 3 — il package
Copia [`packages/nas_docker.yaml`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/nas_docker.yaml) in `/config/packages/`, cambia `192.168.1.20` e `nasuser`, riavvia Home Assistant. Crea `sensor.nas_docker` (attributo `containers`) e il servizio `shell_command.nas_docker_cmd`.

### Passo 4 — la card

```yaml
type: custom:shc-nas-card
docker:
  entity: sensor.nas_docker                  # sensore con l'attributo containers
  service: shell_command.nas_docker_cmd      # servizio che manda il comando
  critical:                                  # opzionale: container che chiedono doppia conferma per STOP/RIAVVIA
    - my-database
    - my-reverse-proxy
```

| Campo | Descrizione |
|---|---|
| `docker.entity` | Sensore con l'elenco container nell'attributo `containers` (`name`, `state`, `status`). |
| `docker.service` | Servizio `dominio.nome` chiamato con `action` (`start`/`stop`/`restart`) e `name`. |
| `docker.critical` | Nomi dei container da cui dipendono altri servizi: STOP e RIAVVIA chiedono **due conferme**, con un avviso. |

---

## 3. Sicurezza

**Permessi minimi**
- Proxmox: ruolo con solo `VM.Audit` + `VM.PowerMgmt` (niente `VM.Console`, `VM.Config.*`, `Sys.*`, `Datastore.*`); utente e token dedicati, nessun accesso come `root@pam`. Quando possibile dai il ruolo solo sui guest che servono, non su `/`.
- NAS: chiave dedicata con comando forzato e `no-pty`; il wrapper accetta solo 4 comandi e valida il nome.
- Il token Proxmox sta solo nei segreti di Home Assistant; la chiave privata SSH solo in `/config/.ssh_nas/`.

**Conferme**
- STOP forzato dei guest, STOP/RIAVVIA dei container `critical` e avvio di un guest con un guest incompatibile attivo chiedono sempre conferma nel popup.
- Le conferme sono solo nell'interfaccia: chi può chiamare lo script o il servizio da Home Assistant (altre dashboard, automazioni, Strumenti per sviluppatori) le salta. Per questo lo script controlla i valori ammessi e il servizio ripulisce `action`/`name`. Limita chi è amministratore in Home Assistant.

**Cosa NON fare**
- Non dare al token il ruolo `Administrator` o permessi su `/` più larghi del necessario; non usare `root@pam`.
- Non disattivare `privsep` per "far funzionare" le chiamate: sistema l'ACL dell'utente (punto del 403).
- Non mettere il token, la chiave privata o l'IP reale in post, issue, screenshot, repository. Se è finito da qualche parte, rigeneralo: `pveum user token remove homeassistant@pve ha` e crealo di nuovo; per la chiave SSH togli la riga da `authorized_keys`.
- Non usare una chiave SSH senza `command=` per Home Assistant: darebbe una shell sul NAS.
- Non mettere nei `critical`/`exclusive` nomi o ID che non hai verificato, e non esporre Home Assistant su Internet senza autenticazione forte.
- Non avviare/spegnere "tutto" in blocco: la card agisce su un guest alla volta, di proposito.
- `verify_ssl: false` accetta il certificato autofirmato di Proxmox: va bene in LAN; con un certificato valido (o una CA tua) mettilo a `true`.

---

## English guide

Two optional, **YAML-only** features that add command buttons with a popup. Without the options, the cards look and work exactly as before. Popup texts are Italian only for now.

- **`shc-proxmox-card`, option `guests`**: **VM** and **CT** buttons listing the guests with their state and **START / SHUTDOWN / STOP / REBOOT** (with confirmations).
- **`shc-nas-card`, option `docker`**: **Docker** button listing the containers of a Synology NAS with **START / STOP / RESTART**.

### Proxmox VM / CT buttons

**How it works.** Home Assistant reads the guest list from the Proxmox API (REST sensor); when you press a button, the card runs a Home Assistant **script** that sends the command to the Proxmox API with a dedicated **API token** that can only see and power guests.

**Prerequisites:** Proxmox VE 7/8 reachable on port 8006, admin shell on the node, a working `shc-proxmox-card`.

**Step 1 — role, user and token** (as `root` on the node):

```bash
pveum role add HAPower --privs "VM.Audit VM.PowerMgmt"
pveum user add homeassistant@pve --comment "Home Assistant"
pveum user token add homeassistant@pve ha --privsep 1      # the secret is shown ONCE
pveum acl modify / --tokens 'homeassistant@pve!ha' --roles HAPower
pveum acl modify / --users homeassistant@pve --roles PVEAuditor,HAPower
```

⚠️ **The privsep pitfall.** With `privsep=1` the token's effective permissions are the **intersection** of the token's and the user's permissions. If the role is granted only to the token and not to the user (last line), every call returns **403 Forbidden**. Check with `pveum user permissions homeassistant@pve --path /` and `pveum user token permissions homeassistant@pve ha --path /`. For tighter scope grant the role on single guests (`/vms/101`) instead of `/`.

**Step 2 — secret.** In the Home Assistant secrets file: `proxmox_ha_token: "PVEAPIToken=homeassistant@pve!ha=xxxxx-xxxxx-xxxxx"`. Never put the token in card/package YAML or in a repository.

**Step 3 — package.** Copy [`packages/proxmox_guests.yaml`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/proxmox_guests.yaml) into `/config/packages/`, set your Proxmox IP, your node name and the `exclusive` map (or `{}`), restart Home Assistant. You get `sensor.proxmox_guests` (attribute `data`) and `script.proxmox_guest_action`.

**Step 4 — card.**

```yaml
type: custom:shc-proxmox-card
guests:
  entity: sensor.proxmox_guests
  script: script.proxmox_guest_action
  exclusive:            # optional: guests that must not run together (e.g. same GPU passthrough)
    "101": "102"
    "102": "101"
```

`exclusive` maps `vmid: incompatible vmid`: before starting one of them the popup asks for confirmation and the **script shuts the other one down first** (clean shutdown, waits until it is off, then starts). Write the same map in the card (confirmation text only) and in the script (where it really happens). The **VM** button lists `qemu` guests, **CT** lists `lxc` containers. Stopped: **START**. Running: **SHUTDOWN** (clean ACPI, 60 s then force), **STOP** (forced, like pulling the plug, asks confirmation), **REBOOT**.

### Synology Docker button

**How it works.** Home Assistant connects over **SSH with a dedicated key bound to a forced command**: a wrapper script that only accepts `list`, `start <name>`, `stop <name>`, `restart <name>`. A stolen key gives no shell.

**Prerequisites:** DSM 7 with Container Manager, SSH enabled, user home service enabled, a NAS user allowed to use Docker (member of `administrators` or the `docker` group; a dedicated user is best), `ssh` available in Home Assistant.

1. **Wrapper.** Save [`packages/ha_docker.sh`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/ha_docker.sh) in the NAS user's home and `chmod 755` it. The container name is validated (letters, digits, `_ . -`).
2. **Key.** In Home Assistant: `ssh-keygen -t ed25519 -N "" -C ha-nas-docker -f /config/.ssh_nas/id_ha_nas_docker` (keep `/config/.ssh_nas/` out of git). On the NAS add to `~/.ssh/authorized_keys` one line: `command="/var/services/homes/nasuser/ha_docker.sh",no-pty,no-port-forwarding,no-X11-forwarding,no-agent-forwarding ssh-ed25519 AAAAC3...xxxxx ha-nas-docker`. Permissions must be strict or SSH ignores the key: home `755` at most, `~/.ssh` `700`, `authorized_keys` `600`. Test: `ssh -i /config/.ssh_nas/id_ha_nas_docker nasuser@192.168.1.20 list` must print `{"containers":[...]}`.
3. **Package.** Copy [`packages/nas_docker.yaml`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/nas_docker.yaml), set the NAS IP and user, restart. You get `sensor.nas_docker` (attribute `containers`) and `shell_command.nas_docker_cmd`.
4. **Card.**

```yaml
type: custom:shc-nas-card
docker:
  entity: sensor.nas_docker
  service: shell_command.nas_docker_cmd
  critical:             # optional: STOP/RESTART ask for two confirmations
    - my-database
```

### Security

- **Minimum permissions:** Proxmox role with `VM.Audit` + `VM.PowerMgmt` only, dedicated user and token, never `root@pam`, role on the needed guests rather than `/` when possible. NAS key with `command=` and `no-pty`; the wrapper accepts 4 commands and validates the name.
- **Confirmations** (forced STOP, `critical` containers, starting a guest whose exclusive partner is running) live in the UI only. Anyone who can call the script/service from Home Assistant bypasses them, which is why the script whitelists values and the service sanitises `action`/`name`. Keep Home Assistant admin accounts few.
- **Do NOT:** give the token `Administrator` or wide permissions; turn `privsep` off to "make it work" (fix the user ACL instead); post the token, private key or real IPs anywhere (if leaked, remove and recreate the token with `pveum user token remove`, and delete the `authorized_keys` line); use an SSH key without `command=`; expose Home Assistant to the internet without strong authentication. `verify_ssl: false` accepts Proxmox's self-signed certificate: fine on a LAN, use `true` with a valid certificate.

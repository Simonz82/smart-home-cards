# 🌐 Card Router / Gateway (`shc-router-card`)

Una card **unica per qualunque router**: FRITZ!Box, UniFi, TP-Link / Omada, OpenWrt, ASUS, MikroTik, Netgear, router con UPnP e altri. **Non devi scrivere nomi di entità**: la card guarda le integrazioni che hai già in Home Assistant, trova da sola il router e collega stato, IP, velocità, dispositivi, Wi-Fi e riavvio. Quello che non esiste sul tuo router resta **nascosto** (mai errori).

Non serve nessun package: la card usa solo le entità che l'integrazione del tuo router crea già.

## Cosa mostra (se il tuo router lo fornisce)

| Voce | Dove |
|---|---|
| Online / Offline | in alto a destra |
| IP esterno, tempo di attività, numero di dispositivi collegati, velocità massima della linea | accanto al disegno |
| Download e Upload in tempo reale (barre) | in basso; tocca una barra per il grafico |
| Interruttori Wi-Fi (principale, ospiti...), pulsanti **Riconnetti** e **Riavvia** | ingranaggio |
| Traffico totale, firmware | icona informazioni |
| Elenco dispositivi di rete in ordine di IP | icona monitor |
| Avviso "Aggiornamento firmware disponibile" | riquadro rosso |

## Installazione passo per passo

1. Installa **Smart Home Cards** (Marketplace/HACS, vedi [installazione](installazione.md)). Se l'hai già, aggiornala alla versione 1.32.0 o successiva.
2. Controlla che il tuo router sia già in Home Assistant: **Impostazioni > Dispositivi e servizi** e cerca la marca del router (FRITZ!Box, UniFi...). Se non c'è, clicca **Aggiungi integrazione** e aggiungila: è la parte che crea le entità.
3. Premi **Ctrl+F5** nella pagina (sul telefono: App Companion > Risoluzione problemi > Reimposta cache del frontend).
4. Apri la dashboard, clicca i tre puntini in alto a destra > **Modifica dashboard** > **Aggiungi scheda**.
5. Cerca **Router / Gateway** e cliccala.
6. Fatto: la card compare già con i tuoi dati. Clicca **Salva**.

Se preferisci scrivere a mano (editor YAML), basta questo:

```yaml
type: custom:shc-router-card
```

## Se la card dice "Nessun router trovato"

1. Apri la card in modifica (matita).
2. In **Dispositivo router** scegli il tuo router dall'elenco (appaiono i dispositivi che sembrano router).
3. Se l'elenco è vuoto, il router non è ancora in Home Assistant: torna al punto 2 dell'installazione.

## Cambiare una voce sbagliata

Nell'editor, nella sezione **Entità (trovate da sole, puoi cambiarle)**, ogni campo è già compilato con quello che la card ha trovato. Se uno è sbagliato, cliccalo e scegli l'entità giusta. In YAML:

| Opzione | Cosa fa |
|---|---|
| `device` | Il dispositivo router (id o nome). Serve solo se hai più router |
| `name` | Nome sulla card (default: nome del dispositivo) |
| `image` | La tua foto del router al posto del disegno (`/local/...` o URL) |
| `status_entity` | `binary_sensor` dello stato della connessione |
| `ip_entity` | sensore dell'IP esterno |
| `uptime_entity` | sensore del tempo di attività (data di avvio o durata) |
| `download_entity`, `upload_entity` | velocità in tempo reale (qualunque unità: kB/s, Mbit/s...) |
| `limit_down_entity`, `limit_up_entity` | velocità massima della linea (serve per la lunghezza delle barre) |
| `total_down_entity`, `total_up_entity` | traffico totale |
| `clients_entity` | numero di dispositivi collegati (se manca, la card conta i `device_tracker` del router che sono "a casa") |
| `reboot_entity` | pulsante di riavvio |
| `update_entity` | entità `update` del firmware |
| `wifi_entities` | elenco di interruttori Wi-Fi: `- entity: switch.xxx` e, se vuoi, `name:` |
| `devices_source` | Fonte dell'elenco dispositivi: `auto` (default), `router` o `nmap` |
| `max_mbps` | fondo scala delle barre se la linea non è nota (default: automatico) |
| `automation_entities`, `image_scale` | come nelle altre card ([opzioni comuni](opzioni-comuni.md)) |

Esempio completo:

```yaml
type: custom:shc-router-card
name: Router di casa
device: Router salotto
download_entity: sensor.router_download
upload_entity: sensor.router_upload
wifi_entities:
  - entity: switch.router_wifi_ospiti
    name: Wi-Fi ospiti
```

## Elenco dei dispositivi di rete (pulsante "Dispositivi in rete")

Se in Home Assistant c'è l'integrazione del tuo router (FRITZ!Box, UniFi, TP-Link...) e/o **Nmap Tracker**, in alto sulla card compare un pulsante con l'icona di un monitor. Se non c'è nessuna fonte, il pulsante resta nascosto.

1. Clicca l'icona del monitor.
2. Si apre l'elenco: nome, indirizzo IP, MAC, rete Wi-Fi (se la conosce) e un pallino verde (a casa) o grigio (fuori, con l'ultima volta in cui è stato visto).
3. L'elenco è in ordine di IP (192.168.1.2 prima di 192.168.1.10).
4. In alto scegli **Connessi** (solo quelli a casa) o **Tutti**.
5. Clicca una riga per aprire la scheda dell'entità.

Se hai sia il router sia Nmap, i due elenchi vengono uniti per MAC: ogni dispositivo compare una volta sola, col nome dato dal router.

Per cambiare fonte usa `devices_source` (nell'editor: "Dove prendere l'elenco dei dispositivi"):

```yaml
devices_source: auto   # auto (default: router + Nmap) | router | nmap
```

Per avere Nmap: Impostazioni > Dispositivi e servizi > Aggiungi integrazione > **Nmap Tracker**, poi scrivi la tua rete (per esempio `192.168.1.0/24`).

## Problemi comuni

- **Il router sbagliato.** Con più dispositivi di rete (switch, access point) scegli a mano il router in **Dispositivo router**.
- **Non vedo il numero dei dispositivi.** Il tuo router non ha un sensore dedicato e non ci sono `device_tracker` collegati: scegli `clients_entity`.
- **Le barre sono sempre piene o vuote.** Imposta `limit_down_entity` / `limit_up_entity` oppure `max_mbps` (per esempio `500`).
- **Il pulsante Riavvia non c'è.** L'integrazione del tuo router non lo offre: se hai un pulsante o uno script, indicalo con `reboot_entity`.
- **Dopo l'aggiornamento non cambia niente.** Premi Ctrl+F5.

Questa card non sostituisce la [card FRITZ!Box](fritzbox.md) (più ricca ma solo per FRITZ!Box): la nuova va bene per qualunque marca.

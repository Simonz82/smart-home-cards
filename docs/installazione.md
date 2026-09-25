# Installazione — guida passo passo

Questa guida presuppone che tu non abbia mai installato una "custom card" prima. Se hai già dimestichezza, puoi saltare direttamente alla sezione [Installazione rapida](../README.md#installazione-rapida) del README.

## 0. Con HACS (se preferisci non copiare i file a mano)

Se hai [HACS](https://hacs.xyz) installato, puoi aggiungere questo repository come **repository personalizzato** e lasciare che sia lui a scaricare e aggiornare il file:

1. Apri **HACS** dal menu laterale.
2. Tre puntini in alto a destra → **Repository personalizzati**.
3. URL: `https://github.com/Simonz82/smart-home-cards`, Categoria: **Dashboard**.
4. Cerca "Smart Home Cards" nell'elenco di HACS e installala.
5. HACS aggiunge da solo la risorsa `/hacsfiles/smart-home-cards/smart-home-cards.js` alla dashboard: non serve il passo 4 qui sotto ("Registra il file come risorsa"). Da qui in poi continua dal punto 6 ("Aggiungi la card alla dashboard").

Da questo momento, quando pubblico un aggiornamento, HACS te lo segnala e lo installi con un clic, senza ricopiare nulla a mano.

⚠️ **HACS scarica solo il file della card**, non le altre cartelle del repository. Se la tua card è tra quelle con una **foto prodotto** (FritzBox, Server HA, NAS, Proxmox, UPS), quella foto **non arriva da sola**: copia comunque a mano la cartella [`foto-pkg/`](../foto-pkg/) come spiegato nel punto "[Immagini prodotto](#immagini-prodotto-facoltativo)" qui sotto, altrimenti quel riquadro resta vuoto (dalla versione con questo avviso, non mostra più un'icona di errore).

### ✅ Checklist: cosa devi ancora fare a mano (con HACS o senza)

**HACS (o il file copiato a mano) installa solo il codice della card.** Da solo mostra la card "vuota", con solo qualche sensore se lo colleghi dall'editor visuale. Per avere davvero **tutto** — foto, notifiche, e il pulsante ⚙️ Impostazioni popolato — mancano ancora questi passaggi, sempre manuali, HACS o no:

1. **Foto prodotto** (solo FritzBox, Server HA, NAS, Proxmox, UPS) — copia la cartella [`foto-pkg/`](../foto-pkg/) dentro `/config/www/foto-pkg/`. Senza, quel riquadro resta vuoto (non più un'icona rotta, ma resta vuoto). Dettagli: "[Immagini prodotto](#immagini-prodotto-facoltativo)" qui sotto.
2. **Il "vero" package** (sensori, notifiche, automazioni dietro la card) — ogni guida di card ha in cima una sezione **"🚀 Metodo veloce: usa il mio package originale"** con il file reale da copiare in `/config/packages/` e le poche righe da adattare. Senza questo, la card mostra solo i sensori che le colleghi a mano, niente report/notifiche/backup automatici.
3. **Il blocco `settings_sections` / `actions` nella configurazione della card** — è quello che riempie il popup dell'ingranaggio ⚙️ (report, notifiche, soglie, backup, riavvii...). **L'editor visuale non può scriverlo**: sono elenchi troppo complessi per un editor a campi, quindi restano sempre YAML da incollare a mano. Senza, l'ingranaggio si apre ma mostra solo "Nessuna impostazione configurata" — non è un errore, è normale finché non lo aggiungi. Lo trovi già scritto, pronto da copiare e adattare, nell'esempio YAML della guida della tua card (stessa sezione del punto 2).
4. **Layout classico/centrato** (facoltativo) — copia anche [`packages/layout_schede.yaml`](../packages/layout_schede.yaml) e aggiungi `layout_entity: input_select.layout_<nome>` alla card. Senza, la card resta comunque nel layout di default, solo senza il menu per cambiarlo. Dettagli: [layout.md](layout.md).

Ogni guida di card (NAS, Server HA, FritzBox, ecc.) ripete i punti 2 e 3 nella propria sezione "🖊️ Editor visuale", con i nomi esatti dei file e delle entità per quella card.

Se preferisci il metodo manuale (nessuna dipendenza da HACS), salta questo punto e continua da qui sotto — la checklist qui sopra vale comunque, alla fine.

## 1. Cosa ti serve prima di iniziare

- Un'installazione Home Assistant funzionante (OS, Supervised, Container o Core — non cambia nulla).
- Un modo per copiare un file dentro la cartella `/config/www/` del tuo Home Assistant. I modi più comuni:
  - L'add-on **File editor** (Impostazioni → Componenti aggiuntivi → cerca "File editor", installalo se non c'è).
  - L'add-on **Studio Code Server** (stesso risultato, interfaccia diversa).
  - Una condivisione di rete Samba, se hai l'add-on **Samba share** attivo.
- 5 minuti.

## 2. Scarica il file della card

Vai alla pagina del file [`smart-home-cards.js`](../smart-home-cards.js) su GitHub, premi il pulsante "Raw", poi salva la pagina (Ctrl+S / Cmd+S) sul tuo computer.

## 3. Copia il file nella cartella giusta

Il file deve finire dentro `/config/www/`. Se quella cartella non esiste ancora, creala (è normale che non ci sia se non l'hai mai usata prima).

- **Con File editor**: apri l'add-on, icona cartella in alto a sinistra, vai su `www` (creala se manca), pulsante di upload, seleziona `smart-home-cards.js`.
- **Con Samba**: apri la cartella condivisa del tuo Home Assistant da un PC, entra in `www`, incolla il file.

Alla fine il file deve trovarsi esattamente in `/config/www/smart-home-cards.js`.

### Immagini prodotto (facoltativo)

Le card FritzBox, Server, NAS, Proxmox e UPS mostrano anche una piccola foto/logo del dispositivo. Se vuoi vederle, copia anche l'intera cartella [`foto-pkg/`](../foto-pkg/) dentro `/config/www/foto-pkg/` (stesso procedimento del passo precedente, ma su una cartella invece che un file singolo). Senza quella cartella le card funzionano lo stesso, semplicemente quel riquadro resta vuoto.

Per la card Raccolta Differenziata, allo stesso modo, copia la cartella [`rifiuti/`](../rifiuti/) dentro `/config/www/rifiuti/` — vedi [docs/differenziata.md](differenziata.md).

## 4. Registra il file come risorsa della dashboard

Home Assistant non carica automaticamente i file dentro `www/`: vanno dichiarati come "risorsa".

1. Impostazioni → Dashboard.
2. In alto a destra, i tre puntini verticali (⋮) → **Risorse**.
3. **Aggiungi risorsa**.
4. URL: `/local/smart-home-cards.js` (sì, `/local/` anche se il file è dentro `www/` — è così che Home Assistant lo chiama).
5. Tipo di risorsa: **Modulo JavaScript**.
6. Salva.

> Se non vedi la voce "Risorse", la tua dashboard è ancora in modalità "solo YAML" molto vecchia stile, oppure devi attivare la modalità avanzata dal tuo profilo utente (in basso a sinistra → il tuo nome → attiva "Modalità avanzata").

## 5. Ricarica la pagina

Chiudi e riapri la scheda del browser (o l'app), meglio ancora con una ricarica forzata che svuota la cache (`Ctrl+F5` su desktop; su cellulare/app basta chiudere e riaprire l'app).

## 6. Aggiungi la card alla dashboard

1. Apri la dashboard dove vuoi mettere la card, entra in modalità modifica (matita in alto a destra).
2. **Aggiungi card**, scorri in fondo, scegli **Manuale** (o cerca "Manual"/YAML).
3. Cancella il contenuto di esempio e incolla la configurazione della card che ti interessa — le trovi già pronte, con spiegazione di ogni campo, in una di queste guide:
   - [🧺 Elettrodomestici](elettrodomestici.md)
   - [⚡ Energia Casa](energia.md)
   - [📶 FritzBox / Router](fritzbox.md)
   - [🖥️ Server Home Assistant](homeassistant-server.md)
   - [💾 NAS Synology](nas-synology.md)
   - [🖧 Proxmox](proxmox.md)
   - [🔋 UPS](ups.md)
   - [♻️ Raccolta Differenziata](differenziata.md)
   - [🔔 Centro Notifiche](centro-notifiche.md)
   - [🔊 Alexa Annuncio Testo / Memo](alexa.md)
4. Sostituisci ogni `sensor.esempio_xxx` (o `switch.`/`input_boolean.`/ecc.) con le tue vere entità.
5. Salva.

## Come trovo il nome esatto delle mie entità?

Impostazioni → Dispositivi e servizi → scheda **Entità** in alto, poi cerca per nome. Oppure, più veloce: Impostazioni → Strumenti per sviluppatori → Stati, e digita una parola chiave (es. "potenza", "power", "cpu").

## Qualcosa non funziona?

- **La card appare come "Elemento sconosciuto: custom-element non ancora caricato"**: la risorsa non è stata caricata correttamente, o la pagina non è stata ricaricata dopo averla aggiunta. Ricontrolla il passo 4, poi ricarica di nuovo.
- **La card appare ma alcuni valori restano `—`**: uno o più `entity` scritti nella configurazione non esistono, o sono scritti con un errore di battitura. Controlla il nome esatto come sopra.
- **Un campo è obbligatorio e non l'hai messo**: ogni guida indica quali campi sono obbligatori (es. `power_entity` per gli elettrodomestici) — senza quello la card non si carica affatto e la dashboard mostra un errore rosso.

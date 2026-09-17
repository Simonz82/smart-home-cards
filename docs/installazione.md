# Installazione — guida passo passo

Questa guida presuppone che tu non abbia mai installato una "custom card" prima. Se hai già dimestichezza, puoi saltare direttamente alla sezione [Installazione rapida](../README.md#installazione-rapida) del README.

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
4. Sostituisci ogni `sensor.esempio_xxx` (o `switch.`/`input_boolean.`/ecc.) con le tue vere entità.
5. Salva.

## Come trovo il nome esatto delle mie entità?

Impostazioni → Dispositivi e servizi → scheda **Entità** in alto, poi cerca per nome. Oppure, più veloce: Impostazioni → Strumenti per sviluppatori → Stati, e digita una parola chiave (es. "potenza", "power", "cpu").

## Qualcosa non funziona?

- **La card appare come "Elemento sconosciuto: custom-element non ancora caricato"**: la risorsa non è stata caricata correttamente, o la pagina non è stata ricaricata dopo averla aggiunta. Ricontrolla il passo 4, poi ricarica di nuovo.
- **La card appare ma alcuni valori restano `—`**: uno o più `entity` scritti nella configurazione non esistono, o sono scritti con un errore di battitura. Controlla il nome esatto come sopra.
- **Un campo è obbligatorio e non l'hai messo**: ogni guida indica quali campi sono obbligatori (es. `power_entity` per gli elettrodomestici) — senza quello la card non si carica affatto e la dashboard mostra un errore rosso.

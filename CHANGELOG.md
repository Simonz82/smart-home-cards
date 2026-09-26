# Changelog

## 2026-09-26 — Nuova card Alexa WebRadio

- **Nuova card 📻 Alexa WebRadio** (`shc-alexa-webradio-card`): stazioni TuneIn e playlist Spotify/Amazon Music/Deezer su Alexa multiroom, in griglie con logo piccolo (non a schermo intero) raggruppate per servizio. Volume, chip per aggiungere/rimuovere gli speaker dal gruppo, e due pulsanti dedicati per **Sveglia programmata** (due orari, giorni della settimana) e **Volume ridotto automatico** allo spegnimento, entrambi in popup senza uscire dalla card.
- **Editor visuale** incluso fin dal primo rilascio (nessun giro extra come per le prime due card Alexa).
- Nuovo package: [`packages/alexa_webradio.yaml`](packages/alexa_webradio.yaml) — ripulito dal tag di versione legacy `[V1.8]` e dalla sintassi `service:` (ora `action:`), stessa logica del package originale.
- Guida aggiornata: [docs/alexa.md](docs/alexa.md).

## 2026-09-25 — Fix ingranaggio vuoto, guida installazione più chiara

- **Fix**: l'icona ⚙️ Impostazioni, su una card senza `settings_sections`/`actions` configurati (il caso di chi installa via HACS e usa solo l'editor visuale), si apriva mostrando un popup vuoto — facile scambiarlo per "non fa niente". Ora mostra "Nessuna impostazione configurata" su tutte le card che ne erano prive (Elettrodomestici, FritzBox, Server HA, NAS, Energia, Differenziata, Proxmox — la UPS lo aveva già).
- **Guida installazione** (`docs/installazione.md`): aggiunta una checklist esplicita, per punti, di cosa resta comunque da fare a mano dopo l'installazione via HACS (foto prodotto, package reale, blocco `settings_sections`/`actions`, layout) — prima queste info erano solo accennate ed era facile perdersele, pensando che la card fosse rotta invece che semplicemente non ancora configurata. Aggiornato anche l'elenco delle guide (mancavano Differenziata, Centro Notifiche, Alexa) e corretto un link a un repo vecchio per Energia Casa.
- Ogni guida di card ripete ora lo stesso avviso nella propria sezione "🖊️ Editor visuale": l'editor a campi non può scrivere `settings_sections`/`actions`, va sempre incollato a mano dal blocco YAML della guida.

## 2026-09-24 — Nuove card Alexa: Annuncio Testo e Memo

- **Nuova card 🔊 Alexa Annuncio Testo** (`shc-alexa-text-card`): scrivi un messaggio, scegli lo speaker (o il gruppo multiroom) e il volume, e lo riproduci con un tap su Alexa. Guida: [docs/alexa.md](docs/alexa.md).
- **Nuova card 🔊 Alexa Memo** (`shc-alexa-memo-card`): fino a **4 promemoria vocali indipendenti**, ciascuno con proprio testo, intervallo di date + orario (oppure singola data/ora se non ripetuto) e dispositivi Alexa scelti con chip multi-selezione nell'editor visuale. Campo **Persona** opzionale: se all'orario previsto la persona non è in casa, l'annuncio resta "in sospeso" e viene fatto pochi minuti dopo il suo rientro. Uno stepper sulla card Memo 1 sblocca progressivamente Memo 3 e 4.
- Entrambe riusano il motore vocale condiviso di `centro_notifiche_alexa.yaml`, lo stesso già usato da Raccolta Differenziata e dalle altre card.
- **Editor visuale** per entrambe (mancava al primo rilascio): "Aggiungi card" ora propone i campi giusti invece di lasciarti scrivere lo YAML a mano.
- Nuovi package: [`packages/alexa_text.yaml`](packages/alexa_text.yaml) (rinominato da `alexa_google_text.yaml`, "Google" era solo un residuo di naming legacy), [`packages/memo_alexa.yaml`](packages/memo_alexa.yaml).
- Card **NAS Synology**: aggiunto il campo **Stato di sicurezza** all'editor visuale — era già gestito dalla card e documentato, ma non selezionabile senza scrivere YAML a mano.
- Schermate reali (tema scuro) per entrambe le card Alexa, i loro editor e il popup "Come funziona" del memo.

## 2026-09-21 (sera) — Grafici, Statistiche e differenziata

- **Nuovo pulsante 📈 Grafici** su tutte le card: finestra con il grafico storico in **24 h · 7 gg · 30 gg · da … a** (date a scelta), che si adatta a PC e smartphone, con linea guida, minimo/media/massimo e curve sovrapposte dove serve. Guida: [docs/grafici.md](docs/grafici.md).
- I grafici usano la **cronologia reale** fino a 8 giorni (per la potenza si tiene il **picco**: 2 100 W restano 2 100 W, non una media di 400 W) e le statistiche a lungo termine oltre; linea a gradini come lo stato reale.
- Toccando le barre delle card (CPU, batteria, carico, circuiti…) si apre lo stesso grafico, non più solo le ultime 6 ore.
- Card **Elettrodomestici**: nel popup **Statistiche** (barrette) tornano tutti i consumi: per periodo (oggi, ieri, mese, anno…), ultimi 7 giorni e i due istogrammi (mese e anno).
- Card **FritzBox**: la campanella degli aggiornamenti è l'ultimo pulsante a destra; le due barre live hanno il fondoscala uguale alla **portante agganciata + 2%** (download con il download, upload con l'upload).
- Card **Raccolta differenziata**: nuovo pulsante **Tipi di raccolta** (l'ultimo a destra) per scrivere a mano i tipi di rifiuto del proprio comune; Impostazioni in finestra nativa. Guida, package e schermate nel repo dedicato [ha_garbage](https://github.com/Simonz82/ha_garbage).
- Tutte le schermate della guida sono rifatte (classico/centrato, chiaro/scuro).

## 2026-09-21 — Layout classico / centrato

- Ogni card si può mostrare in **due layout**: *classico* (foto a sinistra) o *centrato* (foto al centro in alto, informazioni su due colonne, poi le barre). La scelta è la prima riga **Layout** delle Impostazioni di ogni card. Nuova guida: [docs/layout.md](docs/layout.md), con le schermate di tutte le card nei due layout e nei due temi.
- Nuovo package [`packages/layout_schede.yaml`](packages/layout_schede.yaml) con un menu (`input_select`) per card; nuovi parametri della card `layout_entity` e `layout`.
- Le righe `input_select` dei popup nativi sono ora un vero **menu a tendina** (prima aprivano la finestra dell'entità).
- Card **Energia Casa**: divisione 40/60 nel layout centrato; in "Top consumo" si accorcia il nome del dispositivo e mai i watt; grafico delle barre più alto con etichette dell'asse non tagliate.
- Card **UPS**: la riga del layout sta in una sezione "Aspetto" a parte.
- Rimossi dal codice e dalle descrizioni i riferimenti a un'altra famiglia grafica: le card sono semplicemente "card per Home Assistant".

## 2026-09-17 — Prima pubblicazione

- Pubblicate le 7 card: Elettrodomestici, Energia Casa, FritzBox, Server Home Assistant, NAS Synology, Proxmox, UPS.
- Guida di installazione passo-passo, guida al mini-linguaggio del popup Impostazioni (`settings_sections`), guida al pattern di notifiche personalizzate push/Alexa.
- Documentazione campo per campo per ogni card, con esempi YAML completi.

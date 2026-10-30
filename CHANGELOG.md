# Changelog

## 2026-10-31 — 1.14.1: climatizzatore, ventola e pulsanti (#4, #5, #6)

- **Fix (#4)**: i nomi delle velocità della ventola sono riconosciuti senza distinguere maiuscole e minuscole (`Auto`, `auto`, `Silence`...); aggiunto `silence` → "Silenzioso". Il click invia sempre il valore reale di `fan_modes`.
- **Fix (#4)**: l'automazione della ventola nel package `clima.yaml` usa il valore reale di `fan_modes`, quindi funziona sia con Daikin Onecta (`auto`) sia con la Daikin AC core (`Auto`).
- **Nuovo (#6)**: il pulsante **Consumi** compare solo se c'è almeno uno tra `power_entity`, `energy_entity` o `consumption.*`; il pulsante **Programmazione** solo se gli helper di `schedule` esistono in Home Assistant.
- **Nuovo (#6)**: opzioni `hide_consumi` e `hide_schedule` per nascondere i pulsanti a mano.
- **Nuovo (#5)**: opzione `fan_auto_in_schedule`: toglie la pillola "Ventola automatica" dalla card e mette l'interruttore nel popup Programmazione (che si apre anche senza helper di programmazione).
- Editor visuale: aggiunte le tre opzioni. Tutte sono spente di default.
- Nota aggiornamento: se usavi la card senza sensori di consumo o senza helper di programmazione, i due pulsanti ora non compaiono più (prima aprivano un popup vuoto).

## 2026-10-30 (2) — 1.14.0: Tablet a muro e "Togli corrente" facoltativo

- **Elettrodomestici, nuovo disegno `tablet`**: tablet a muro con lo schermo che si illumina quando lo stato è "running"; nell'editor visuale compare come "Tablet a muro".
- **`side.rows`**: nuove icone `sun`, `user`, `home` e nuovo formato `ratio` (con `max`, es. 60 su 255).
- **Nuove opzioni**: `hide_consumi: true` (nasconde il pulsante Consumi per dispositivi senza energia) e `bar_color` (colore fisso della barra principale, es. batteria verde).
- **Opzione "Togli corrente" (solo per chi la vuole)**: `power_cut_entity` (uno `switch.*`) e `allow_power_cut` (predefinito `false`). Nell'editor c'è la sezione "Togli corrente (facoltativo)"; la spunta resta attiva solo dopo una conferma "Sei sicuro?" e ogni spegnimento chiede di nuovo conferma. Non viene mai offerta per il disegno `fridge` né per entità frigo/freezer. Non è attiva in nessun esempio.
- Le modifiche sono solo aggiuntive: le altre card non cambiano.
- README: nuove sezioni Frigo e Tablet a muro con immagine ed esempio YAML.

## 2026-10-30 — 1.13.0: Frigorifero e Samsung con LocalThings

- **Elettrodomestici, nuovo disegno `fridge`**: frigorifero (anche come icona piccola). Per un frigo non smart basta la presa con misura dei Watt.
- **Elettrodomestici, nuova opzione `side`**: al posto del riquadro "Ultimo ciclo" un pannello tuo con fino a 4 righe (`label`, `icon`, `entity`, `format`: `onoff`, `hours`, `count`, `percent`, `kwh`, `since`). Vale per qualunque disegno. Nell'editor visuale c'è anche "Frigorifero" tra i tipi.
- **Niente interruttore on/off sul frigo, di proposito**: così un tocco sbagliato non può togliere corrente al cibo. Spiegato nella guida.
- **Package `frigo.yaml`**: compressore acceso dedotto dai Watt (con attese anti-picco) e contatori di oggi (tempo acceso, avvii).
- **Elettrodomestici Samsung con LocalThings** (asciugatrice e simili): pulsanti Avvia/Pausa/Stop (`controls.start_button`, `pause_button`, `running_entity`...), `select` extra, formati `minutes`/`hms`, `zero_label`, `hide_values`, avvisi `warn_entities` con `not_states` e `{state}` nell'etichetta.
- Guida [docs/elettrodomestici.md](docs/elettrodomestici.md): nuove sezioni "Frigorifero non smart" e "Samsung con LocalThings".

## 2026-10-28 (2) — 1.12.1: banda della potenza solo se c'è il sensore

- **Elettrodomestici**: la banda "Potenza attuale" non compare più se manca il sensore in Watt (`power_entity` vuoto o entità che non esiste): niente più barra ferma a 0 W. Nuova opzione `hide_power: true` (anche nell'editor) per toglierla comunque. `power_entity` non è più obbligatorio se c'è `live.state_entity`: chi ha un elettrodomestico smart senza presa con misura usa solo lo stato.
- **Climatizzatore**: stessa logica, opzione `hide_power` anche nell'editor (sezione Consumi).
- **Fix Climatizzatore, Stufetta, Ventilatore, Caldaia**: le righe senza sensore configurato (umidità, esterna, pressione...) restavano visibili con "—" invece di sparire.
- **README**: immagini e link con indirizzi completi, così anche la pagina della card dentro HACS mostra la galleria come su GitHub.

## 2026-10-28 — 1.12.0: Climatizzatore, pulsante "Ventola automatica"

- **Climatizzatore**: nuovo campo `fan_auto_entity` (anche nell'editor visuale). Sulla card compare il pulsante **Ventola automatica / Ventola manuale** che apre il popup Ventola, dove un interruttore accende o spegne l'automazione. Scegliere a mano una velocità spegne l'automatica da sola. Nuovo campo facoltativo `fan_auto_hint` per il testo di spiegazione.
- **Package `clima.yaml`**: aggiunti `input_boolean.clima_salone_ventola_automatica` e l'automazione che porta la ventola su auto, 3 o 2 a seconda di quanto manca alla temperatura impostata (cambia la ventola solo quando serve).
- Guida [docs/clima.md](docs/clima.md) aggiornata.

## 2026-10-28 — 1.11.3: card Proxmox, logo giusto e campi mancanti nell'editor

- **Fix Proxmox**: senza `artwork` la card mostrava il logo di Home Assistant al posto di quello di Proxmox; ora il predefinito è `proxmox` (anche quando la card viene aggiunta dal selettore). Segnalato nella issue #2.
- **Editor Proxmox**: aggiunti i campi che mancavano nella sezione Sistema: stato del nodo, contenitori attivi, VM attive, ultimo avvio, RAM usata, RAM libera e disco local-lvm. Prima si potevano impostare solo da YAML.
- Guida [docs/proxmox.md](docs/proxmox.md) aggiornata.

## 2026-10-26 (2) — 1.11.2: galleria animata nel README, due fix

- **README**: nuova sezione "Tutte le card a colpo d'occhio" con tutte le 17 card; elettrodomestici, climatizzatore, stufetta, ventilatore, caldaia e rete Zigbee sono GIF animate, accese e in funzione.
- **Fix Caldaia**: quando l'acqua calda era in uso, la card scriveva "In uso" sopra tutta la card e la svuotava (la classe di stato aveva lo stesso nome della riga Acqua).
- **Fix Stufetta, Ventilatore, Caldaia** con "Nascondi se scollegata": quando il dispositivo tornava online, il badge di stato in alto restava vuoto fino al ricaricamento della pagina.

## 2026-10-26 — Alexa: scegli su quali dispositivi annunciare, card per card

- **Energia, Elettrodomestici, FritzBox**: nell'ingranaggio ci sono 4 nuovi interruttori **↳ Alexa Salone, Bagno, Cameretta, Camera**. Ogni card annuncia solo sulle Alexa accese, anche più di una (es. Energia su salone e bagno, Lavatrice solo in salone). Niente più elenco di dispositivi da scrivere nel package.
- Script condiviso `notifica_vocale_alexa`: nuovo campo facoltativo `flag_dispositivi`. Guida: [docs/centro-notifiche.md](docs/centro-notifiche.md#scegliere-su-quali-alexa-annunciare).
- **Energia, avviso soglia**: Alexa lo dice **una volta sola** (volume 0,5) e poi aspetta almeno 5 minuti, invece di ripeterlo ogni 10 secondi finché il consumo resta alto.
- Nessuna modifica al file JS delle card: aggiornare i package e le `settings_sections`.

## 2026-10-25 (9) — 1.11.1: barre staccate anche su Climatizzatore e Stufetta

- **Climatizzatore e Stufetta**: la barra dell'umidità è staccata di qualche pixel da quella della temperatura, come nella Caldaia: si legge meglio (opzione `bar_gap: false` per attaccarle).
- **Climatizzatore**: l'aria animata segue la **potenza** della presa: rallenta e sbiadisce quando l'inverter modula, e sotto `idle_power` (60 W) la card mostra "In pausa". Utile con le integrazioni che non dicono se il compressore è fermo (es. Daikin Onecta).
- Guide: specificato che le immagini dei dispositivi sono animate (si muovono come una GIF e cambiano colore in base a temperatura, stato e livello).

## 2026-10-25 (8) — 1.11.0: comandi a distanza per gli elettrodomestici, scale più fitte

- **Elettrodomestici, comandi a distanza** (nuovo campo `controls`, facoltativo): riquadro **Comandi** sotto il riepilogo con Avvia, Stop (doppio tocco per sicurezza), Accendi/Spegni e il popup **Programmi** con programmi, opzioni e avvio ritardato (Subito…8 h). Pensato per Home Connect (esempio reale: lavastoviglie Bosch, nomi dei programmi in italiano); con `machine_select` anche Avvia/Pausa/Riprendi/Stop per gli elettrodomestici SmartThings che li accettano. Se il controllo remoto è spento sulla macchina, i pulsanti si disattivano e la card spiega cosa fare. Guida: [docs/elettrodomestici.md](docs/elettrodomestici.md), sezione "Comandi a distanza".
- **Climatizzatore, Stufetta, Caldaia**: la scala della temperatura ha un numero **per ogni grado** (nuova opzione `scale_step` per tornare a 2 o più). Il Ventilatore resta com'era.
- **Caldaia**: la barra della pressione è **staccata** di qualche pixel da quella della temperatura e ha un numero **ogni 0,25 bar** (nuova opzione `pressure_scale_step`).
- Schermate aggiornate di Climatizzatore, Stufetta e Caldaia.

## 2026-10-25 (7) — 1.10.0: Stufetta, Ventilatore, Caldaia e caloriferi

- **Nuova card 🔥 Stufetta** (`shc-heater-card`): stufetta animata con onde di calore per livello (H1/H2/H3), gauge dritta con temperatura e umidità della stanza e cursore della soglia, pulsanti per livelli, solo ventilazione e oscillazione, popup gestione automatica, impostazioni e stato. Esempio reale: Dreo 314S (DR-HSH004S), ma va bene qualsiasi stufetta `climate.`. Package [`packages/stufetta.yaml`](packages/stufetta.yaml): ogni accensione parte in H3, alla soglia della stanza scende a H1/H2. Guida: [docs/stufetta.md](docs/stufetta.md).
- **Nuova card 🌀 Ventilatore** (`shc-fan-card`): pale animate con velocità reale, testa che oscilla, nebbia e luce colorata; velocità con − e +, modalità, oscillazione, nebbia; popup programmazione (una tantum, giorno/notte, timer), nebbia e luce, stato e manutenzione (serbatoio, ore di pulizia). Esempio reale: Dreo DR-HEC005S con nebulizzatore, ma va bene qualsiasi ventilatore `fan.`. Package [`packages/ventilatore.yaml`](packages/ventilatore.yaml). Guida: [docs/ventilatore.md](docs/ventilatore.md).
- **Nuova card 🔥 Caldaia e caloriferi** (`shc-boiler-card`): caldaia animata collegata a un calorifero (fiamma, mandata/ritorno, acqua calda), gauge dritta con temperatura di casa e impostata (anche da spenta) e **barra della pressione impianto** con lancetta; − e + anche a caldaia spenta; modalità, programmi P1/P2/P3, camino; **consumi gas** oggi/settimana/mese/anno e storico per giorni, settimane, mesi e anni, divisi riscaldamento e acqua calda, dalle statistiche a lungo termine. Esempio reale: Baxi Luna Classic con Remeha Home, ma va bene qualsiasi caldaia o termostato `climate.`. Package [`packages/caldaia_remeha.yaml`](packages/caldaia_remeha.yaml) (gas stimato, avvisi pressione e caldaia offline; i sensori del gas non tornano a 0 quando la caldaia è offline, così le statistiche non contano doppio). Guida: [docs/caldaia.md](docs/caldaia.md).
- **Nascondi se scollegata** (stufetta, ventilatore, caldaia): casella nell'editor e interruttore nel popup ℹ️. Quando il dispositivo non risponde la card diventa una striscia bassa "… offline"; toccandola si riapre la card o si toglie l'opzione. La scelta fatta dal popup viene salvata nella dashboard.
- Editor visuale: nuovo tipo di campo sì/no (casella).

## 2026-10-25 (6) — 1.9.1: Climatizzatore con split animato e gauge dritta

- **Card ❄️ Climatizzatore**: in alto lo **split che soffia aria**, animato come il cestello di lavatrice e lavastoviglie. Aria blu in raffrescamento, arancio in riscaldamento, azzurra in deumidifica, grigia in ventilazione; tenue quando la stanza è in temperatura, ferma e grigia da spento. Sul display la temperatura impostata.
- **Gauge dritta** al posto di quella rotonda: scala della temperatura sopra con lancetta della stanza e **lancetta rossa della temperatura impostata** (anche a clima spento), barra dell'umidità 2 px sotto con la sua scala e lancetta. Lancette bianche con contorno nero, leggibili su ogni colore.
- **− e + funzionano anche a clima spento**: imposti la temperatura prima di accenderlo.
- Tolta la barra "Umidità stanza" in fondo (è già nella gauge dritta).
- Nuove opzioni `hero` (`immagine` o `gauge` per la gauge rotonda di prima, ora con lancette a contorno nero), `segments` e `humidity_segments`. Non serve più gauge-card-pro.
- Guida aggiornata con schermate chiaro/scuro, riscaldamento e spento: [docs/clima.md](docs/clima.md).

## 2026-10-25 (5) — 1.9.0: nuova card Climatizzatore

- **Nuova card ❄️ Climatizzatore** (`shc-climate-card`), layout centrato di default. Al posto della foto c'è la **gauge** (gauge-card-pro, oppure la gauge standard di HA se non è installata) con temperatura stanza, temperatura impostata e umidità.
- Comandi diretti: accendi/spegni (riaccende nell'ultima modalità), − e + con più tocchi raccolti in un solo comando, un pulsante per ogni modalità supportata, alette oscillanti.
- Riquadro Clima: stanza, impostata, umidità, esterna, potenza, consumo di oggi. Barre potenza e umidità.
- **⚙️ Programmazione** accensione/spegnimento una tantum, con pillola sulla card quando è attiva. **📊 Consumi** freddo/caldo per giorno, settimana, mese, anno. **🌀 Ventola e alette** con preset. **ℹ️ Stato e diagnostica** con sensori di errore che fanno scattare l'avviso.
- Nuovo package [`packages/clima.yaml`](packages/clima.yaml) (sintassi aggiornata `triggers:`/`actions:`). Editor visuale incluso.
- Guida: [docs/clima.md](docs/clima.md).

## 2026-10-25 (4) — 1.8.3: ordine elenco Zigbee

- Elenco Dispositivi della card Rete Zigbee: di nuovo prima gli offline, poi in ordine alfabetico.

## 2026-10-25 (3) — 1.8.2: abbinamento con conto alla rovescia e ripetitore scelto

- **Card Rete Zigbee, ⚙️ Abbinamenti**: conto alla rovescia grande con barra del tempo che resta (anche nel badge della card), pulsante Ferma abbinamento.
- **Abbina tramite**: si può forzare l'abbinamento da un ripetitore preciso o dal solo coordinatore, come nell'interfaccia di Zigbee2MQTT.
- Elenco Dispositivi in **ordine alfabetico** (gli offline restano evidenziati in rosso e filtrabili).
- Package: nuovo `sensor.zigbee_abbinamento_fine` (MQTT, da `bridge/info`). Nuove opzioni card `pairing_end_entity` e `base_topic`.

## 2026-10-25 (2) — 1.8.1: fix card Rete Zigbee

- **Fix**: il pulsante "Apri" dell'interfaccia Zigbee2MQTT portava alla dashboard principale. Il percorso giusto è quello del pannello nel menu laterale (es. `/45df7312_zigbee2mqtt`): le versioni recenti di Home Assistant non hanno più `/hassio/ingress/...`. Esempio e guida corretti.
- La colonna a destra non ripete più l'LQI medio, già mostrato nella barra "Segnale medio".

## 2026-10-25 — 1.8.0: nuova card Rete Zigbee

- **Nuova card 📡 Rete Zigbee** (`shc-zigbee-card`) per Zigbee2MQTT, stessa grafica della card FritzBox. Simbolo Zigbee animato: verde con onde radio se tutto è online, rosso che trema se qualcosa è offline. A destra LQI medio, LQI minimo con il nome del dispositivo, dispositivi a rete e a batteria; la riga "Batt. bassa" compare solo sotto soglia.
- **⚙️ Abbinamenti**: permit join, ultimi dispositivi abbinati, versione e stato del bridge, livello di log, apertura dell'interfaccia Zigbee2MQTT, riavvio con conferma.
- **📊 Dispositivi**: elenco con foto (cartella locale, altrimenti dal sito di Zigbee2MQTT), filtri, ricerca, tacche del segnale, batteria, "offline da". Scheda del singolo dispositivo con esclusione da conteggio e avvisi.
- **🔋 Segnale e batterie**: classifiche dal più debole e dalla più scarica.
- **🔔 Notifiche**: avvisi offline/nuovi dispositivi/batteria bassa, soglie, fascia oraria con riepilogo all'apertura, già avvisati, esclusi, notifica di prova.
- **📈 Grafici**: dispositivi online, LQI medio, LQI minimo.
- Nuovo package [`packages/centro_controllo_zigbee.yaml`](packages/centro_controllo_zigbee.yaml): sopravvive a riavvii e ricaricamenti senza avvisi doppi. Editor visuale incluso.
- Guida: [docs/zigbee.md](docs/zigbee.md).

## 2026-10-20 — 1.7.0: card Alexa configurabili senza toccare il JS

- **Alexa Memo e Alexa WebRadio**: speaker, stazioni, script aggiungi/rimuovi e giorni della sveglia non sono più scritti dentro `smart-home-cards.js`. Sono nuove opzioni della card: `devices` (Memo), `speakers`, `stations`, `image_path`, `add_script`, `remove_script`, `alarm_days` (WebRadio). Prima andavano modificati nel file JS, e ogni aggiornamento HACS cancellava le modifiche.
- I valori di prima restano come **default**: chi usa i miei package non deve cambiare niente, la card appare identica.
- **Editor visuale**: gli elenchi (speaker, stazioni, giorni) si modificano con Aggiungi/Rimuovi, ogni elenco si apre con "mostra/modifica".
- Uno speaker senza `name` prende il friendly name dell'entità.
- I chip degli speaker della WebRadio lanciano gli script con `script.turn_on`, come la card Alexa Annuncio Testo.
- **README e guida installazione**: per HACS si parte dalla ricerca diretta di "Smart Home Cards"; il repository personalizzato resta come alternativa.
- **Guida Elettrodomestici**: esempio completo di `week_rows` (sezione "Ultimi 7 giorni") e controllo delle statistiche per `energy_stat_entity`.
- Guida aggiornata: [docs/alexa.md](docs/alexa.md#speaker-stazioni-e-sveglia-personalizzati).

## 2026-09-26 (2) — Fix grafici: etichette a 4 cifre tagliate su tutte le card

- **Fix**: nel popup Grafici, quando un valore arrivava a 4 cifre (es. "2623"), l'etichetta sull'asse veniva tagliata — il margine era stato allargato solo per la card Energia (che mostra spesso Watt a 4 cifre), le altre 8 card con grafico (Elettrodomestici, Server HA, NAS, UPS, Proxmox) avevano ancora il margine vecchio. Ora tutte usano lo stesso margine più largo. Verificato dal vivo sul grafico CPU/RAM della card NAS, nessuna rottura visiva.

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

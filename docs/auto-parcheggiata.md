# Auto parcheggiata (`shc-parking-card`)

**IT** — Mostra dove hai lasciato l'auto: disegno dell'auto (o una tua foto), mappa OpenStreetMap con il segnaposto, da quanto è parcheggiata, indirizzo, distanza da te, chi ha registrato la posizione e con quale metodo, il pulsante **Portami all'auto** (navigazione a piedi su Google Maps) e il pulsante **Registra posizione adesso**.

**EN** — Shows where you left the car: a car drawing (or your own photo), an OpenStreetMap map with a pin, how long it has been parked, address, distance from you, who saved the position and how, a **Take me to the car** button (walking directions) and a **Save position now** button.

<p align="center"><img src="screenshot/galleria/parcheggio.gif" width="360" alt="shc-parking-card"></p>



## Prima di iniziare ti serve

**IT**

- **Home Assistant** (qualsiasi installazione).
- **smart-home-cards** installata dal Marketplace (o HACS), versione **1.28.1 o più nuova**.
- Un telefono **Android** con l'**app Companion** di Home Assistant. Serve per salvare la posizione da solo quando scendi dall'auto.
- Nell'app Companion il sensore **Bluetooth connection** deve essere acceso. Come si fa: apri l'app Home Assistant sul telefono > **Impostazioni** > **App Companion** > **Gestisci sensori** > **Bluetooth connection** > accendi **Abilita sensore**. Se Android lo chiede, dai il permesso "Dispositivi nelle vicinanze".
- Sul **iPhone** questo sensore non esiste: la card funziona lo stesso, ma solo con il pulsante **Registra posizione adesso**.

**EN** — You need: Home Assistant; smart-home-cards 1.28.1 or newer (Marketplace/HACS); an Android phone with the Companion app, with the **Bluetooth connection** sensor turned on (app > Settings > Companion app > Manage sensors > Bluetooth connection > Enable sensor). On iPhone only the manual **Save position now** button works.

## Installazione, passo per passo

La card da sola **non basta**. Ha bisogno di un file in più, il **package** (un file di testo con helper, sensore, script e automazioni). Senza il package la card mostra "Manca il package". Fai i passi in ordine, uno alla volta.

### Passo 1 - Aggiorna la card

1. Vai su **Impostazioni > Marketplace** (o **HACS**).
2. Cerca **smart-home-cards** e premi **Aggiorna** se c'è l'aggiornamento.
3. Sul computer premi **Ctrl+F5**. Sull'app del telefono: **Impostazioni app > Risoluzione dei problemi > Reimposta cache frontend**.

### Passo 2 - Trova il nome del tuo telefono

1. Vai su **Impostazioni > Dispositivi e servizi > Entità**.
2. Nella casella di ricerca scrivi `bluetooth_connection`.
3. Vedrai una riga come `sensor.pixel_8_bluetooth_connection`. Il **nome del telefono** è la parte tra `sensor.` e `_bluetooth_connection`. In questo esempio è **`pixel_8`**.
4. Scrivilo su un foglio. Ti serve nei passi 5 e 8.
5. Se non trovi nessuna riga: il sensore Bluetooth non è acceso (vedi "Prima di iniziare") oppure hai un iPhone.

### Passo 3 - Controlla che i package siano attivi

1. Apri il file `/config/configuration.yaml` con **File editor** o **Studio Code Server** (si installano da **Impostazioni > App**).
2. Cerca queste due righe. Se ci sono già, vai al passo 4. Se mancano, aggiungile **in fondo al file**:

```yaml
homeassistant:
  packages: !include_dir_named packages
```

3. Se esiste già un blocco `homeassistant:` nel file, **non scriverlo due volte**: aggiungi solo la riga `packages: !include_dir_named packages` sotto quello che c'è.
4. Salva.

### Passo 4 - Copia il package

1. Apri [`packages/auto_parcheggio.yaml`](../packages/auto_parcheggio.yaml) su GitHub e premi **Copy raw file** (l'icona con i due quadrati).
2. Nel File editor crea la cartella `/config/packages` se non c'è.
3. Dentro crea il file `/config/packages/auto_parcheggio.yaml` e incolla tutto il testo copiato. Salva.

### Passo 5 - Metti il nome del tuo telefono nel file

1. Apri `/config/packages/auto_parcheggio.yaml`.
2. Usa **cerca e sostituisci**: nel File editor premi **Ctrl+H** (in Studio Code Server **Ctrl+H** oppure menu **Edit > Replace**).
3. In "Cerca" scrivi `persona1`. In "Sostituisci con" scrivi il nome del telefono del passo 2, per esempio `pixel_8`.
4. Premi **Sostituisci tutto** e salva.
5. Hai più telefoni? Ripeti con `persona2` e `persona3`. Se hai un solo telefono lascia `persona2` e `persona3` come sono: non danno fastidio.

### Passo 6 - Riavvia Home Assistant (completo)

1. Vai su **Impostazioni > Sistema** e premi l'icona di accensione in alto a destra > **Riavvia Home Assistant**.
2. Serve il **riavvio completo**. **Ricaricare** o "ricarica YAML" **non basta**: gli helper nascono solo al riavvio.
3. Aspetta 1-2 minuti.

### Passo 7 - Aggiungi la card

1. Apri la dashboard > matita in alto a destra > **Aggiungi scheda** > **Manuale** (in fondo alla lista).
2. Cancella il testo e incolla questo:

```yaml
type: custom:shc-parking-card
car: 1
```

3. Premi **Salva**. Per una seconda auto aggiungi una seconda card con `car: 2` (poi `car: 3`).

### Passo 8 - Imposta l'auto con l'ingranaggio

Sulla card premi l'**ingranaggio** in alto a destra. Compila campo per campo:

| Campo | Cosa scrivere |
|---|---|
| **Nome dell'auto** | Come vuoi chiamarla, per esempio `Golf`. |
| **Persona associata** | Il nome del telefono del passo 2, per esempio `pixel_8`. Riceve le notifiche e dà la posizione. |
| **Notifica a ogni parcheggio** | Acceso = ricevi una notifica ogni volta. Spento = la posizione si salva lo stesso, senza notifica. |
| **Nome Bluetooth dell'auto** | Il nome con cui l'auto compare nel Bluetooth del telefono (Android > Impostazioni > Bluetooth), per esempio `Uconnect`. Anche solo un pezzo del nome. Più nomi: separali con la virgola. Vuoto = niente salvataggio automatico. |
| **Anche quando scendo dall'auto** | Acceso = salva anche quando il telefono capisce che hai smesso di guidare. Attenzione: vale anche per bus e treno. Meglio lasciarlo spento. |
| **Precisione GPS massima** | Metri. Se il GPS è più impreciso, la posizione automatica viene scartata. Lascia 60. |

### Passo 9 - Controlla che funzioni

1. Vai su **Impostazioni > Dispositivi e servizi > Entità** e cerca `auto_parcheggio`. Devono esistere:
   - `sensor.auto_parcheggio_auto1_posizione`
   - `script.auto_parcheggio_salva`
   - `script.auto_parcheggio_leggi`
   - `automation.auto_parcheggio_bluetooth`
   - molti `input_text.auto_parcheggio_auto1_...` e `input_number.auto_parcheggio_auto1_...`
2. Vai sulla card, **esci all'aperto** (il GPS in casa è impreciso) e premi **Registra posizione adesso**.
3. Dopo 10-30 secondi la card mostra mappa, indirizzo e "Parcheggiata". Se hai la notifica accesa, ti arriva sul telefono.
4. Prova automatica: vai in auto con il Bluetooth collegato, scendi e aspetta circa 30 secondi. La posizione si salva da sola.

**EN** — Short version of the steps. 1) Update smart-home-cards to 1.28.1+ and press Ctrl+F5. 2) Find your phone name: Settings > Devices & services > Entities, search `bluetooth_connection`; for `sensor.pixel_8_bluetooth_connection` the name is `pixel_8`. 3) In `/config/configuration.yaml` make sure you have `homeassistant:` / `packages: !include_dir_named packages`. 4) Copy `packages/auto_parcheggio.yaml` into `/config/packages/`. 5) Open it in File editor or Studio Code Server and replace `persona1` with your phone name (Ctrl+H, replace all; same for `persona2`/`persona3` if you have more phones). 6) **Fully restart** Home Assistant (reload is not enough). 7) Add a manual card with `type: custom:shc-parking-card` and `car: 1`. 8) In the gear set car name, linked person (your phone name), notification, car Bluetooth name. 9) Check that `sensor.auto_parcheggio_auto1_posizione` and `script.auto_parcheggio_salva` exist, go outside and press **Save position now**.

## Problemi comuni

- **Vedi "Custom element doesn't exist: shc-parking-card"** -> la card è vecchia o il browser ha la cache vecchia. Aggiorna smart-home-cards (passo 1), poi **Ctrl+F5**.
- **Vedi "Manca il package"** -> il package non è caricato. Controlla che il file sia in `/config/packages/auto_parcheggio.yaml` (passo 4), che `configuration.yaml` abbia le righe dei package (passo 3) e **riavvia del tutto** (passo 6). Poi controlla le entità (passo 9).
- **Vedi "Nessuna posizione"** -> normale all'inizio, non hai ancora salvato nulla. Premi **Registra posizione adesso** all'aperto. Se resta così, guarda in **Impostazioni > Sistema > Registri** se ci sono errori di `auto_parcheggio`.
- **Il pulsante dice "Non salvata"** -> il nome del telefono è sbagliato. Controlla il passo 2, il passo 5 e il campo **Persona associata** (devono essere identici, tutto minuscolo). Controlla anche che l'app Companion abbia il permesso di posizione "sempre".
- **Non arriva nessuna notifica** -> in ingranaggio accendi **Notifica a ogni parcheggio**. Controlla che **Persona associata** sia il nome del telefono giusto. Controlla che esista `notify.mobile_app_<nome>` in **Strumenti per sviluppatori > Azioni**.
- **Il salvataggio automatico non parte** -> controlla che **Nome Bluetooth dell'auto** non sia vuoto e che sia scritto come lo vede il telefono. Per vederlo: **Strumenti per sviluppatori > Stati**, cerca `sensor.<nome>_bluetooth_connection` mentre sei in auto e leggi `connected_paired_devices`.
- **La posizione di casa è sbagliata** -> a casa la card usa le coordinate della zona **Casa**. Vai in **Impostazioni > Aree, zone e etichette > Zone**, apri **Casa** e sposta il punto sulla tua casa.

**EN** — Common problems: "Custom element doesn't exist" -> update + Ctrl+F5. "Package missing" -> check file path, package lines in configuration.yaml, full restart. "No position" -> press Save position now outside. "Not saved" / no notification -> phone name must be identical everywhere (step 2, 5, gear "Linked person"). Home position wrong -> fix the Home zone in Settings > Areas, labels & zones > Zones.

## Esempio di card con tutte le opzioni

Tutte le opzioni sono facoltative. Per cominciare bastano `type` e `car`.

```yaml
type: custom:shc-parking-card
car: 1                            # 1, 2 o 3 (default 1)
name: La mia auto                 # se manca, il nome impostato nell'ingranaggio
person: person.anna               # per la distanza; se manca, la persona dell'utente collegato
image: /local/auto.jpg            # foto fissa (ha la precedenza sulla foto caricata dalla card)
car_color: "#3b82f6"              # colore del disegno
hide_map: false
```

## Più auto (fino a 3)

Ogni card è legata a un'auto con `car: 1`, `2` o `3`: una famiglia mette 1, 2 o 3 card. Ogni auto ha i suoi helper `auto_parcheggio_auto<N>_*` (posizione, indirizzo, foto, nome dell'auto, nome Bluetooth, persona associata, notifica, attività, soglia) e il suo sensore `sensor.auto_parcheggio_auto<N>_posizione`.

**EN** — Each card is tied to one car with `car: 1`, `2` or `3`, so a family can add 1, 2 or 3 cards. Every car has its own helpers `auto_parcheggio_auto<N>_*` (position, address, photo, car name, Bluetooth name, linked person, notification, activity, threshold) and its own sensor `sensor.auto_parcheggio_auto<N>_posizione`.

## Come funziona il salvataggio automatico

1. Ad ogni auto è associata una persona (`input_text.auto_parcheggio_auto<N>_persona`, il nome come in `person.<nome>`). Il telefono di quella persona (app Companion Android) espone `sensor.<persona>_bluetooth_connection`; l'attributo `connected_paired_devices` elenca i dispositivi Bluetooth collegati.
2. In `input_text.auto_parcheggio_auto<N>_bt` scrivi il nome Bluetooth di quell'auto (anche solo un pezzo, più nomi separati da virgola).
3. Quando quel nome sparisce dai dispositivi collegati e resta assente 20 secondi, un'unica automazione chiama `script.auto_parcheggio_salva` con `auto: N`: chiede al telefono una posizione fresca (`request_location_update`), scarta il risultato se il GPS è più impreciso della soglia dell'auto (`input_number.auto_parcheggio_auto<N>_soglia_precisione`, 60 m, fino a 3 tentativi) e salva coordinate, ora e indirizzo sull'auto N. Se sei a casa usa le coordinate della zona Casa.
4. In alternativa, con `input_boolean.auto_parcheggio_auto<N>_usa_attivita` acceso, anche l'uscita dall'attività `in_vehicle` del telefono associato salva la posizione (spento di default: vale anche per bus e treno).
5. Il pulsante della card salva sull'auto della card, con la posizione del telefono di chi preme (la persona dell'utente Home Assistant collegato, altrimenti la persona associata all'auto). La notifica va sempre alla persona associata all'auto.

Metodo ispirato al video https://www.youtube.com/watch?v=JF5k4Pg0IEY (sensore Bluetooth dell'app Companion + `request_location_update`). Su iPhone il sensore Bluetooth non esiste: resta il pulsante manuale.

## Impostazioni (ingranaggio)

L'ingranaggio in alto a destra della card apre le impostazioni dell'auto della card, come nelle altre card smart-home-cards: **nome dell'auto**, **persona associata**, **notifica a ogni parcheggio** (spento = la posizione si registra comunque, senza notifica), **nome Bluetooth dell'auto**, **anche quando scendo dall'auto** e **precisione GPS massima**. Sono gli helper `auto_parcheggio_auto<N>_*` del package; le righe compaiono solo se l'helper esiste. Entità personalizzabili con `entity`, `name_entity`, `phone_entity`, `notify_entity`, `activity_entity`, `threshold_entity`, `bt_entity`, `photo_entity`.

**EN** — The gear icon opens the settings of the car of that card: car name, linked person, notify on every parking (off = position still saved, no notification), car Bluetooth name, also detect when leaving the car (activity) and maximum GPS accuracy. Rows only appear when the helper exists; every entity can be overridden in the card config.

## Foto dell'auto

Il disegno è quello predefinito. L'icona della fotocamera in alto a destra apre il dialogo **Foto dell'auto**: scegli una foto dal telefono, viene ridimensionata a 1000 px, caricata in Home Assistant (stessa API delle foto persona, serve un utente amministratore) e il suo indirizzo salvato in `input_text.auto_parcheggio_auto<N>_foto`, quindi la vedono tutti i dispositivi. **Usa il disegno** la rimuove. Con `image:` in YAML la foto è fissa.

## Note

- La mappa usa le tessere di OpenStreetMap (nessuna chiave); se il sensore non ha l'indirizzo, la card lo chiede una sola volta per punto a Nominatim (OpenStreetMap) e lo ricorda nel browser.
- Posizione, ora, indirizzo e metodo sono helper (`input_number`, `input_datetime`, `input_text`): reggono riavvio e reload di Home Assistant.

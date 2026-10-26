# 🧺 Card Elettrodomestici (`shc-appliance-clone-card`)

Una card, sei "disegni" diversi: lavastoviglie, lavatrice, asciugatrice, forno, TV, scaldabagno. Cambia solo il campo `artwork` — tutto il resto del comportamento è identico.

| | Chiaro | Scuro |
|---|---|---|
| **Lavatrice** | ![Lavatrice](screenshot/elettrodomestici-lavatrice.png) | ![Lavatrice scuro](screenshot/elettrodomestici-lavatrice-dark.png) |
| **Lavastoviglie** | ![Lavastoviglie](screenshot/elettrodomestici-lavastoviglie.png) | ![Lavastoviglie scuro](screenshot/elettrodomestici-lavastoviglie-dark.png) |
| **Asciugatrice** | ![Asciugatrice](screenshot/elettrodomestici-asciugatrice.png) | ![Asciugatrice scuro](screenshot/elettrodomestici-asciugatrice-dark.png) |
| **Forno** | ![Forno](screenshot/elettrodomestici-forno.png) | ![Forno scuro](screenshot/elettrodomestici-forno-dark.png) |
| **TV** | ![TV](screenshot/elettrodomestici-tv.png) | ![TV scuro](screenshot/elettrodomestici-tv-dark.png) |


> 🎞️ **Le immagini degli elettrodomestici sono animate**, come una GIF: il cestello gira, l'acqua si muove e i colori cambiano in base allo stato (in funzione, in pausa, finito). Le schermate sono foto ferme di un istante.

## Cosa ti serve prima di iniziare

Un modo per misurare quanti **Watt** sta assorbendo l'elettrodomestico in questo momento — cioè una presa intelligente con misurazione di potenza (Shelly Plug S, Sonoff S31/POWR3, TP-Link Kasa KP115, ecc.) collegata via qualsiasi integrazione HA, oppure un misuratore di potenza per elettrodomestici già cablati (es. un contatore su una linea dedicata). Da lì in poi Home Assistant deve esporre un `sensor` in Watt: quello è il `power_entity`, l'unico campo obbligatorio.

> Nella mia installazione uso prese **SONOFF S60TPF** (misurano sia Watt istantanei che kWh cumulati, integrate via eWeLink/Sonoff LAN o Zigbee a seconda del modello) — se vuoi partire da un prodotto concreto invece di scegliere alla cieca, è quello che uso io su tutti gli elettrodomestici di questa guida.

## 🚀 Metodo veloce: usa i miei package originali

Invece di costruire tutto da zero seguendo il resto della guida, puoi partire direttamente dal **package completo che uso io** — stessa logica, stessi helper, stesse automazioni di notifica (push/Alexa/Telegram), già pronto, con solo poche righe da cambiare in cima al file:

| Elettrodomestico | File |
|---|---|
| Lavatrice | [`packages/centro_controllo_lavatrice.yaml`](../packages/centro_controllo_lavatrice.yaml) |
| Lavastoviglie | [`packages/centro_controllo_lavastoviglie.yaml`](../packages/centro_controllo_lavastoviglie.yaml) |
| Asciugatrice | [`packages/centro_controllo_asciugatrice.yaml`](../packages/centro_controllo_asciugatrice.yaml) |
| Forno | [`packages/centro_controllo_forno.yaml`](../packages/centro_controllo_forno.yaml) |
| TV | [`packages/centro_controllo_tv.yaml`](../packages/centro_controllo_tv.yaml) |

**Istruzioni:**

1. Copia il file dell'elettrodomestico che ti interessa dentro `/config/packages/` (richiede i [Packages](https://www.home-assistant.io/docs/configuration/packages/) attivi — una tantum, `homeassistant: packages: !include_dir_named packages` in `configuration.yaml`).
2. Apri il file: in cima trovi il blocco **`IMPOSTAZIONI PACKAGE`** (poche righe). È l'unica parte da modificare:
   - `Sensore Consumo Elettrodomestici` → il TUO sensore di potenza in Watt (es. `sensor.la_tua_lavatrice_power`)
   - `Switch Power Elettrodomestici` → uno switch reale solo se vuoi poter togliere corrente da remoto, altrimenti lascialo com'è
   - Alexa: i dispositivi Alexa non si scrivono più nel file: si scelgono dagli interruttori **Alexa Salone / Bagno / Cameretta / Camera** nell'ingranaggio della card (vedi [centro-notifiche.md](centro-notifiche.md#scegliere-su-quali-alexa-annunciare))
   - `Device per notifica push` → i TUOI `notify.mobile_app_xxx` (uno o più)
3. Cerca `xxx` nel file (Ctrl+F): se qualche riga non è già stata compilata, è lì che manca un tuo valore.
4. Riavvia Home Assistant (i package si caricano solo al riavvio).
5. Aggiungi la card alla dashboard con la configurazione minima o completa più sotto in questa guida.

**Hai più di un elettrodomestico dello stesso tipo?** Duplica il file, rinominalo, e nel nuovo file sostituisci ogni ricorrenza del numero finale (es. `_1` → `_6`) con Trova e sostituisci — tutti i nomi interni (sensori, helper, automazioni) sono numerati così apposta, per evitare collisioni tra un elettrodomestico e l'altro.

Il resto di questa guida spiega **come funziona** ogni campo, utile se vuoi capire il file prima di usarlo, personalizzarlo oltre le poche righe in cima, o costruire qualcosa di completamente tuo invece di partire dal mio.

## Configurazione minima (funzionante da subito)

```yaml
type: custom:shc-appliance-clone-card
name: Lavatrice
artwork: washer          # dishwasher | washer | dryer | oven | tv | boiler | fritzbox | server | proxmox | nas | energy | ups
power_entity: sensor.mia_lavatrice_power
threshold_run: 5         # sopra questi Watt = "in funzione"
threshold_standby: 1     # sopra questi Watt (ma sotto threshold_run) = "in standby", sotto = "spenta"
max_power: 2200          # Watt massimi della barra di potenza (solo estetico)
```

Con solo questo, la card mostra: nome, disegno scelto, badge di stato (In funzione / Standby / Spenta) calcolato dalle soglie, e la barra di potenza in tempo reale.

## 🖊️ Editor visuale (senza YAML)

Non serve scrivere configurazione a mano: "Aggiungi card" → cerca **"Elettrodomestico"** → scegli il tipo (Lavatrice/Asciugatrice/Lavastoviglie/Forno/TV), se è domotico o solo una presa, e compila i campi — ogni entità si cerca per nome, con anteprima. Lo stesso editor si apre anche per modificare una card già aggiunta (pulsante "⋮" sulla card in modalità modifica → "Edit"). In fondo trovi anche la sezione "Storici" per creare gli helper kWh/costo senza YAML — vedi più sotto.

![Editor elettrodomestico](screenshot/editor-elettrodomestici.png)

⚠️ **Non scrive `settings_sections` / `actions`**: sono elenchi troppo complessi per un editor a campi. Senza quelli, l'icona ⚙️ sulla card si apre ma mostra solo "Nessuna impostazione configurata" — non è un errore, è normale finché non li aggiungi a mano dal blocco YAML qui sotto (o dal paragrafo "🚀 Metodo veloce" in cima alla guida).

Per un tipo **domotico** (es. TV) compaiono anche i campi di stato/programma nativo:

![Editor elettrodomestico, TV domotica](screenshot/editor-elettrodomestici-tv.png)

## Campo per campo

| Campo | Obbligatorio | Default | Descrizione |
|---|---|---|---|
| `power_entity` | **Sì** | — | `sensor` in Watt che misura l'assorbimento attuale |
| `name` | No | `"Elettrodomestico"` | Nome mostrato in alto |
| `artwork` | No | `"dishwasher"` | Disegno: `dishwasher`, `washer`, `dryer`, `oven`, `tv`, `boiler` (anche `fritzbox`/`server`/`proxmox`/`nas`/`energy`/`ups`, condivisi con le altre card) |
| `threshold_run` | No | `5` | Soglia in Watt sopra cui è "in funzione" |
| `threshold_standby` | No | `1` | Soglia in Watt sopra cui è "in standby" (sotto è "spenta") |
| `max_power` | No | `2200` | Fondo scala della barra di potenza |
| `power_label` | No | `"Potenza attuale"` | Etichetta sopra la barra di potenza |
| `power_unit` | No | `"W"` | Unità mostrata |
| `power_decimals` | No | `0` | Decimali mostrati sulla potenza |
| `room` | No | — | Sottotitolo (es. "Cucina") |
| `label` | No | — | Etichetta d'angolo, utile per marcare una card "di prova" |
| `state_map` | No | vedi sotto | Rimappa gli stati grezzi di un `live.state_entity` in stato/etichetta della card |
| `settings_sections` | No | `[]` | Contenuto del popup ⚙️ — vedi [settings-sections.md](settings-sections.md) |
| `warn_entities` | No | `[]` | Avvisi lampeggianti (es. "Sale in esaurimento") — vedi sotto |
| `notif_center_path` | No | — | Percorso di una tua pagina Lovelace condivisa dove centralizzi le impostazioni Alexa di più card. Senza questo campo il pulsante megafono resta **nascosto** |

### `live` — stato dettagliato da un dispositivo "smart" (opzionale)

Se il tuo elettrodomestico ha un'integrazione nativa (es. Home Connect, LG ThinQ, un `media_player` per la TV) invece del solo misuratore di potenza, puoi collegare i suoi sensori per mostrare molto di più:

```yaml
live:
  state_entity: sensor.lavastoviglie_operation_state   # stato nativo del dispositivo
  progress_entity: sensor.lavastoviglie_program_progress   # % avanzamento programma
  remaining_entity: sensor.lavastoviglie_remaining_program_time
  extra:                                                # righe extra a piacere
    - entity: sensor.lavatrice_job_state
      label: Fase
      value_map:                                        # traduce i valori grezzi
        drying: Asciugatura
        cooling: Raffreddamento
      fallback_label: In corso                           # se il valore non è nella mappa
    - entity: binary_sensor.lavatrice_child_lock
      label: Blocco bambini
      boolean: true
      on_state: "on"
      on_label: Attivo
      off_label: Disattivo
    - entity: media_player.tv                            # esempio per artwork: tv
      label: Volume
      attribute: volume_level
      format: percent
```

`state_map` (se usi `live.state_entity`) traduce lo stato grezzo in uno dei 4 stati della card:

```yaml
state_map:
  playing: { mode: running, label: "IN RIPRODUZIONE" }
  paused:  { mode: standby, label: "IN PAUSA" }
  off:     { mode: off, label: "SPENTA" }
```

`mode` accetta solo: `running`, `standby`, `off`, `unavailable`.

### `warn_entities` — avvisi lampeggianti (opzionale)

```yaml
warn_entities:
  - entity: sensor.lavastoviglie_salt_nearly_empty
    on_state: present
    label: Sale in esaurimento
  - entity: sensor.lavastoviglie_door
    on_state: open
    label: Porta aperta
```

Quando una di queste entità è nello stato indicato, la card mostra la relativa etichetta in un banner di avviso.

### Riepilogo ciclo, storico e costi (opzionale, avanzato)

Questi campi mostrano l'ultimo ciclo (fine/durata/consumo/costo), i costi per periodo (oggi/ieri/mese/anno) e i cicli contati. **Non sono entità singole**: sono i **nomi degli attributi** che la card legge da un unico sensore "riepilogo", che indichi con `cycle_sensor`:

```yaml
cycle_sensor: sensor.mia_lavatrice_ciclo
cycle_attrs:
  end: terminato            # nome attributo con l'orario/stato di fine ciclo
  duration: tempo_ciclo     # nome attributo con la durata testuale (es. "1h 12m")
  energy: consumo_ciclo     # nome attributo con il consumo del ciclo (es. "0.85 kWh")
  cost: costo_ciclo         # nome attributo con il costo del ciclo (es. "0.21")
period_attrs:
  today:      { time: Oggi, cost: costo_oggi }
  yesterday:  { time: Ieri, cost: costo_ieri }
  month:      { time: Mese, cost: costo_mese }
  month_prev: { time: "Mese Precedente", cost: costo_mese_prec }
  year:       { time: Anno, cost: costo_anno }
  year_prev:  { time: "Anno Precedente", cost: costo_anno_prec }
stats:
  cycles_today: sensor.mia_lavatrice_cicli_oggi   # queste 3 SONO entità vere e proprie
  cycles_month: sensor.mia_lavatrice_cicli_mese
  cycles_year: sensor.mia_lavatrice_cicli_anno
```

Per produrre quegli attributi ti serve un **template sensor** che li calcoli, più un'automazione che salvi l'energia a inizio ciclo (presuppone che `power_entity` sia anche un accumulatore di energia, cioè che la stessa presa esponga anche un `sensor` in kWh — le prese SONOFF S60TPF che uso io lo fanno, come la maggior parte delle prese smart con misura di potenza).

Tutto questo è già scritto e pronto nei miei package originali — vedi il paragrafo "🚀 Metodo veloce" in cima a questa guida.

Per i costi per periodo (`costo_oggi`, `costo_mese`, ecc.) il modo più semplice è creare degli **helper "Contatore di utenza" (Utility Meter)** da Impostazioni → Helper, agganciati al tuo sensore di energia totale, con reset giornaliero/mensile/annuale — poi moltiplichi il loro valore per `input_number.costo_energia` in altrettanti attributi dello stesso template sensor.

`week_rows` (7 giorni × cicli/tempo/consumo/costo) ed `energy_stat_entity` seguono la stessa logica — sono avanzati, aggiungili solo se ti interessa davvero uno storico settimanale dettagliato; senza, la card funziona comunque perfettamente.

#### `week_rows` — sezione "Ultimi 7 giorni"

Senza questa chiave, nel popup **Consumi** la sezione "Ultimi 7 giorni" mostra *Nessun dato configurato*. Se usi i miei package originali gli helper esistono già (`input_text` per cicli e tempo, `input_number` per consumo e costo, uno per giorno): basta elencarli nella card. Esempio per la lavatrice (`_1`; per gli altri elettrodomestici cambia il numero finale come nel tuo package):

```yaml
week_rows:
  - day: Lunedì
    cicli: input_text.lunedi_elettrodomestici_cicli_1
    tempo: input_text.lunedi_elettrodomestici_tempo_1
    consumo: input_number.lunedi_elettrodomestici_consumo_1
    costo: input_number.lunedi_elettrodomestici_costo_1
  - day: Martedì
    cicli: input_text.martedi_elettrodomestici_cicli_1
    tempo: input_text.martedi_elettrodomestici_tempo_1
    consumo: input_number.martedi_elettrodomestici_consumo_1
    costo: input_number.martedi_elettrodomestici_costo_1
  - day: Mercoledì
    cicli: input_text.mercoledi_elettrodomestici_cicli_1
    tempo: input_text.mercoledi_elettrodomestici_tempo_1
    consumo: input_number.mercoledi_elettrodomestici_consumo_1
    costo: input_number.mercoledi_elettrodomestici_costo_1
  - day: Giovedì
    cicli: input_text.giovedi_elettrodomestici_cicli_1
    tempo: input_text.giovedi_elettrodomestici_tempo_1
    consumo: input_number.giovedi_elettrodomestici_consumo_1
    costo: input_number.giovedi_elettrodomestici_costo_1
  - day: Venerdì
    cicli: input_text.venerdi_elettrodomestici_cicli_1
    tempo: input_text.venerdi_elettrodomestici_tempo_1
    consumo: input_number.venerdi_elettrodomestici_consumo_1
    costo: input_number.venerdi_elettrodomestici_costo_1
  - day: Sabato
    cicli: input_text.sabato_elettrodomestici_cicli_1
    tempo: input_text.sabato_elettrodomestici_tempo_1
    consumo: input_number.sabato_elettrodomestici_consumo_1
    costo: input_number.sabato_elettrodomestici_costo_1
  - day: Domenica
    cicli: input_text.domenica_elettrodomestici_cicli_1
    tempo: input_text.domenica_elettrodomestici_tempo_1
    consumo: input_number.domenica_elettrodomestici_consumo_1
    costo: input_number.domenica_elettrodomestici_costo_1
```

- `day` deve essere scritto **esattamente** così, con l'accento (`Lunedì`, `Martedì`, …): la card usa il nome per riordinare le righe partendo da ieri, una riga con un nome diverso non viene mostrata.
- Ogni casella viene scritta dal package quando quel giorno finisce, quindi dopo averla configurata i dati compaiono a partire dal giorno successivo.

#### `energy_stat_entity` — grafici "Questo mese" / "Quest'anno"

Gli istogrammi (kWh al giorno e al mese) leggono le **statistiche a lungo termine** di Home Assistant per il sensore indicato (nel package: `sensor.w_kwh_elettrodomestici_1`, il sensore di integrazione kWh). Se mostrano *Nessun dato*, controlla in **Strumenti per sviluppatori → Statistiche** che il sensore compaia senza errori; un sensore appena creato inizia a produrre statistiche dopo circa un'ora.

### 📊 Storici automatici, senza scrivere nulla in YAML (alternativa più semplice)

Se non vuoi costruire un `cycle_sensor` a mano, c'è una scorciatoia pensata apposta per chi installa la card da zero: apri l'**editor visuale** della card (aggiungila alla dashboard, poi "Modifica" invece di "Modifica in YAML") e scorri fino alla sezione **Storici**. Da lì:

1. **"Crea automaticamente dal sensore di potenza"** — crea davvero un helper nativo di Home Assistant (Impostazioni → Helper → Integrazione, somma di Riemann) che trasforma il tuo sensore Watt in un sensore kWh, e lo collega alla card.
2. **"Crea helper costo"** — crea un `input_number` con la tua tariffa €/kWh (se non ne hai già uno).

Fatto questo, la card calcola da sola **Oggi / Ieri / Mese / Anno** (consumo e costo) leggendo le statistiche già salvate da Home Assistant per quel sensore — nessun `cycle_sensor`, `utility_meter` o `week_rows` da scrivere a mano. In cambio non conta i **cicli** (dal solo consumo non si distingue un ciclo dall'altro): per quello serve ancora un sensore di stato dedicato, come nella sezione sopra.

Le due strade sono alternative, non obbligatorie insieme: se la card ha già `cycle_sensor`/`period_attrs` configurati (es. i miei package originali), l'editor lo rileva e non offre i pulsanti di creazione — quella configurazione resta quella attiva.

### `reset_script` / `reset_date_entity` (opzionale)

Se aggiungi un pulsante di reset contatori nel popup Impostazioni (vedi sopra, sezione "Costi" in `settings_sections`), questi due campi collegano rispettivamente lo script da lanciare e l'entità dove salvare la data dell'ultimo reset:

```yaml
reset_script: script.reset_contatori_lavatrice
reset_date_entity: input_text.data_reset_lavatrice
```

## 🕹️ Comandi a distanza (opzionale)

Se il tuo elettrodomestico è **domotico** e accetta comandi da Home Assistant, la card può mostrare un riquadro **Comandi** sotto il riepilogo: avvio, stop, programmi, opzioni e avvio ritardato, senza andare davanti alla macchina.

| Riquadro Comandi | Popup Programmi |
|---|---|
| ![Comandi lavastoviglie](screenshot/elettrodomestici-lavastoviglie-comandi.png) | ![Programmi lavastoviglie](screenshot/elettrodomestici-lavastoviglie-programmi-dark.png) |

> **Esempio reale**: io lo uso sulla **lavastoviglie Bosch SMV4ECX21E** con l'integrazione ufficiale **Home Connect**. Con Home Connect le entità hanno già i nomi giusti (`select.<nome>_selected_program`, `select.<nome>_active_program`, `button.<nome>_stop_program`…), cambia solo il nome della tua macchina.

Cosa fa:

- **▶ Avvia**: avvia il programma scelto. Se la macchina è spenta la accende prima.
- **■ Stop**: ferma il ciclo. Serve un **secondo tocco entro 4 secondi**, per non fermarlo per sbaglio.
- **Programmi**: popup con i programmi della macchina (nomi in italiano per Home Connect: Eco 50°, Auto 45-65°, Intensivo 70°…), le **opzioni** che scegli tu (mezzo carico, VarioSpeed, igiene…) e l'**avvio ritardato** (Subito, 1 h, 2 h, 3 h, 4 h, 6 h, 8 h). A ciclo in corso programma e opzioni si cambiano solo a macchina ferma.
- **Accendi/Spegni** quando la macchina è ferma.
- Accanto a "Comandi" compare il programma scelto, ad esempio "Eco 50° · tra 3 h".
- Se sulla macchina il **controllo remoto non è attivo** (Avvio remoto di Home Connect, Smart Control di SmartThings), i pulsanti restano visibili ma disattivati, con la spiegazione di cosa fare.

C'è anche un secondo modo, per gli elettrodomestici che hanno un solo `select` con le opzioni `run`/`pause`/`stop` (ad esempio alcune asciugatrici e lavatrici SmartThings): con `machine_select` compaiono **Avvia/Riprendi**, **Pausa** e **Stop**.

> ⚠️ Per sicurezza molti elettrodomestici **non si riaccendono da remoto** dopo un blackout o se il controllo remoto è disattivato: va riattivato dal pannello della macchina. La card non può aggirarlo.

```yaml
controls:
  program_select: select.lavastoviglie_selected_program
  start_select: select.lavastoviglie_active_program
  stop_button: button.lavastoviglie_stop_program
  power_switch: switch.lavastoviglie_power
  remote_entity: binary_sensor.lavastoviglie_remote_start
  delay_entity: number.lavastoviglie_start_in_relative
  options:
    - entity: switch.lavastoviglie_vario_speed
      name: VarioSpeed (più veloce)
    - entity: switch.lavastoviglie_half_load
      name: Mezzo carico
    - entity: switch.lavastoviglie_hygiene
      name: Igiene
    - entity: switch.lavastoviglie_eco_dry
      name: Asciugatura extra
    - entity: switch.lavastoviglie_silence_on_demand
      name: Silenzio su richiesta
```

| Campo | Cosa fa |
|---|---|
| `program_select` | Programma scelto (`select`): elenco nel popup Programmi |
| `start_select` | Programma attivo (`select`): Avvia lo imposta uguale al programma scelto |
| `stop_button` | Pulsante (`button`) che ferma il ciclo |
| `machine_select` | In alternativa: `select` con `run`/`pause`/`stop` (Avvia, Pausa, Riprendi, Stop) |
| `power_switch` | Interruttore di accensione (`switch`) |
| `remote_entity` | `binary_sensor` acceso quando la macchina accetta comandi a distanza |
| `remote_hint` | Testo da mostrare quando il controllo remoto è spento |
| `delay_entity` | Avvio ritardato in secondi (`number`) |
| `delay_choices` | Ore proposte per l'avvio ritardato, default `[0, 1, 2, 3, 4, 6, 8]` |
| `options` | Interruttori delle opzioni nel popup (`entity`, `name`) |
| `program_names` | Nomi tuoi per i programmi, es. `{dishcare_dishwasher_program_eco_50: "Eco"}` |

Senza `controls` la card resta come prima, senza comandi.

## Esempio completo (lavastoviglie)

```yaml
type: custom:shc-appliance-clone-card
name: Lavastoviglie
artwork: dishwasher
power_entity: sensor.lavastoviglie_power
threshold_run: 5
threshold_standby: 1
max_power: 2300
live:
  state_entity: sensor.lavastoviglie_operation_state
  progress_entity: sensor.lavastoviglie_program_progress
  remaining_entity: sensor.lavastoviglie_remaining_program_time
warn_entities:
  - entity: sensor.lavastoviglie_salt_nearly_empty
    on_state: present
    label: Sale in esaurimento
  - entity: sensor.lavastoviglie_door
    on_state: open
    label: Porta aperta
settings_sections:
  - title: Notifiche
    rows:
      - entity: input_boolean.notify_push_lavastoviglie
        label: Notifica Push
      - entity: input_boolean.notify_alexa_lavastoviglie
        label: Notifica Alexa
      - entity: input_boolean.notify_alexa_lavastoviglie_salone
        label: "↳ Alexa Salone"
      - entity: input_boolean.notify_alexa_lavastoviglie_bagno
        label: "↳ Alexa Bagno"
      - entity: input_boolean.notify_alexa_lavastoviglie_cameretta
        label: "↳ Alexa Cameretta"
      - entity: input_boolean.notify_alexa_lavastoviglie_camera
        label: "↳ Alexa Camera"
  - title: Costi
    rows:
      - entity: input_number.costo_energia
        label: "Costo energia (€/kWh)"
```

Per il pattern notifiche push/Alexa, vedi [notifiche-personalizzate.md](notifiche-personalizzate.md).

## 🎛️ Layout classico o centrato

Questa card si può mostrare con la foto a sinistra (**classico**) oppure con la foto al centro in alto (**centrato**). Si sceglie dalla prima riga **Layout** delle Impostazioni: vedi la guida [Layout delle card](layout.md) per attivarla (menu `input_select.layout_lavatrice` e parametro `layout_entity`).

```yaml
layout_entity: input_select.layout_lavatrice
settings_sections:
  - title: Aspetto
    rows:
      - { entity: input_select.layout_lavatrice, label: Layout }
  # ...le altre sezioni
```

| Classico | Centrato |
|---|---|
| ![Lavatrice (uguale per asciugatrice, lavastoviglie, forno e TV, con il proprio menu `layout_<nome>`) classico](screenshot/layout/lavatrice-classico-light.png) | ![Lavatrice (uguale per asciugatrice, lavastoviglie, forno e TV, con il proprio menu `layout_<nome>`) centrato](screenshot/layout/lavatrice-centrato-light.png) |

## 📈 Grafici

Il pulsante con la **linea che sale** apre il grafico storico in **24 h · 7 gg · 30 gg · da … a**. Il grafico mostra la **potenza** del dispositivo. Vedi la guida completa: [Grafici](grafici.md).

I due popup hanno ognuno un solo scopo: **Statistiche** (barrette, solo sugli apparecchi domotici) mostra lo stato live — programma in corso, avanzamento, fine prevista, sale/brillantante — e si nasconde da sola se l'apparecchio non è domotico (niente da mostrare lì). **Consumi** (fulmine) mostra invece i consumi per periodo, per giorno della settimana e gli istogrammi mese/anno — stesso pulsante, stesso contenuto, su tutte le card che misurano energia (anche NAS e Proxmox).

| Chiaro | Scuro |
|---|---|
| ![Grafico, chiaro](screenshot/grafici/lavastoviglie-grafico-24h-light.png) | ![Grafico, scuro](screenshot/grafici/lavastoviglie-grafico-24h-dark.png) |

## 🖼️ Tutte le schermate

Tutti i popup della card, con i dati sensibili (indirizzi IP, nomi, ecc.) oscurati.

### Lavatrice

**Impostazioni (ingranaggio)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/lavatrice-impostazioni-light.png) | ![](screenshot/popup/lavatrice-impostazioni-dark.png) |

**Statistiche (barrette)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/lavatrice-statistiche-light.png) | ![](screenshot/popup/lavatrice-statistiche-dark.png) |

### Asciugatrice

**Impostazioni (ingranaggio)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/asciugatrice-impostazioni-light.png) | ![](screenshot/popup/asciugatrice-impostazioni-dark.png) |

**Statistiche (barrette)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/asciugatrice-statistiche-light.png) | ![](screenshot/popup/asciugatrice-statistiche-dark.png) |

### Lavastoviglie

**Impostazioni (ingranaggio)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/lavastoviglie-impostazioni-light.png) | ![](screenshot/popup/lavastoviglie-impostazioni-dark.png) |

**Statistiche (barrette)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/lavastoviglie-statistiche-light.png) | ![](screenshot/popup/lavastoviglie-statistiche-dark.png) |

### Forno

**Impostazioni (ingranaggio)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/forno-impostazioni-light.png) | ![](screenshot/popup/forno-impostazioni-dark.png) |

**Statistiche (barrette)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/forno-statistiche-light.png) | ![](screenshot/popup/forno-statistiche-dark.png) |

### TV

**Impostazioni (ingranaggio)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/tv-impostazioni-light.png) | ![](screenshot/popup/tv-impostazioni-dark.png) |

**Statistiche (barrette)**

| Chiaro | Scuro |
|---|---|
| ![](screenshot/popup/tv-statistiche-light.png) | ![](screenshot/popup/tv-statistiche-dark.png) |

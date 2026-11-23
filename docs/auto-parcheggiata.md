# Auto parcheggiata (`shc-parking-card`)

**IT** — Mostra dove hai lasciato l'auto: disegno dell'auto (o una tua foto), mappa OpenStreetMap con il segnaposto, da quanto è parcheggiata, indirizzo, distanza da te, chi ha registrato la posizione e con quale metodo, il pulsante **Portami all'auto** (navigazione a piedi su Google Maps) e il pulsante **Registra posizione adesso**.

**EN** — Shows where you left the car: a car drawing (or your own photo), an OpenStreetMap map with a pin, how long it has been parked, address, distance from you, who saved the position and how, a **Take me to the car** button (walking directions) and a **Save position now** button.

<p align="center"><img src="screenshot/galleria/parcheggio.gif" width="360" alt="shc-parking-card"></p>



## Come funziona il salvataggio automatico

1. Il telefono (app Companion Android) espone `sensor.<persona>_bluetooth_connection`; l'attributo `connected_paired_devices` elenca i dispositivi Bluetooth collegati.
2. In `input_text.auto_bt_<persona>` scrivi il nome Bluetooth della tua auto (anche solo un pezzo, più nomi separati da virgola).
3. Quando quel nome sparisce dai dispositivi collegati e resta assente 20 secondi, l'automazione chiama `script.auto_parcheggio_salva`: chiede al telefono una posizione fresca (`request_location_update`), scarta il risultato se il GPS è più impreciso della soglia (`input_number.auto_parcheggio_soglia_precisione`, 60 m, fino a 3 tentativi) e salva coordinate, ora e indirizzo. Se sei a casa usa le coordinate della zona Casa.
4. In alternativa, con `input_boolean.auto_parcheggio_usa_attivita` acceso, anche l'uscita dall'attività `in_vehicle` salva la posizione (spento di default: vale anche per bus e treno).
5. Il pulsante della card chiama lo stesso script in modo manuale (salva sempre, anche con GPS impreciso).

## Impostazioni (ingranaggio)

L'ingranaggio in alto a destra della card apre le impostazioni, come nelle altre card smart-home-cards: **Notifica a ogni parcheggio** (`input_boolean.auto_parcheggio_notifica`; spento = la posizione si registra comunque, senza notifica), **nome Bluetooth dell'auto** (`input_text.auto_bt_<persona>`), **anche quando scendo dall'auto** (`input_boolean.auto_parcheggio_usa_attivita`) e **precisione GPS massima** (`input_number.auto_parcheggio_soglia_precisione`). Le righe compaiono solo se l'helper esiste; entità personalizzabili con `notify_entity`, `activity_entity`, `threshold_entity`, `bt_entity`.

**EN** — The gear icon opens the settings popup: notify on every parking (off = position still saved, no notification), car Bluetooth name, also detect when leaving the car (activity) and maximum GPS accuracy. Rows only appear when the helper exists; entities can be overridden with `notify_entity`, `activity_entity`, `threshold_entity`, `bt_entity`.

Metodo ispirato al video https://www.youtube.com/watch?v=JF5k4Pg0IEY (sensore Bluetooth dell'app Companion + `request_location_update`). Su iPhone il sensore Bluetooth non esiste: resta il pulsante manuale.

## Installazione

1. Copia [`packages/auto_parcheggio.yaml`](../packages/auto_parcheggio.yaml) nei tuoi `packages` e sostituisci `persona1` con il nome della tua persona (altre persone: vedi i commenti nel file). Ricarica o riavvia HA.
2. Inserisci in `input_text.auto_bt_<persona>` il nome Bluetooth dell'auto.
3. Aggiungi la card:

```yaml
type: custom:shc-parking-card
entity: sensor.auto_parcheggio
# opzionali
name: La mia auto
person: person.persona1          # distanza e pulsante; se manca, la persona dell'utente collegato
save_script: script.auto_parcheggio_salva
photo_entity: input_text.auto_parcheggio_foto
image: /local/auto.jpg           # foto fissa (ha la precedenza sulla foto caricata dalla card)
car_color: "#3b82f6"             # colore del disegno
hide_map: false
```

## Foto dell'auto

Il disegno è quello predefinito. L'icona della fotocamera in alto a destra apre il dialogo **Foto dell'auto**: scegli una foto dal telefono, viene ridimensionata a 1000 px, caricata in Home Assistant (stessa API delle foto persona, serve un utente amministratore) e il suo indirizzo salvato in `input_text.auto_parcheggio_foto`, quindi la vedono tutti i dispositivi. **Usa il disegno** la rimuove. Con `image:` in YAML la foto è fissa.

## Note

- La mappa usa le tessere di OpenStreetMap (nessuna chiave); se il sensore non ha l'indirizzo, la card lo chiede una sola volta per punto a Nominatim (OpenStreetMap) e lo ricorda nel browser.
- Posizione, ora, indirizzo e metodo sono helper (`input_number`, `input_datetime`, `input_text`): reggono riavvio e reload di Home Assistant.

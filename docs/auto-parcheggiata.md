# Auto parcheggiata (`shc-parking-card`)

**IT** — Mostra dove hai lasciato l'auto: disegno dell'auto (o una tua foto), mappa OpenStreetMap con il segnaposto, da quanto è parcheggiata, indirizzo, distanza da te, chi ha registrato la posizione e con quale metodo, il pulsante **Portami all'auto** (navigazione a piedi su Google Maps) e il pulsante **Registra posizione adesso**.

**EN** — Shows where you left the car: a car drawing (or your own photo), an OpenStreetMap map with a pin, how long it has been parked, address, distance from you, who saved the position and how, a **Take me to the car** button (walking directions) and a **Save position now** button.

<p align="center"><img src="screenshot/galleria/parcheggio.gif" width="360" alt="shc-parking-card"></p>



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

## Installazione (passo passo)

La card da sola **non basta**: legge e scrive su helper, un sensore, uno script e due automazioni che stanno nel package. Senza il package la card mostra il messaggio "Manca il package".

1. **Aggiorna smart-home-cards alla 1.28.0 o successiva** (Impostazioni > Marketplace/HACS), poi ricarica il browser con **Ctrl+F5** (sull'app: Impostazioni app > Risoluzione dei problemi > Reimposta cache frontend). Errore "Custom element doesn't exist: shc-parking-card" = versione vecchia o cache.
2. **Abilita i package** in `configuration.yaml` (una volta sola, se non l'hai già):
   ```yaml
   homeassistant:
     packages: !include_dir_named packages
   ```
3. **Copia** [`packages/auto_parcheggio.yaml`](../packages/auto_parcheggio.yaml) in `/config/packages/`.
4. **Adatta il file al tuo telefono**: cerca `persona1` (e `persona2`, `persona3` se hai altri telefoni) e sostituiscilo con il nome del tuo telefono in Home Assistant, cioè la parte centrale di `sensor.<nome>_bluetooth_connection`, `device_tracker.<nome>` e `notify.mobile_app_<nome>` (es. `pixel_8`). Servono l'app Companion con il sensore Bluetooth e il tracker GPS attivi. I nomi dei miei telefoni non ci sono: tutto il resto è già generico.
5. **Riavvia Home Assistant** (un semplice ricaricamento non crea gli helper).
6. **Aggiungi la card** (esempio sotto), una per auto (`car: 1`, `car: 2`, ...). Dall'ingranaggio imposta nome dell'auto, **persona associata** (lo stesso `<nome>` del punto 4), nome Bluetooth dell'auto e notifica.
7. **Prova**: premi **Registra posizione adesso**; poi esci dall'auto e controlla che il Bluetooth si scolleghi.

**EN** — The card alone is not enough: it needs the helpers, sensor, script and automations of the package. Steps: update to 1.28.0+ and hard-refresh (Ctrl+F5); enable `homeassistant: packages: !include_dir_named packages`; copy `packages/auto_parcheggio.yaml` into `/config/packages/`; replace `persona1/2/3` with your phone name (the middle part of `sensor.<name>_bluetooth_connection`, `device_tracker.<name>`, `notify.mobile_app_<name>`); restart Home Assistant; add the card; in the gear set the linked person (same name), car Bluetooth name and notification. Android Companion app required for automatic saving (iPhone: manual button only).

3. Esempio di card:

```yaml
type: custom:shc-parking-card
car: 1                            # 1, 2 o 3 (default 1)
# opzionali
name: La mia auto                 # se manca, il nome impostato nell'ingranaggio
person: person.anna              # distanza; se manca, la persona dell'utente collegato o quella associata all'auto
save_script: script.auto_parcheggio_salva
image: /local/auto.jpg           # foto fissa (ha la precedenza sulla foto caricata dalla card)
car_color: "#3b82f6"             # colore del disegno
hide_map: false
```

Seconda auto (stessa famiglia, card e notifiche separate):

```yaml
type: custom:shc-parking-card
car: 2
person: person.marco
```

## Foto dell'auto

Il disegno è quello predefinito. L'icona della fotocamera in alto a destra apre il dialogo **Foto dell'auto**: scegli una foto dal telefono, viene ridimensionata a 1000 px, caricata in Home Assistant (stessa API delle foto persona, serve un utente amministratore) e il suo indirizzo salvato in `input_text.auto_parcheggio_auto<N>_foto`, quindi la vedono tutti i dispositivi. **Usa il disegno** la rimuove. Con `image:` in YAML la foto è fissa.

## Note

- La mappa usa le tessere di OpenStreetMap (nessuna chiave); se il sensore non ha l'indirizzo, la card lo chiede una sola volta per punto a Nominatim (OpenStreetMap) e lo ricorda nel browser.
- Posizione, ora, indirizzo e metodo sono helper (`input_number`, `input_datetime`, `input_text`): reggono riavvio e reload di Home Assistant.

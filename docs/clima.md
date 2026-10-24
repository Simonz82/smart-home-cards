# ❄️ Card Climatizzatore (`shc-climate-card`)

Il climatizzatore in una card sola, con la stessa grafica delle altre: al posto della foto c'è la **gauge** con temperatura della stanza, temperatura impostata e umidità; sotto i dati, i comandi diretti e le barre. Parte già nel **layout centrato**.

| Chiaro | Scuro |
|---|---|
| ![Card Climatizzatore](screenshot/clima.png) | ![Card Climatizzatore scuro](screenshot/clima-dark.png) |

## Perché questa card

Prima il mio climatizzatore era una pila di card diverse: una markdown per il titolo, la gauge, sette `button-card` per i comandi, una card entità per la programmazione, tutto incollato con `card_mod`. Funzionava, ma era lunga da copiare e da mantenere. Qui c'è tutto in un unico blocco, con un editor visuale, e la gauge resta la stessa che si vede nelle dashboard (non un disegno nuovo).

## Cosa mostra

- **Gauge** (al centro): lancetta sulla temperatura della stanza, pallino rosso con il valore della temperatura impostata, colori da blu (fresco) a rosso (caldo), sotto il nome della stanza e la modalità in italiano. Se indichi un sensore di umidità compare anche la lancetta interna dell'umidità. Toccandola si apre la scheda del climatizzatore di Home Assistant.
- **Badge**: RAFFRESCA, RISCALDA, DEUMIDIFICA, VENTILAZIONE, AUTO, IN PAUSA (raggiunta la temperatura), SPENTO oppure OFFLINE.
- **Riquadro Clima**: temperatura stanza, temperatura impostata, umidità, temperatura esterna, potenza assorbita, consumo di oggi. Le righe senza sensore non compaiono.
- **Comandi**: accendi/spegni (riaccende nell'ultima modalità usata), − e + con la temperatura impostata in grande (più tocchi veloci mandano un solo comando), un pulsante per ogni modalità supportata dal climatizzatore, e alette oscillanti sì/no.
- **Programmazione attiva**: quando l'accensione o lo spegnimento programmato sono attivi compare una pillola sotto i comandi (es. "Accensione 20:15 · Raffresca 26°"), toccandola si apre la programmazione.
- **Barre**: potenza assorbita e umidità della stanza (arancio/rosso fuori dal 40–65%). Toccandole si apre il grafico.
- **Riga rossa** se il climatizzatore non è raggiungibile o se uno dei sensori di errore che indichi è acceso.

## I pulsanti in alto

### ⚙️ Programmazione

Accensione programmata (attiva sì/no, orario, modalità, temperatura) e spegnimento programmato (attivo sì/no, orario). Sono **una tantum**: scattano una volta e si disattivano da sole. Usano gli helper del package [`packages/clima.yaml`](../packages/clima.yaml).

### 📊 Consumi

Tabella freddo/caldo per oggi, settimana, mese e anno (i sensori di consumo dell'integrazione del climatizzatore, se li ha: per esempio Daikin Onecta), potenza ed energia totale della presa smart, pulsante per il grafico della potenza.

### 📈 Grafici

Temperatura stanza, temperatura esterna, umidità, potenza (24 h / 7 gg / 30 gg / da … a). Vedi [grafici.md](grafici.md).

### 🌀 Ventola e alette

Velocità della ventola, posizione delle alette e modalità speciali (Boost, Fuori casa…), solo quelle che il tuo climatizzatore espone.

### ℹ️ Stato e diagnostica

Stato, cosa sta facendo in questo momento, ultimo cambio, intervallo di temperatura, scheda completa, pulsante per aggiornare i dati dal cloud e l'elenco dei sensori di diagnostica che scegli (errori, codici errore, rete Wi‑Fi, richieste cloud rimaste…).

| Programmazione | Consumi | Ventola e alette | Diagnostica |
|---|---|---|---|
| ![Programmazione](screenshot/popup/clima-programmazione-dark.png) | ![Consumi](screenshot/popup/clima-consumi-dark.png) | ![Ventola e alette](screenshot/popup/clima-ventola-dark.png) | ![Diagnostica](screenshot/popup/clima-diagnostica-dark.png) |

## Cosa ti serve prima di iniziare

- Un climatizzatore in Home Assistant (`climate.xxx`), con qualunque integrazione: Daikin Onecta, Midea, Tado, un termostato… La card legge modalità, ventola, alette e preset dall'entità stessa e mostra solo quello che c'è.
- **Per la gauge**: la card [gauge-card-pro](https://github.com/benjamin-dcs/gauge-card-pro) (HACS → cerca "Gauge Card Pro"). Senza, la card usa la gauge standard di Home Assistant, più semplice ma funzionante.
- Facoltativi: sensore di umidità della stanza, sensore di temperatura esterna, presa smart con potenza (W) ed energia (kWh) su cui è collegato il climatizzatore.

## 🚀 Metodo veloce: usa il mio package originale

Il package [`packages/clima.yaml`](../packages/clima.yaml) crea gli helper e le due automazioni della programmazione. I nomi degli helper sono già quelli predefiniti della card: non serve configurare niente.

1. Copialo in `/config/packages/`.
2. Cerca `climate.daikin_salone_temperature` (3 punti) e mettici il tuo climatizzatore.
3. Riavvia Home Assistant.

Senza il package la card funziona lo stesso: il pulsante ⚙️ mostra solo che la programmazione non è configurata.

## Configurazione minima

```yaml
type: custom:shc-climate-card
entity: climate.climatizzatore
```

Configurazione completa che uso io (Daikin Onecta + presa smart):

```yaml
type: custom:shc-climate-card
name: Climatizzatore
entity: climate.daikin_salone_temperature
room_name: Soggiorno
temperature_entity: sensor.daikin_climatecontrol_room_temperature
humidity_entity: sensor.temp_salone_humidity
outdoor_entity: sensor.daikin_salone_outdoor_temperature
power_entity: sensor.clima_power
energy_entity: sensor.clima_energia
refresh_entity: button.daikin_salone_refresh
consumption:
  cooling_day: sensor.daikin_climatecontrol_cooling_daily_electrical_consumption
  heating_day: sensor.daikin_climatecontrol_heating_daily_electrical_consumption
  cooling_week: sensor.daikin_climatecontrol_cooling_weekly_electrical_consumption
  heating_week: sensor.daikin_climatecontrol_heating_weekly_electrical_consumption
  cooling_month: sensor.daikin_salone_climatecontrol_cooling_monthly_electrical_consumption
  heating_month: sensor.daikin_salone_climatecontrol_heating_monthly_electrical_consumption
  cooling_year: sensor.daikin_climatecontrol_cooling_yearly_electrical_consumption
  heating_year: sensor.daikin_climatecontrol_heating_yearly_electrical_consumption
diagnostics:
  - entity: binary_sensor.daikin_climatecontrol_is_in_error_state
    name: Errore unità interna
    alarm: true          # se acceso: card con bordo rosso e riga di avviso
  - entity: binary_sensor.daikin_outdoorunit_is_in_error_state
    name: Errore unità esterna
    alarm: true
  - entity: sensor.daikin_climatecontrol_error_code
    name: Codice errore unità interna
  - entity: sensor.daikin_ratelimit_remaining_day
    name: Richieste cloud rimaste oggi
```

## 🖊️ Editor visuale (senza YAML)

"Aggiungi card" → cerca **"Climatizzatore"** → scegli il climatizzatore e i sensori che hai. L'elenco `diagnostics` è l'unica parte da scrivere a mano (YAML), perché è un elenco libero.

## Campo per campo

| Campo | Obbligatorio | Predefinito | Descrizione |
|---|---|---|---|
| `entity` | **Sì** | — | Il climatizzatore (`climate.xxx`) |
| `name` | No | `Climatizzatore` | Nome della card |
| `room_name` | No | = `name` | Titolo sotto la gauge |
| `layout` | No | `centrato` | `centrato` o `classico` (gauge a sinistra) |
| `min` / `max` | No | `18` / `32` | Scala della gauge |
| `temperature_entity` | No | — | Sensore temperatura stanza: serve per il grafico (senza, la card usa la temperatura del climatizzatore) |
| `humidity_entity` | No | — | Sensore umidità stanza (lancetta interna della gauge, riga e barra) |
| `outdoor_entity` | No | — | Sensore temperatura esterna |
| `power_entity` | No | — | Potenza in W della presa del climatizzatore |
| `max_power` | No | `1500` | Fondo scala della barra potenza |
| `energy_entity` | No | — | Energia totale in kWh |
| `price_entity` | No | — | Prezzo €/kWh: mostra il costo stimato nei Consumi |
| `consumption` | No | — | `cooling_day/week/month/year`, `heating_day/week/month/year` (kWh) |
| `schedule` | No | helper del package | `on_enabled`, `on_time`, `on_mode`, `on_temperature`, `off_enabled`, `off_time` |
| `modes` | No | dal climatizzatore | Elenco delle modalità da mostrare come pulsanti (es. `[cool, heat, dry]`) |
| `refresh_entity` | No | — | Pulsante (`button.`) per aggiornare i dati dal cloud |
| `diagnostics` | No | — | Elenco `{entity, name, alarm}`; con `alarm: true` un `binary_sensor` acceso fa scattare l'avviso |
| `gauge` | No | gauge pronta | Configurazione completa di una gauge-card-pro tua, al posto di quella predefinita |
| `layout_entity` | No | — | Menu layout classico/centrato, vedi [layout.md](layout.md) |

### Usare la propria gauge

Se hai già una gauge-card-pro configurata come piace a te, incollala sotto `gauge:` e la card la usa al posto di quella predefinita:

```yaml
type: custom:shc-climate-card
entity: climate.climatizzatore
gauge:
  type: custom:gauge-card-pro
  entity: climate.climatizzatore
  min: 16
  max: 30
  # ...tutto il resto della tua gauge
```

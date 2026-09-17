# 🔋 Card UPS (`dm-ups-card`)

Stato del gruppo di continuità: online/a batteria, percentuale di carica, carico attuale, autonomia residua. La card più semplice della raccolta — niente popup Impostazioni, va dritta al punto.

![Card UPS](screenshot/ups.png)

## Cosa ti serve prima di iniziare

Un UPS collegato via USB/rete al tuo server, esposto in Home Assistant tramite l'integrazione **[NUT (Network UPS Tools)](https://www.home-assistant.io/integrations/nut/)** (supporta la maggior parte delle marche, incluso APC) — Impostazioni → Dispositivi e servizi → Aggiungi integrazione → cerca "NUT". Quell'integrazione crea automaticamente sensori di stato, carica, carico e autonomia: i nomi esatti dipendono dal modello, controllali in Impostazioni → Entità dopo averla configurata.

## Configurazione minima

```yaml
type: custom:dm-ups-card
name: UPS
status_entity: sensor.ups_status    # unico campo obbligatorio: stato testuale (Online, On Battery, ecc.)
```

## Campo per campo

| Campo | Obbligatorio | Default | Descrizione |
|---|---|---|---|
| `status_entity` | **Sì** | — | Stato testuale dell'UPS (es. "Online", "On Battery") |
| `name` | No | `"UPS"` | Titolo card |
| `model` | No | — | Testo libero, es. `"APC Back-UPS BE850G2"` |
| `rated_watts` | No | `450` | Potenza nominale dell'UPS, usata come fondo scala della barra di carico |
| `status_code_entity` | No | — | Codice di stato grezzo, se la tua integrazione lo espone separatamente dal testo |
| `battery_entity` | No | — | `sensor` percentuale di carica batteria |
| `load_entity` | No | — | `sensor` percentuale di carico attuale |
| `runtime_entity` | No | — | `sensor` autonomia residua stimata (minuti) |
| `runtime_low_entity` | No | — | Soglia di autonomia minima configurata sull'UPS stesso, se esposta |
| `input_voltage_entity` | No | — | `sensor` tensione di rete in ingresso |
| `power_entity` | No | — | `sensor` in Watt, se hai anche una presa smart che misura il consumo reale collegato all'UPS (più preciso della sola percentuale di carico) |
| `automation_entity` | No | — | Un'automazione che gestisci tu (es. "spegni i servizi non critici sotto il 20% di batteria") — mostrata come riga informativa/attivabile |
| `actions` | No | `[]` | Pulsanti extra con conferma, stesso formato delle altre card — vedi [fritzbox.md](fritzbox.md#actions--pulsanti-con-conferma) per un esempio |
| `settings_sections` | No | `[]` | Vedi [settings-sections.md](settings-sections.md) |

## Esempio completo

```yaml
type: custom:dm-ups-card
name: UPS
model: "APC Back-UPS BE850G2"
status_entity: sensor.ups_status
battery_entity: sensor.ups_battery_charge
load_entity: sensor.ups_load
runtime_entity: sensor.ups_battery_runtime
input_voltage_entity: sensor.ups_input_voltage
rated_watts: 450
```

# 🖧 Card Proxmox (`dm-proxmox-card`)

Stato del nodo Proxmox VE: CPU/RAM/disco, container e VM attive, consumo elettrico, salute SSD.

![Card Proxmox](screenshot/proxmox.png)

Nessun campo è tecnicamente obbligatorio (la card si carica comunque anche vuota), ma senza almeno `sensors.cpu`/`sensors.ram_pct` non mostra granché di utile.

## Cosa ti serve prima di iniziare

Un modo per portare in Home Assistant le statistiche del tuo host Proxmox VE — le due strade più comuni:
- L'integrazione core/HACS **Proxmox VE** (espone CPU/RAM/disco/numero di VM e container per nodo).
- In alternativa, un piccolo script/`command_line` sensor che interroga l'API di Proxmox (`https://<host>:8006/api2/json/...`) se preferisci non installare integrazioni extra.

`cpu_temp` e `gpu_pct` **non** fanno parte delle statistiche standard di Proxmox: se vuoi mostrarli ti serve qualcosa che legga i sensori hardware dell'host (es. `lm-sensors` + un sensore `command_line`/SSH, oppure un agente tipo Glances/System Bridge installato sull'host). Se non ti interessano, ometti semplicemente questi due campi.

## Campo per campo

```yaml
type: custom:dm-proxmox-card
name: Proxmox
sensors:
  status: binary_sensor.proxmox_stato          # online/offline
  cpu: sensor.proxmox_cpu_usata                # %
  ram_pct: sensor.proxmox_memoria_percentuale  # %
  ram_used: sensor.proxmox_memoria_usata
  ram_free: sensor.proxmox_memoria_libera
  disk_pct: sensor.proxmox_disco_percentuale   # %
  containers: sensor.proxmox_contenitori_attivi
  vms: sensor.proxmox_macchine_virtuali_attive
  last_boot: sensor.proxmox_ultimo_avvio
  cpu_temp: sensor.proxmox_cpu_temperatura     # opzionale, vedi sopra
  gpu_pct: sensor.proxmox_gpu_utilizzo         # opzionale, vedi sopra
power:                                          # opzionale, serve una presa smart a monte
  power: sensor.proxmox_power
  voltage: sensor.proxmox_voltage
  current: sensor.proxmox_current
  energy_day: sensor.proxmox_energia_oggi
  energy_month: sensor.proxmox_energia_mese
disk_health:                                    # opzionale, richiede SMART (es. via smartctl/scrutiny)
  temp: sensor.ssd_proxmox_temperatura
  wearout: sensor.ssd_proxmox_usura
  power_on_hours: sensor.ssd_proxmox_ore_avvio
  power_cycles: sensor.ssd_proxmox_cicli_alimentazione
  health: binary_sensor.ssd_proxmox_stato_salute
update: update.proxmox_ve_update                # opzionale, se hai un modo per rilevare update disponibili
actions:                                        # opzionale
  - label: Riavvia Host
    entity: script.proxmox_riavvia
    confirm: "Vuoi riavviare il server fisico?"
settings_sections: []                           # opzionale, vedi settings-sections.md
```

`disk_health` è pensato per un SSD/NVMe che espone dati SMART — se usi [Scrutiny](https://github.com/AnalogJ/scrutiny) o un semplice `command_line` sensor su `smartctl -a`, questi sono i valori tipici da estrarne. Anche questo blocco è del tutto opzionale.

Per il pattern notifiche vedi [notifiche-personalizzate.md](notifiche-personalizzate.md), per `settings_sections` vedi [settings-sections.md](settings-sections.md).

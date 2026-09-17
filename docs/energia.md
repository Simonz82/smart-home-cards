# ⚡ Card Energia Casa (`dm-energy-card`)

Vista d'insieme del consumo elettrico di casa: potenza istantanea, ripartizione per circuito/stanza, confronto con il periodo precedente, interruttori rapidi, costi.

![Card energia](screenshot/energia.png)

## Cosa ti serve prima di iniziare

Un misuratore di **potenza generale casa** in Watt (un contatore smart, uno Shelly EM/3EM sul quadro, o il sensore che il tuo distributore espone via un'integrazione). Questo è l'unico prerequisito hardware reale; tutto il resto (circuiti, interruttori, soglie) è opzionale e si aggiunge un pezzo alla volta.

## Configurazione minima

```yaml
type: custom:dm-energy-card
name: Energia Casa
power_entity: sensor.potenza_casa_w
max_power: 4500          # fondo scala della barra (il tuo contatore/limite contrattuale)
```

## Campo per campo

| Campo | Obbligatorio | Descrizione |
|---|---|---|
| `power_entity` | **Sì** | `sensor` in Watt con la potenza istantanea totale |
| `name` | No | Titolo card |
| `max_power` | No | Fondo scala barra di potenza (es. la potenza contrattuale) |
| `top_entity` | No | `sensor` testuale con il nome del circuito che sta consumando di più in questo momento (calcolato da te con un template, se vuoi mostrarlo) |
| `soglia_entity` | No | `input_number` con la soglia oltre la quale scatta l'allarme "sovraccarico" |

### `periods` / `periods_prev` — box energia/costo per fascia temporale

Una riga per ogni periodo che vuoi mostrare (Ogni ora, Oggi, Settimana, Mese, ecc.), affiancata dal valore del periodo corrispondente precedente:

```yaml
periods:
  - label: Oggi
    energy: sensor.energia_oggi_casa      # kWh consumati nel periodo corrente
    cost: sensor.costo_oggi_casa          # € spesi nel periodo corrente
periods_prev:
  - label: Ieri
    energy: sensor.energia_oggi_casa      # stessa entità...
    energy_attr: last_period              # ...ma leggendo l'attributo "last_period" (tipico degli Utility Meter)
    cost: sensor.costo_ieri_casa
```

`energy`/`cost` in `periods` sono normalmente helper **Utility Meter** (Impostazioni → Helper → Contatore di utenza) agganciati al tuo sensore di energia totale, con ciclo di reset orario/giornaliero/settimanale/mensile/annuale a seconda della riga. `energy_attr: last_period` in `periods_prev` sfrutta il fatto che ogni Utility Meter, quando si azzera, salva il valore precedente in quell'attributo — comodo per il confronto "vs periodo prima" senza creare un secondo helper.

### `circuits` — ripartizione per stanza/circuito (opzionale)

```yaml
circuits:
  - label: Cucina
    entity: sensor.cucina_power
    max: 2000
  - label: Lavatrice
    entity: sensor.lavatrice_power
    max: 2000
```

Una riga per ogni sotto-misuratore che hai (prese smart, canali di uno Shelly 3EM, ecc.). `max` è solo il fondo scala della sua barra.

### `switches` — accensione rapida (opzionale)

```yaml
switches:
  - label: Presa Computer
    entity: switch.presa_computer
```

### `weekdays` / `media_entity` — storico settimanale (opzionale)

```yaml
weekdays:
  Lunedì: input_number.kwh_lunedi
  Martedì: input_number.kwh_martedi
  # ... fino a Domenica
media_entity: sensor.media_settimanale_kwh
```

Anche qui, gli `input_number` per giorno li popoli tu con un'automazione giornaliera (es. a mezzanotte, salva il valore dell'Utility Meter "oggi" nell'`input_number` del giorno corrispondente, poi resetta).

### `actions` — pulsanti con conferma (opzionale)

```yaml
actions:
  - label: Reset Contatori
    entity: script.reset_contatori_energia
    confirm: "Vuoi azzerare tutti i contatori di consumo energia? L'operazione non è reversibile."
```

### `settings_sections` — notifiche di soglia e consumo

```yaml
settings_sections:
  - title: Notifiche Soglia
    rows:
      - entity: input_boolean.notify_push_soglia
        label: Push
      - entity: input_boolean.notify_alexa_soglia
        label: Alexa
      - entity: input_number.soglia_casa_w
        label: Soglia W
      - entity: input_number.ritardo_soglia_secondi
        label: "Ritardo (s)"
  - title: Notifiche Consumi
    rows:
      - entity: input_boolean.notify_push_costi_giornalieri
        label: Giornalieri
      - entity: input_boolean.notify_push_costi_mensili
        label: Mensili
  - title: Costi
    rows:
      - entity: input_number.costo_energia
        label: "Costo energia (€/kWh)"
```

**Le automazioni "soglia superata → notifica" e "riepilogo costi giornaliero/mensile" sono già scritte e pronte in [`../automazioni/energia.yaml`](../automazioni/energia.yaml)** — in testa al file trovi l'elenco esatto di cosa cambiare (i tuoi sensori, il servizio di notifica). Vedi [`../automazioni/README.md`](../automazioni/README.md) per come installarlo. Per il pattern generale vedi anche [notifiche-personalizzate.md](notifiche-personalizzate.md); per il mini-linguaggio di `settings_sections` vedi [settings-sections.md](settings-sections.md).

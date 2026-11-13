# ☕ Card Macchina del caffè (`shc-coffee-card`)

> **Nuova - feedback benvenuto.** Provata con stati simulati: se la usi con la tua macchina scrivimi com'è andata (issue o discussione su GitHub).

<p align="center"><img src="screenshot/galleria/macchina-caffe.gif" width="360" alt="Card macchina del caffè"></p>

Funziona con **qualsiasi macchina del caffè collegata a una presa smart** che esponga un `switch` e un sensore di potenza (W). Lo stato si ricava dalla potenza assorbita: **spenta, standby, riscaldamento, erogazione, pronta**. Disegno animato (vapore, caldaia che si scalda, manometro, caffè che scende nella tazzina), caffè del giorno, acqua e decalcificazione se la tua macchina smart le espone. Stesso stile e stessi due layout (classico / centrato) delle altre card.

La card **non ha pulsanti di comando**: mostra solo lo stato (la presa non viene mai accesa o spenta dalla card).

## Cosa ti serve

- Una presa smart: `switch.<nome>` (o `input_boolean`) e il suo sensore di potenza in W.
- Facoltativi: energia (kWh) e, se la macchina è smart, stato, contatore caffè, livello acqua, decalcificazione.

## Esempio

```yaml
type: custom:shc-coffee-card
entity: switch.macchina_caffe
name: Macchina del caffè
power_entity: sensor.macchina_caffe_potenza
energy_entity: sensor.macchina_caffe_energia
# soglie (valori di esempio, vedi sotto come tararle)
standby_w: 10
active_w: 300
ready_alert: true
# solo se hai una macchina smart
cups_entity: sensor.macchina_caffe_caffe_oggi
water_entity: sensor.macchina_caffe_livello_acqua
descale_entity: binary_sensor.macchina_caffe_decalcificazione
state_entity: sensor.macchina_caffe_stato
```

## Come si ricavano gli stati

Con la presa **spenta** → *Spenta*. Con la presa accesa:

| Potenza | Stato |
|---|---|
| `standby_w` o meno (default 10 W) | *Standby*, oppure *Pronta* se la macchina si è appena scaldata (per `ready_min` minuti dopo l'ultimo uso, default 20) |
| tra `standby_w` e `active_w` | *Pronta* (macchina calda, assorbe poco) |
| `active_w` o più (default 300 W) | *Riscaldamento* se parte da fredda o se il picco dura più di `max_brew_s`; *Erogazione* se la macchina era già pronta |

Con `brew_w` (facoltativo) i picchi sopra quella potenza sono sempre erogazione: utile se la pompa porta il consumo più in alto del solo riscaldamento. Come tarare: guarda il grafico della potenza (icona grafico della card) mentre fai un caffè e accendi a freddo, poi imposta le soglie sotto i picchi.

## Caffè del giorno

- Con `cups_entity` la card mostra il valore dell'entità (contatore giornaliero della tua macchina).
- Senza, i caffè sono **stimati dai picchi di potenza di oggi** (valore con `~`): conta ogni picco partito a macchina pronta e lungo tra `min_brew_s` (default 8) e `max_brew_s` (default 70) secondi. Le rilevazioni più brevi di 4 s non spezzano un caffè. La storia di oggi viene riletta ad ogni apertura, quindi il numero non si azzera se ricarichi la pagina; riparte da zero a mezzanotte.

## Avviso "pronta"

- `ready_alert: true`: al termine del riscaldamento la card lampeggia per 10 secondi con la scritta "Pronta!" (solo se la dashboard è aperta).
- Notifica sul telefono: usa l'automazione di esempio [`packages/coffee_pronta.yaml`](../packages/coffee_pronta.yaml) (cambia le tre entità).

## Opzioni

| Campo | Obbligatorio | Default | Descrizione |
|---|---|---|---|
| `entity` | **Sì** | - | Presa smart (`switch.*` o `input_boolean.*`) |
| `power_entity` | Consigliato | - | Sensore di potenza in W (senza, la card distingue solo spenta / pronta) |
| `energy_entity` | No | - | Sensore di energia in kWh |
| `name`, `icon` | No | Macchina del caffè, `mdi:coffee-maker` | Nome e icona del chip |
| `standby_w` | No | `10` | Standby fino a questa potenza (W) |
| `active_w` | No | `300` | Riscaldamento/erogazione da questa potenza (W) |
| `brew_w` | No | `0` | Se > 0, sopra questa potenza è sempre erogazione |
| `min_brew_s`, `max_brew_s` | No | `8`, `70` | Durata minima/massima di un caffè per contarlo |
| `ready_min` | No | `20` | Minuti di "pronta" dopo l'ultimo uso quando la potenza è sotto `standby_w` |
| `ready_alert` | No | `false` | Evidenzia la card quando finisce il riscaldamento |
| `state_entity` | No | - | Stato testuale della macchina smart (mostrato in una riga) |
| `cups_entity` | No | - | Contatore caffè di oggi (sostituisce la stima) |
| `water_entity` | No | - | Livello acqua: sensore numerico (%) oppure `binary_sensor` (`on` = da riempire); avviso sotto `water_low` |
| `water_low` | No | `15` | Soglia % dell'avviso acqua bassa |
| `descale_entity` | No | - | `binary_sensor` (`on` = decalcificazione necessaria) oppure sensore numerico (caffè mancanti) |
| `layout`, `layout_entity` | No | centrato | Layout `classico` o `centrato`; `layout_entity` = `input_select` per cambiarlo da menu |

Le righe dell'acqua, della decalcificazione, dello stato macchina e dell'energia compaiono solo se imposti la relativa entità. Il pannello ℹ mostra stato, valori, soglie e l'ultimo cambio.

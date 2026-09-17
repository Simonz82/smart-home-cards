# Notifiche personalizzate (Push + Alexa)

Ogni card ha, nel suo popup Impostazioni, uno o più interruttori tipo "Notifica Push" / "Notifica Alexa". **La card non manda nessuna notifica da sola**: quegli interruttori sono solo delle preferenze (`input_boolean`) che tu leggi dentro una tua automazione. Questa pagina spiega il pattern usato in tutte le guide, così lo scrivi una volta e lo riusi ovunque.

## L'idea generale

1. Crei due helper `input_boolean` per ogni cosa che vuoi poter notificare, uno per ogni "canale":
   - `input_boolean.notify_push_xxx` → notifica sul cellulare (app Home Assistant Companion).
   - `input_boolean.notify_alexa_xxx` → annuncio vocale su un dispositivo Alexa.
2. Li aggiungi alla card (vedi [settings-sections.md](settings-sections.md)) così puoi accenderli/spegnerli dal popup Impostazioni, senza dover aprire Impostazioni → Helper ogni volta.
3. Scrivi **una automazione** che, quando succede l'evento che ti interessa, controlla quegli interruttori e manda la notifica solo se sono accesi.

## Esempio completo: notifica fine ciclo lavatrice

Helper da creare (Impostazioni → Dispositivi e servizi → Helper → Aggiungi helper → Interruttore):
- `input_boolean.notify_push_lavatrice`
- `input_boolean.notify_alexa_lavatrice`

Automazione:

```yaml
alias: "Notifica fine ciclo lavatrice"
trigger:
  - platform: state
    entity_id: sensor.lavatrice_operation_state
    to: "finished"
action:
  - if:
      - condition: state
        entity_id: input_boolean.notify_push_lavatrice
        state: "on"
    then:
      - service: notify.mobile_app_il_tuo_telefono   # sostituisci col tuo notify.mobile_app_xxx
        data:
          title: "Lavatrice"
          message: "Ciclo terminato ✅"
  - if:
      - condition: state
        entity_id: input_boolean.notify_alexa_lavatrice
        state: "on"
    then:
      - service: notify.alexa_media_cucina           # richiede l'integrazione HACS "Alexa Media Player"
        data:
          message: "La lavatrice ha finito il ciclo"
          data:
            type: announce
```

Puoi copiare lo stesso schema per qualsiasi altra notifica: cambia solo l'`entity_id` del trigger e i due `input_boolean` di preferenza.

## Notifiche con fascia oraria

Alcune card (Energia, FritzBox) hanno anche due `input_datetime` per "non disturbare" fuori da una certa fascia oraria (es. non avvisare di notte). Nell'automazione basta aggiungere una condizione in più:

```yaml
condition:
  - condition: time
    after: input_datetime.orario_inizio_notifiche_xxx
    before: input_datetime.orario_fine_notifiche_xxx
```

## Cosa serve per Alexa

Le notifiche Alexa **non** sono native in Home Assistant: servono l'integrazione [Alexa Media Player](https://github.com/alandtse/alexa_media_player) (si installa da HACS) e un dispositivo Alexa già collegato al tuo account Amazon. Se non ti interessa Alexa, ignora semplicemente gli interruttori `notify_alexa_xxx` — lascia solo quelli push, funziona lo stesso.

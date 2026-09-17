# Il popup "Impostazioni" (`settings_sections`)

Tutte le card hanno un pulsante ⚙️ che apre un popup con delle sezioni personalizzabili. Cosa mostrare in quel popup lo decidi tu, elencandolo nel campo `settings_sections` della card — è facoltativo: se non lo metti, il pulsante ⚙️ semplicemente non compare (tranne nella card UPS, che non ha questo popup).

`settings_sections` è una lista di **sezioni**, ognuna con un titolo e una lista di **righe**. Esistono due tipi di riga.

## Riga semplice: un'entità, un'etichetta

La forma più comune — mostra un'entità con la sua etichetta, cliccabile per accendere/spegnere o modificare il valore a seconda del tipo di entità:

```yaml
settings_sections:
  - title: Notifiche
    rows:
      - entity: input_boolean.notify_push_lavatrice
        label: Notifica Push
      - entity: input_boolean.notify_alexa_lavatrice
        label: Notifica Alexa
```

Funziona con qualunque dominio di entità: `input_boolean` (interruttore ON/OFF), `input_number` (un numero regolabile), `input_datetime` (un orario), `automation` (attiva/disattiva un'automazione), `input_text`, ecc. La card sceglie da sola il controllo giusto in base al dominio.

## Riga "gruppo": toggle principale + orario + giorni della settimana + extra

Usata quando vuoi un blocco più strutturato tipo "Backup automatico: ON/OFF, a che ora, quali giorni, più eventuali interruttori secondari". La usa ad esempio la card Server Home Assistant per Report/Backup/Riavvii programmati:

```yaml
settings_sections:
  - title: Backup
    rows:
      - type: group
        icon: backup
        label: Backup Auto
        toggle: input_boolean.ha_backup          # interruttore principale ON/OFF
        time: input_datetime.orario_backup       # orario del backup
        days:                                    # 7 interruttori, uno per giorno (Lun→Dom)
          - input_boolean.ha_backup_lunedi
          - input_boolean.ha_backup_martedi
          - input_boolean.ha_backup_mercoledi
          - input_boolean.ha_backup_giovedi
          - input_boolean.ha_backup_venerdi
          - input_boolean.ha_backup_sabato
          - input_boolean.ha_backup_domenica
        action:                                  # pulsante opzionale "esegui ora"
          label: Backup manuale
          script: script.backup_ha
```

Altri campi opzionali dello stesso tipo `group`:
- `numbers`: lista di `{entity, label}` — righe numeriche extra (es. soglie di allarme CPU/RAM/disco).
- `extraToggles`: lista di `{entity, label}` — interruttori extra sotto il toggle principale (es. singole categorie di notifica).

Tutti gli helper (`input_boolean`, `input_number`, `input_datetime`) li crei tu, una volta sola, da **Impostazioni → Dispositivi e servizi → Helper → Aggiungi helper**. Poi scrivi il loro `entity_id` nella configurazione della card — la card stessa non crea nulla, mostra solo quello che le indichi.

## Perché creare tutti questi helper a mano?

Perché sono la base per costruire **le tue automazioni**: la card ti dà solo l'interfaccia (l'interruttore, l'orario, il pulsante), il comportamento vero (mandare una notifica, lanciare un backup, spegnere qualcosa) lo scrivi tu in un'automazione che legge quell'helper. Vedi [notifiche-personalizzate.md](notifiche-personalizzate.md) per un esempio completo con le notifiche push/Alexa.

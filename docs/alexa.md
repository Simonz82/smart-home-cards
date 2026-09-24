# 🔊 Card Alexa: Annuncio Testo (`shc-alexa-text-card`) e Memo (`shc-alexa-memo-card`)

Due card pensate per usare Alexa come "citofono di casa", senza passare da automazioni scritte a mano ogni volta:

- **Alexa Annuncio Testo**: scrivi un messaggio al volo, scegli su quale speaker (o gruppo multiroom) farlo sentire, regoli il volume e lo riproduci con un tap. Pensata per gli annunci "adesso", non programmati.
- **Alexa Memo**: fino a **4 promemoria vocali indipendenti** (la card Memo 1 permette di sbloccarne altre, 2/3/4, in base a quanti ti servono), ognuno con un proprio testo, un intervallo di date + orario (oppure una singola data/ora se non ripetuto) e, opzionalmente, un **dispositivo Alexa dedicato**. Il campo **Persona** (opzionale) evita che un promemoria vada perso se all'orario previsto quella persona non è in casa: resta "in sospeso" e viene annunciato pochi minuti dopo il suo rientro.

| Alexa Annuncio Testo | Alexa Memo |
|---|---|
| ![Card Alexa Annuncio Testo](screenshot/alexa-text.png) | ![Card Alexa Memo](screenshot/alexa-memo.png) |

Entrambe riusano lo stesso motore vocale condiviso di [`packages/centro_notifiche_alexa.yaml`](../packages/centro_notifiche_alexa.yaml) (script `script.notifica_vocale_alexa`), lo stesso usato dalle altre card di questa raccolta — vedi [notifiche-personalizzate.md](notifiche-personalizzate.md).

## Cosa ti serve prima di iniziare

- L'integrazione HACS **[Alexa Media Player](https://github.com/alandtse/alexa_media_player)** (non è nativa in Home Assistant) con almeno un dispositivo Alexa già collegato al tuo account Amazon.
- Il package condiviso [`packages/centro_notifiche_alexa.yaml`](../packages/centro_notifiche_alexa.yaml) — se lo hai già installato per un'altra card (es. Raccolta Differenziata) non serve ricopiarlo.

## 🚀 Metodo veloce: usa i miei package originali

- **Alexa Annuncio Testo** → [`packages/alexa_text.yaml`](../packages/alexa_text.yaml). In cima trovi il blocco `IMPOSTAZIONI PACKAGE`: sostituisci il servizio di notifica push (`mobile_app_il_tuo_telefono`) col tuo, e nella lista `list_alexa_speaker_multiroom_text` metti i **friendly name** dei tuoi `media_player.*` Alexa al posto dei miei.
- **Alexa Memo** → [`packages/memo_alexa.yaml`](../packages/memo_alexa.yaml). Nessun dato da cambiare in cima: crea solo gli `input_text`/`input_boolean`/`input_datetime`/`input_number` per i 4 memo e le automazioni che li annunciano. Nelle automazioni "Annuncio al rientro" sostituisci gli `entity_id` di esempio (`person.residente_1`, `person.residente_2`, …) con i tuoi `person.*` reali, oppure lascia solo quelli che ti servono.
- Copia entrambi i file dentro `/config/packages/` (richiede i [Packages](https://www.home-assistant.io/docs/configuration/packages/) attivi) insieme a `centro_notifiche_alexa.yaml`, poi riavvia Home Assistant.

## Configurazione minima — Alexa Annuncio Testo

```yaml
type: custom:shc-alexa-text-card
name: Alexa
speaker_select_entity: input_select.list_alexa_speaker_multiroom_text
add_script: script.add_alexa_text
remove_script: script.remove_alexa_text
text_entity: input_text.alexa_text
volume_entity: input_number.volume_alexa_text
play_script: script.alexa_text_normale
group_entity: group.multiroom_alexa_text
```

### Campo per campo

| Campo | Obbligatorio | Descrizione |
|---|---|---|
| `speaker_select_entity` | **Sì** | `input_select` con l'elenco dei friendly name degli speaker Alexa disponibili |
| `add_script` / `remove_script` | **Sì** | Script che aggiungono/rimuovono lo speaker selezionato dal gruppo multiroom |
| `text_entity` | **Sì** | `input_text` col messaggio da annunciare |
| `volume_entity` | **Sì** | `input_number` (0–1) col volume del gruppo |
| `play_script` | **Sì** | Script che avvia l'annuncio TTS sul gruppo |
| `group_entity` | **Sì** | `group` multiroom su cui viene riprodotto il messaggio (mostrato in card come elenco "In riproduzione su") |
| `name` | No | Titolo card (default `"Alexa"`) |

## Configurazione minima — Alexa Memo (una per slot, 1 a 4)

```yaml
type: custom:shc-alexa-memo-card
name: Memo 1
active_entity: input_boolean.memo_alexa_1_attivo
text_entity: input_text.memo_alexa_1_testo
repeat_entity: input_boolean.memo_alexa_1_ripetizione
date_start_entity: input_datetime.memo_alexa_1_data_inizio
date_end_entity: input_datetime.memo_alexa_1_data_fine
time_entity: input_datetime.memo_alexa_1_orario
once_datetime_entity: input_datetime.memo_alexa_1_data_singola
person_entity: input_text.memo_alexa_1_persona
pending_entity: input_boolean.memo_alexa_1_pending
retry_delay_entity: input_number.memo_alexa_1_ritardo_rientro
devices_entity: input_text.memo_alexa_1_dispositivi
slot_count_entity: input_number.memo_alexa_slot_attivi
```

Le card Memo 2/3/4 sono identiche (cambia solo il numero nell'`entity_id`) e in genere si nascondono da sole in dashboard finché non servono, con una `visibility` sul valore di `input_number.memo_alexa_slot_attivi`:

```yaml
visibility:
  - condition: numeric_state
    entity: input_number.memo_alexa_slot_attivi
    above: 1   # 2 per Memo 3, 3 per Memo 4
```

### Campo per campo

| Campo | Obbligatorio | Descrizione |
|---|---|---|
| `active_entity` | **Sì** | `input_boolean` che attiva/disattiva il memo |
| `text_entity` | **Sì** | `input_text` col messaggio da annunciare |
| `repeat_entity` | **Sì** | `input_boolean`: acceso = ripete ogni giorno nell'intervallo date, spento = una tantum su `once_datetime_entity` |
| `date_start_entity` / `date_end_entity` | **Sì** | `input_datetime` (solo data) con l'intervallo in cui il memo è attivo, se ripetuto |
| `time_entity` | **Sì** | `input_datetime` (solo ora) con l'orario dell'annuncio giornaliero |
| `once_datetime_entity` | **Sì** | `input_datetime` (data+ora) usato quando il memo **non** è ripetuto |
| `person_entity` | **Sì** | `input_text` col `person.*` da controllare (vuoto = annuncia comunque all'orario, nessun controllo presenza) |
| `pending_entity` | **Sì** | `input_boolean` interno: resta acceso se l'annuncio è "in sospeso" in attesa del rientro |
| `retry_delay_entity` | **Sì** | `input_number` con i minuti di attesa dopo il rientro prima di riprovare |
| `devices_entity` | **Sì** | `input_text` con gli `entity_id` `media_player.*` scelti per la riproduzione (separati da virgola, vuoto = dispositivo Alexa predefinito) — nell'editor visuale è una selezione a chip |
| `slot_count_entity` | No (solo su Memo 1) | `input_number` che mostra sulla card 1 uno stepper "Altri memo attivi" per sbloccare Memo 3/4 |
| `name` | No | Titolo card (default `"Alexa"`) |

Il pulsante ℹ️ sulla card Memo apre un piccolo popup che spiega il funzionamento (utile per chi la usa, non solo per chi la configura):

![Come funziona il memo](screenshot/alexa-memo-info.png)

## 🖊️ Editor visuale (senza YAML)

Non serve scrivere configurazione a mano: "Aggiungi card" → cerca **"Alexa Annuncio Testo"** o **"Alexa Memo"** → compili i campi, ogni entità si cerca per nome con anteprima. Lo stesso editor si apre anche per modificare una card già aggiunta (pulsante "⋮" sulla card in modalità modifica → "Edit"). Sulla card Memo, il campo Dispositivi si compila con **chip a selezione multipla** (una per ogni `media_player.*` Alexa rilevato) invece di scrivere gli `entity_id` a mano.

| Editor Alexa Annuncio Testo | Editor Alexa Memo |
|---|---|
| ![Editor Alexa Annuncio Testo](screenshot/editor-alexa-text.png) | ![Editor Alexa Memo](screenshot/editor-alexa-memo.png) |

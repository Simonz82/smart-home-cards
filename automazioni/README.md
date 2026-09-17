# Automazioni pronte all'uso

Ogni file qui dentro (`elettrodomestici.yaml`, `energia.yaml`, `fritzbox.yaml`, `server-homeassistant.yaml`) contiene **tutto** quello che serve per far funzionare davvero le notifiche/report/riavvii programmati descritti nella guida della rispettiva card: gli helper (`input_boolean`, `input_number`, `input_datetime`), gli `script` di supporto, e le `automation` vere e proprie.

**In testa a ogni file trovi un blocco di commenti "COSA DEVI CAMBIARE"**: è l'unica parte da leggere per forza — elenca esattamente quali `entity_id` sostituire con i tuoi (sensori, servizio di notifica, ecc.). Il resto del file puoi lasciarlo così com'è.

## Come installarli

Il modo più semplice, che replica esattamente come sono organizzati questi file, è usare i **[Packages](https://www.home-assistant.io/docs/configuration/packages/)** di Home Assistant — permettono di tenere `input_boolean`, `automation`, ecc. di una stessa funzionalità tutti in un solo file, invece di sparsi tra `configuration.yaml`/`automations.yaml`/`scripts.yaml`.

1. Se non l'hai già fatto, abilita i packages aggiungendo questa riga in `configuration.yaml` (una tantum, vale per tutti i package futuri):
   ```yaml
   homeassistant:
     packages: !include_dir_named packages
   ```
2. Crea la cartella `/config/packages/` se non esiste.
3. Copia il file che ti interessa (es. `elettrodomestici.yaml`) dentro quella cartella.
4. Apri il file e applica le modifiche indicate nel blocco di commenti in testa.
5. Impostazioni → Sistema → Riavvia (i packages si caricano solo al riavvio, non basta un "Ricarica configurazione").
6. Controlla Impostazioni → Dispositivi e servizi → Helper: dovresti vedere i nuovi interruttori/numeri/orari creati dal file — collegali alla card nella sua sezione `settings_sections` (vedi la guida della card).

**Alternativa senza packages**: se preferisci non usarli, apri ogni file e sposta a mano ogni sezione dove hai già le tue — gli `input_boolean:`/`input_number:`/ecc. dentro `configuration.yaml` (o dove li tieni tu), le voci sotto `automation:` dentro `automations.yaml` (che è già una semplice lista, quindi incolla le singole voci `- alias: ...` in fondo), le voci sotto `script:` dentro `scripts.yaml`. Più lavoro manuale, stesso risultato.

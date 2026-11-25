# Changelog

## 2026-11-25 — 1.30.1: Alexa WebRadio finds the station sensor under another name

- **`shc-alexa-webradio-card`** (discussion #31): if `sensor.radio_alexa` does not exist, the card looks for `sensor.radio_alexa_2` / `_3`, `sensor.template_radio_alexa`, any sensor named "Radio Alexa" or with the attributes `select` and `servizi`, and uses it. The orange box tells you the name that was found and the option `station_sensor_entity` to set. When only that sensor is missing, the box suggests Developer tools > Check configuration and the log, and reminds that `configuration.yaml` must have a single `homeassistant:` key. Italian / English / Dutch.
- `docs/alexa.md`: new "Problemi comuni" part (sensor not found, `_2` entity, doubled `homeassistant:` key, Check configuration, package in a subfolder).

## 2026-11-25 — 1.30.0: Alexa WebRadio diagnostics, coffee/UPS options, common options

- **`shc-alexa-webradio-card`** (discussion #31): the card now shows an orange box that says what is missing (package not loaded and which entities are not found, speakers that do not exist in Home Assistant, speaker names that are not in the package list). Station logos that are missing are hidden instead of showing a broken image. `docs/alexa.md` WebRadio part rewritten as a simple step-by-step guide with common problems.
- **`shc-coffee-card`** (discussion #28): `show_capsule_bar: false` keeps only the text "Capsules: N" (no bar, threshold or days); `show_power: false` hides all consumption (power band, watts on the drawing, energy row). Defaults unchanged. Both in the visual editor.
- **`shc-ups-card`** (discussion #29): `battery_voltage_entity` (battery voltage row on the card and in the statistics), `last_outage_entity` (date/time of the last outage) and `last_outage_auto: true` (no entity: the last outage is found in the history of the status sensor, `last_outage_days` 1-60). Documented with the NUT sensor names and an automation + `input_datetime` recipe.
- **Common options** (discussion #13), see `docs/opzioni-comuni.md`: `automation_entities` now works on every card with a settings popup that did not have it yet (Fritz, Server, NAS, Proxmox, Energy, Garbage, Appliance) and in their visual editors; `image_scale` (number, `1` = normal) resizes the picture/drawing on all cards that have one, also in the visual editors. Without these options every card looks as before.

## 2026-11-25 — 1.29.0: parking card recognises Android Auto and CarPlay

- **`shc-parking-card`**: new gear field **How I know I'm in the car** per car (Bluetooth / Android Auto / CarPlay via iPhone Shortcuts / button only). The Bluetooth name field only shows when Bluetooth is chosen; a CarPlay hint with a link to the guide is shown. Without the new helper the card behaves as before (Bluetooth).
- Package: new `input_select.auto_parcheggio_auto<N>_rilevamento` (default `bluetooth`, so existing setups do not change) and a new automation `auto_parcheggio_android_auto` (`binary_sensor.<phone>_android_auto` on -> off, 20 s debounce, no duplicates in 3 minutes). `script.auto_parcheggio_salva` accepts `metodo: android_auto` and `metodo: carplay` (an iPhone Shortcuts automation calls it; `request_location_update` works on iOS too). The Bluetooth automation only fires for cars set to Bluetooth.
- Docs: new chapter "Scegli come capisce che sei in auto" with the Android Auto and CarPlay steps, new common problems. After updating, copy the new package file and restart Home Assistant fully.

## 2026-11-24 — 1.28.1: parking card setup guide and settings popup number/select

- **`shc-parking-card`**: when the package is missing (no `sensor.auto_parcheggio_auto<N>_posizione` or no `script.auto_parcheggio_salva`) the card now shows a clear "install the package" message with the guide link instead of an empty card; the manual button no longer calls a missing script.
- Manual save uses the phone name of the linked person unless the viewer's person has a matching `device_tracker`.
- Docs rewritten as a very simple 9-step guide (what you need, finding the phone name, copy the package, replace, full restart, add the card, gear fields, check, common problems).
- Package: the "at home" check also works when the person name differs from the phone name; header explains what to replace; docs rewritten as numbered install steps (update + Ctrl+F5, packages in `configuration.yaml`, copy, replace `persona1/2/3` with the phone name, restart).

### Settings popup: inline number / select controls

- **`settings_sections`**: rows with a native `number` / `input_number` entity now show a slider (min / max / step / unit from the entity attributes, value label updated while dragging, `set_value` called only on release), and rows with a native `select` entity show a dropdown (`select.select_option`, same as `input_select`). Controls are disabled when the entity is unavailable or unknown. Existing YAML is unchanged. Applies to all cards with a settings popup. (Issue #30)

## 2026-11-23 — 1.28.0: new card `shc-parking-card` (parked car)

- **New card Auto parcheggiata / Parked car** (`car: 1|2|3`, one card per car): car drawing or your own photo (upload from the card), OpenStreetMap map with pin, how long parked, address, distance from you, who saved it, **Take me to the car** (walking directions) and **Save position now**. Visual editor included, Italian / English / Dutch.
- **Package `packages/auto_parcheggio.yaml`**: up to **3 cars**, each with its own position (`auto_parcheggio_auto<N>_*` helpers and `sensor.auto_parcheggio_auto<N>_posizione`). A single automation saves the position when the car Bluetooth name disappears from the linked person's phone (Companion sensor `connected_paired_devices`, 20 s debounce, fresh `request_location_update`, discarded if GPS accuracy is too low); optional `in_vehicle` activity exit; one script with an `auto` parameter. Notifications go to the person linked to the car. Everything is stored in helpers without `initial`, so it survives restarts.
- **Settings (gear icon)** on the parking card, for the car of that card: car name, linked person, notify on every parking (off = position still saved without notification), car Bluetooth name, activity detection and GPS accuracy threshold. The visual editor has a car 1 / 2 / 3 field; options `name_entity`, `phone_entity`, `notify_entity`, `activity_entity`, `threshold_entity`, `bt_entity`. Italian / English / Dutch.
- Docs: [docs/auto-parcheggiata.md](docs/auto-parcheggiata.md).

## 2026-11-23 — 1.27.0: several physical disks and a Backup and load block in the Proxmox card Statistics popup

- **Proxmox card, `disks`** (YAML only): the **Statistics** popup shows one block per physical disk. Each item of the list takes `name`, `usage`, `used`, `total`, `temperature`, `wearout`, `power_on_hours`, `power_cycles` and `health`, and only the rows you configure are shown. Old configs keep working: `disk_health` is still the first disk and `disk_health2` + `sensors.disk2_*` the second one.
- **Proxmox card, `extra`** (YAML only): optional **Backup and load** block (last backup, duration, result, swap %, load average 5 / 15 min, certificate expiry). It only appears if configured; entities of the Proxmox VE custom integration (`proxmoxve_custom` 6.x) are given as example. Look and buttons are unchanged, the card front is unchanged.
- **Docs**: [docs/proxmox.md](docs/proxmox.md), new section with a YAML example for one or two disks plus backup, in Italian and English.
- Dutch translation of the new Statistics labels.

## 2026-11-21 — 1.26.0: classic / centred layout on the coffee machine and speaker cards (discussion #28)

- **Coffee machine card, `layout`**: `classico` shows the photo on the left and the "Today" details on the right, like the other appliance cards; `centrato` (default, same as before) keeps the photo on top. The option existed but did nothing since the 1.24.0 restyle; now it works. Same `layout` / `layout_entity` options as every other card, with a Layout field in the visual editor.
- **Speaker card, `layout`**: new `centrato` shows the speaker picture large on top with the info centred below; `classico` (default, unchanged) keeps picture left, info right. `layout_entity` (a Classic/Centered `input_select`) also works. Visual editor field included.
- Cards with no photo to place beside the details (Alexa Text, Memo, WebRadio, Notification centre, clocks) are not affected; thermostat cards (climate, boiler, heater, water heater) already had the option and are unchanged. Without the new settings nothing changes.

## 2026-11-20 — 1.25.0: VM / CT buttons on the Proxmox card, Docker button on the NAS card

- **Proxmox card, `guests`** (YAML only): **VM** and **CT** buttons open a popup listing the guests (from a REST sensor on the Proxmox API) with their state and **START / SHUTDOWN / STOP / REBOOT**; forced STOP asks for confirmation. `guests.exclusive` (`vmid: incompatible vmid`) asks for confirmation and lets the script shut the incompatible guest down first (e.g. two guests sharing a GPU). New package `packages/proxmox_guests.yaml` (sensor, `rest_command`, script that whitelists type/action/vmid). Needs a Proxmox API token with `VM.Audit` + `VM.PowerMgmt`; with `privsep=1` the role must be granted to the user as well, otherwise 403.
- **NAS card, `docker`** (YAML only): **Docker** button with the container list of a Synology NAS and **START / STOP / RESTART**; `docker.critical` containers ask for two confirmations on STOP / RESTART. New packages `packages/nas_docker.yaml` and `packages/ha_docker.sh` (SSH key bound to a forced command, the wrapper only accepts `list` and `start|stop|restart <validated name>`).
- **Docs**: [docs/vm-ct-docker.md](docs/vm-ct-docker.md), step by step in Italian and English: Proxmox role/token commands, SSH key setup, card YAML and a security section. Without the new options both cards are unchanged. Popup texts are Italian only for now.

## 2026-11-19 — 1.24.0: coffee card restyle and capsule stock, TV card local SamsungTV Smart (TheFab21) (#26)

- **TV card, `channel_attribute`** (#26): new optional setting, the name of an attribute of the Samsung `media_player` that holds the channel (e.g. `media_channel` from [TheFab21/ha-samsungtv-smart](https://github.com/TheFab21/ha-samsungtv-smart)), so no extra template sensor is needed. Order: `channel_entity`, then `channel_attribute`, then `channel_name_entity`, then `shared_channel_entity`, then the browser memory. Without it nothing changes.
- **TV card, apps over a stale channel** (#26): `input_source: TV` alone no longer proves the digital tuner is on screen. With `media_content_type: app` and no `app_id` / `app_name`, the panel shows the app (name from `source`, then `media_title`) and no guide, and choosing a channel first switches to the digital TV source. `media_content_type: channel` is still always live TV, and existing setups with `app_id` / `app_name` behave as before.
- **Docs** (`docs/tv.md`): TheFab21/ha-samsungtv-smart as a local, SmartThings-free alternative (tested on a Samsung Q60 Tizen, other models may differ), real channel with `channel_attribute` or a `media_channel` template sensor + `shared_channel_entity` fallback, and the per-model source sequence `KEY_EXIT+2000+KEY_TV+KEY_EXIT` as an example (not a default).
- **Coffee machine card, same look as the appliance cards + capsule stock** (Facebook feedback): the card now uses the layout of the washing machine / dishwasher / purifier cards (name in the header, drawing on the soft gradient background, details section, power band with bar, ⚙ Settings, graphs and ⓘ Status windows, same sizes). New optional **capsule stock**: `capsules_entity` (`input_number` / `counter` kept in Home Assistant, -1 per coffee), remaining capsules in big numbers with a bar, red "Time to buy" below `capsules_threshold`, days left from `avg_entity`, a confirm-to-add "I restocked (+pack)" button (`capsules_pack`, or your own `refill_script`), `capsule_unit` for pods / grams. New **maintenance** counters with "every N coffees" and a "Done" reset in the Status window (`descale_*`, `water_*`, `tray_*`: used capsule tray), `cups_week_entity`, `auto_off_entity` (minutes, editable in Settings) and `automation_entities`. Customisable by hand: `image`, `icon`, `capsule_color`, `low_color`, `bar_color`, `power_max`, `show_steps`, `hide_capsules` / `hide_refill` / `hide_rows` / `hide_power_band`; visual editor with every option. New package `packages/coffee_capsule.yaml` (counts a coffee from the power peak with minimum duration and no double counts, a single low-stock alert until you restock, maintenance alerts, daily/weekly reset with a 7-day moving average that survives restarts, restock script, optional auto power off). Fully backwards compatible: existing configs keep working (only the look changes). Docs: [docs/macchina-caffe.md](docs/macchina-caffe.md).

## 2026-11-18 — 1.23.0: TV card EPG and apps, blind control, separate purifier entities, settings fixes (#24, #25, discussions #20-#22)

- **Air purifier card, separate entities** (discussion #25): new optional `power_entity` (`switch` / `input_boolean` / `fan`; a `sensor` still means power in W), `speed_entity` (`number` / `input_number` slider using the entity's min, max and step, `select` / `input_select` chips, or `fan` percentage) and `mode_entity` (`select` / `input_select` chips or `fan` presets). The right service is called for each domain (`switch.turn_on/off`, `number.set_value`, `input_number.set_value`, `select.select_option`, `input_select.select_option`, `fan.set_percentage`, `fan.set_preset_mode`). Without them the card behaves as before. Visual editor and it/en/nl texts; guide in [docs/purificatore.md](docs/purificatore.md).
- **TV card, live TV vs app vs HDMI** (#24): `media_content_type: channel` is always live TV; with `media_content_type: app` and a technical `app_id` (e.g. `org.tizen.netflix-app`) the panel shows the `source` name (Netflix) instead of the id; checked against the SamsungTV Smart attributes (`TV/HDMI`, `channel` / `video` / `app`). Guide in [docs/tv.md](docs/tv.md).
- **Appliance card, blind / cover control** (Facebook question): new option `controls.cover_entity` adds Open / Stop / Close buttons (only the ones the cover supports) and a position slider when `set_cover_position` is supported. Works with `artwork: blind` or any other drawing. Docs in `docs/elettrodomestici.md`.
- **Printer / air purifier / dehumidifier cards** (discussion #21): the drawing now sits on the same soft gradient background as the appliance cards; the printer ⓘ Status window has Connection, Ink / toner level and Automations sections; new ⚙ Settings button with `automation_entity` / `automation_entities` (always on the printer, only when configured on the other two); the visual editor list of ink levels accepts any number of entries (empty new rows are kept while editing).
- **Layout fix** (discussion #22): with the power band hidden (`hide_power`) the card now keeps its bottom padding, so the image is no longer cut at the bottom edge, in both classic and centred layout, on every card.
- **Settings window** (discussion #20): the pills (time, days, numbers, extra switches) of grouped settings rows were clipped to a small circle (values like 60.0 or 03:00 cut); they now size to their content.
- **TV card, EPG (#24)**: new optional settings. `shared_channel_entity` (an `input_text` / `input_number`): the card writes the last channel chosen from the guide or the remote keys there and every device reads it, so all phones show the same channel (recommended with SamsungTV Smart, which has no channel sensor, and for setups that no longer use SmartThings); a channel detected by `channel_entity` / `channel_name_entity` still wins. `epg_dtv_source` + `epg_source_delay`: choosing a channel while an app or another source is active first selects the digital TV source, waits for the change and then sends the channel; nothing is sent when the TV is off. `epg_dtv_aliases`: extra names for the digital TV source (added to the built-in ones). The panel now shows "TV off", a generic message when the TV state is unavailable and, for apps, the title and picture when the media player provides them. Visual editor and it/en/nl texts; guide in [docs/tv.md](docs/tv.md).

## 2026-11-17 — 1.22.0: purifier, dehumidifier, printer and coffee cards, server CPU temperature, UPS runtime fix (#17, #19, #21, #23)

- **New card `shc-purifier-card`** (air purifier, `fan.*`): animated drawing (spinning fan, particles coloured by air quality, clean air going out), on/off, speed slider and preset-mode chips, optional PM2.5, air quality, filter life, humidity, temperature and power, warnings for low filter and high PM2.5. Docs: [docs/purificatore.md](docs/purificatore.md). Requested in #17.
- **New card `shc-dehumidifier-card`** (`humidifier.*`, or a plain switch with separate entities such as Tuya devices): on/off, target humidity -/+, mode and fan-speed chips (`select` entities or the humidifier modes), full-tank warning, current humidity, power and energy. Docs: [docs/deumidificatore.md](docs/deumidificatore.md). Requested in #17.
- **New card `shc-printer-card`** (printers with the standard IPP integration): status (idle / printing / stopped), ink / toner levels as coloured bars (list of entities, colour guessed from the name or set per entry), page counter, low-ink warning. Docs: [docs/stampante.md](docs/stampante.md). Requested in discussion #21.
- **Server card**: optional CPU temperature (`sensors.temperature`): the row, the graph and the details line only appear when the sensor is set (discussion #19). Texts of all new cards in it, en and nl.
- **New card `shc-coffee-card`** (coffee machine on a smart plug): states from the power draw with configurable thresholds (off / standby / heating / brewing / ready), animated drawing, today's coffees estimated from the power peaks (or the counter entity), optional water level, descaling, machine status and energy, optional "ready" highlight. No control buttons. Docs: [docs/macchina-caffe.md](docs/macchina-caffe.md), example automation `packages/coffee_pronta.yaml`. Texts in it, en and nl.
- **UPS card** (#23): the remaining runtime now follows the `unit_of_measurement` of the sensor (`s`, `min`, `h`, `ms`, `d`); before it always assumed seconds, so a NUT sensor in minutes showed "2 min" instead of 87.

## 2026-11-11 — 1.21.1: Alexa WebRadio, sensor id fix (#18)

- **Alexa WebRadio**: the package `packages/alexa_webradio.yaml` and the docs referred to `sensor.template_radio_alexa`, but the template sensor "Radio Alexa" creates `sensor.radio_alexa` on a new install, so the "Multiroom Alexa" automation got empty data and nothing played. Package and docs now use `sensor.radio_alexa`. The card default is `sensor.radio_alexa` and, if that entity does not exist, it falls back to the old `sensor.template_radio_alexa` (existing setups keep working untouched). If you copied the package before, replace `sensor.template_radio_alexa` with your real sensor id in the automation "Multiroom Alexa" (trigger and the two `play_media` templates).
- **Docs** (`docs/alexa.md`): new sections on custom speakers (`speakers`, `option` = entry of `input_select.list_alexa_speaker_multiroom`), adding Amazon Music / Spotify / Deezer playlists (no URL needed) and troubleshooting when nothing plays.

## 2026-11-11 — 1.21.0: speaker card, TV guide warning

- **New card `shc-speaker-card`** (Echo / Alexa and other speakers, any `media_player`): photo of the model (cut-out Wikimedia Commons photos, credits in [CREDITS.md](CREDITS.md); drawings for models without a free photo), animated ring while playing, title, artist and progress bar, volume slider and buttons, power, source, optional power and energy tiles, next alarm / timer / reminder and do-not-disturb / shuffle / repeat found automatically from the same device, quick text-to-speech field, visual editor, it/en/nl. Guide: [docs/altoparlante.md](docs/altoparlante.md).
- **TV card, TV guide (EPG)**: when the guide sensors of all channels with an `id` are `unavailable`/`unknown` (or the sensor of the current channel is missing), the card now shows a clear message (“TV guide not available: check the XMLTV EPG integration”, it/en/nl) instead of silent grey rows. Nothing changes while the guide works.
- **TV card, channel**: the current channel is now also shown when the TV reports `app_id: TV/HDMI` (it was treated as an app and `channel_entity` / `channel_name_entity` were ignored).
- **README**: speaker card in the gallery (animated), gallery table rebuilt with three equal columns so it fits phone screens without side scrolling.

## 2026-11-08 — 1.20.1: console with real photos, new README

- **Appliance card, `artwork: console`**: real cut-out photos (WebP embedded as data URIs) for `ps3`, `ps4`, `ps5` (default), `xbox` and `switch`, with a glow that follows the state (on/off), instead of the 1.20.0 vector drawing. No option changes. Photo credits and licenses in [CREDITS.md](CREDITS.md).
- **README rewritten** (English + Italian): gallery of all cards, Marketplace/manual install, first card, FAQ, support. Long guides moved to `docs/` (`tv.md`, `frigo-tablet.md`, `lingue.md`).

## 2026-11-08 — 1.20.0: water heater card, UPS automations, TV pop-ups, 8 new animated artworks

- **New card `shc-water-heater-card`** (issue #15): water heaters and heat-pump water heaters (`water_heater.*` entities, e.g. Midea Eco Master). Animated drawing, current and target temperature, +/- buttons, operation modes, away mode, power on/off, optional power and energy sensors, charts, visual editor, it/en/nl. **New and so far tested only with simulated states: feedback welcome.** Guide with YAML example: [docs/scaldacqua.md](docs/scaldacqua.md).
- **UPS card: more automations** (discussion #13): new `automation_entities` list (strings or `{entity, name}`), each with its own switch in the settings; works together with the existing `automation_entity`, duplicates ignored. The visual editor can add several.
- **TV card: remote and TV guide in a pop-up** (discussion #9): `remote_mode: popup` and `epg_mode: popup` open the Samsung remote / the EPG guide in a pop-up from the large inline **Remote** and **EPG** buttons, so the card no longer grows. Default `inline` (unchanged). Esc, the close button or a click outside close it; the pop-up is also closed if the card is removed from the page.
- **8 new animated artworks** for the Appliance card (`artwork`): `pellet`, `printer3d`, `battery`, `watermeter`, `pool`, `blind`, `xmastree`, `console`. New options: `level_entity`, `level_attribute`, `level_max`, `level_invert` (level 0-100 that drives printer progress, battery charge, blind position, water flow) and `console_model` (`ps3`, `ps4`, `ps5`, `xbox`, `switch`). Without `level_entity` the level follows the power against `max_power`.
- New texts translated in it, en and nl.

## 2026-11-06 — 1.19.1: Dutch (nl)

- New language: **Dutch (nl)**, all texts of every card and visual editor, contributed by @hartliefHA (PR #14). With Home Assistant in Dutch the cards now appear in Dutch.
- Dates, months and weekdays follow the language too (`nl-NL`), as suggested in PR #14.

## 2026-11-06 — 1.19.0: translations (issue #11), phase 2 = all the other cards

- All remaining cards now follow the language of Home Assistant (`hass.locale.language`, fallback `hass.language`): Energy, NAS, Proxmox, Home Assistant server, FRITZ!Box, UPS, Zigbee, Climate, Heater, Fan, Boiler, Waste collection, Alexa (text, memo, web radio) and Notification Center, including their popups (Settings, Statistics, Charts, Consumption...), warnings and tooltips.
- The **visual editors** of every card (and the Appliance editor, helper creation messages) are translated too; the editor refreshes by itself once the language of Home Assistant is known.
- Dictionaries `it` and `en` (about 900 new keys in `SHC_I18N`); any other language falls back to English. Contributors: copy the `en` block, translate the values.
- With Home Assistant in Italian nothing changes (texts identical to 1.18.x). With English (or any other language) the cards now appear in English.
- Fix: the default Appliance name ("Elettrodomestico" / "Appliance") is now resolved when Home Assistant gives the language, not at configuration time.
- Dates and times in all cards use the Home Assistant language (`it-IT` for Italian, `en-GB` otherwise).
- Never translated: config keys, HA state/attribute values, your own labels and names, proper names (Proxmox, FRITZ!Box, Zigbee2MQTT...), dishwasher program names and preset radio stations.
- The Samsung remote keeps its own it/en strings (unchanged).

## 2026-11-06 — 1.18.0: translations (issue #11), phase 1 = Appliance card

- The Appliance card (`shc-appliance-clone-card`: labels, states, buttons, Settings / Consumption / Statistics / Charts popups, tooltips, chart popup, cost note) now follows the language of Home Assistant (`hass.locale.language`, fallback `hass.language`). Dictionaries: `it` and `en`; any other language falls back to English.
- **Note:** if your Home Assistant is in English (or any language other than Italian) the card now appears in English; with Home Assistant in Italian nothing changes.
- No language menu, no new YAML option, no localStorage: only the HA language is used.
- Dates, times and month/weekday names follow the same rule (Italian format for `it`, English otherwise).
- Config keys, HA state values and your own labels (`state_map`, `period_labels`, `on_label`, ...) are never translated.
- Other cards (Energy, NAS, Proxmox, Zigbee, Climate...) are still Italian: they come in a next phase.
- To add a language (e.g. `nl`): copy the `en` block inside `SHC_I18N` (near `shcT`, top of `smart-home-cards.js`) and translate the values. See README, "Translations".

## 2026-11-06 — 1.17.2: suggerimento "Ultimo ciclo" (issue #12)

- Card Elettrodomestici: senza `cycle_sensor` (e senza `side`) il riquadro "Ultimo ciclo" mostra il suggerimento "Imposta cycle_sensor e cycle_attrs per vedere l'ultimo ciclo" / "Set cycle_sensor and cycle_attrs to show the last cycle" al posto dei trattini. Frigo senza `side` ancora nascosto; configurazioni con `cycle_sensor` o `side` invariate.
- README: nuova sezione su `cycle_sensor` + `cycle_attrs` (end/duration/energy/cost) con esempio forno.
- L'editor visuale non ha i campi cycle_sensor/cycle_attrs (restano in YAML): nessuna modifica.

## 2026-11-03 — 1.17.1: fix #10

- fix #10: Consumi/cost panel now works with energy_stat_entity + cost_entity without auto_stats (auto_stats: false lo spegne; con period_attrs/cycle_sensor/week_rows resta la configurazione avanzata).

## 2026-11-03 — 1.17.0 (da provare): guida TV (EPG) nella card TV

- **Card TV (`artwork: tv`)**: nuove opzioni `epg_channels`, `channel_entity`, `channel_name_entity` (tutte facoltative; senza `epg_channels` la card e' identica a prima).
- Sotto la barra della potenza: riga del canale in onda ("5 · Canale 5", titolo, barra di avanzamento inizio-fine, "Dopo: titolo · ora"). Su HDMI o in un'app mostra il nome della sorgente o dell'app; se il canale non e' noto, "Scegli canale".
- Due pulsanti affiancati **Telecomando** ed **EPG**: si apre un pannello alla volta, un secondo tocco lo richiude. Con `epg_channels` il telecomando (`show_samsung_remote`) si apre da qui.
- Pannello EPG: canali in ordine LCN con titolo, mini barra e "dopo", canale corrente evidenziato in cima, canali senza guida in grigio; scheda "Prima serata" se esistono i sensori `sensor.<id>_program_primetime`. Toccando un canale la TV ci va (`media_player.play_media`, `media_content_type: channel`, SamsungTV Smart).
- Ripiego quando i sensori del canale non sono disponibili: ultimo canale scelto dalla card, salvato nel browser.
- **Loghi emittenti**: piccolo logo (30 px, fondo neutro) nella riga canale e in ogni riga dell'EPG. Sorgente automatica: entita' `image.<id>_icon` dell'integrazione XMLTV EPG (opzione "enable_channel_icons"); in alternativa campo facoltativo `logo` (URL) per canale in `epg_channels`. Nessun logo e' incluso nella card. Senza logo resta il numero.
- **Prima serata**: la scheda compare da sola se esistono i sensori `sensor.<id>_program_primetime` (opzione dell'integrazione, orario a scelta).
- Editor: sezione "Guida TV / EPG" (sensori canale ed elenco canali, una riga per canale).

## 2026-11-03 — 1.16.4 (da provare): costo piu' affidabile, frigo senza "Fine/Durata", telecomando a pulsante

- **Costo (statistiche automatiche)**: Oggi, Mese e Anno ora includono anche l'ora in corso (prima il costo restava indietro fino a un'ora, perche' le statistiche orarie arrivano solo a ora chiusa). Se manca il prezzo, sotto la tabella compare la spiegazione (campo non impostato, entita' inesistente o senza valore numerico) invece di un "—" muto. Il prezzo accetta anche la virgola e puo' essere un `sensor` o un `number`, non solo un `input_number`.
- **Controllo costi su tutte le card**: "Ultimo ciclo > Costo" e le righe periodo non mostrano piu' un falso "0.00 €" quando l'attributo del package e' vuoto (null); accettano la virgola. Clima: "Costo totale stimato" compare solo con un prezzo valido (prima 0,00 €). Energia: i valori `unavailable`/`unknown` sono "—". Caldaia: `gas_price` accetta la virgola.
- **Card NAS**: se il prezzo non e' leggibile mostra "—" invece di "0,00 €".
- **Frigorifero**: nell'editor spariscono Avanzamento programma e Fine prevista; sulla card non compaiono piu' "Fine" e "Durata" dell'ultimo ciclo (senza `cycle_sensor` sparisce tutto il riquadro). Le configurazioni con `side` o `cycle_sensor` restano com'erano.
- **TV**: nuova opzione `samsung_remote_position: button`: il telecomando resta chiuso e si apre dal pulsante `mdi:remote-tv` accanto all'ingranaggio. Predefinito `below` (come prima). Presente anche nell'editor.

## 2026-11-03 — 1.16.3: layout classico/centrato nell'editor di tutti gli elettrodomestici

- **Editor visuale**: la card Elettrodomestici (`custom:shc-appliance-clone-card`) ha ora il campo **Layout** (Classico / Centrato, chiave `layout`, predefinito Classico) per tutti i tipi: frigorifero, forno, friggitrice ad aria, microonde, piastra, piano a induzione, lavatrice, asciugatrice, lavastoviglie, TV e tablet. Prima si poteva scegliere solo il menu `layout_entity` nelle impostazioni avanzate.
- **Impostazioni (ingranaggio)**: se la card ha `layout_entity` ma nessuna sezione "Aspetto" scritta a mano, la riga **Layout** compare da sola (come sul Forno), anche sul frigorifero.
- Resa verificata con ogni layout su frigorifero, microonde, piastra, friggitrice, forno e piano a induzione. Senza `layout` nulla cambia (resta Classico).

## 2026-11-03 — 1.16.2: schermi stretti, immagine nell'editor, ventilatore RF/IR (#8, #3)

- **Telefono (#8)**: nelle card Proxmox, Server Home Assistant, NAS e Fritz!Box il valore non viene piu' troncato ("31/10/20…", "2026.…", "DSM 7.4.1-9008…"): se etichetta e valore non stanno insieme, il valore va a capo sotto l'etichetta. Il titolo va a capo invece di troncarsi e sotto i 480 px i pulsanti dell'intestazione sono un po' piu' piccoli. Su schermi larghi nulla cambia.
- **Nuovo `date_format`** (`full` predefinito, `short`, `auto`): data di avvio corta "31/10 09:41" (con `auto` solo sotto i 480 px) su Proxmox, Server HA e Fritz!Box.
- **Immagine personalizzata (#8)**: il campo "Immagine personalizzata" e' ora nell'editor visuale anche di Proxmox, Server Home Assistant, Fritz!Box ed Elettrodomestici (come NAS e UPS). Sugli elettrodomestici disegnati in vettoriale la tua immagine sostituisce il disegno.
- **Ventilatore (#3)**: nuova opzione `power_script_state` sulla card ventilatore (entita' che dice se e' acceso): con ventilatori RF/IR (Broadlink) il tasto diventa verde, le pale girano e `power_script_off` parte. Senza, la card ricorda l'ultimo comando inviato. Esempio completo in `docs/ventilatore.md`.

## 2026-11-02 — HACS default store

- Added to the HACS default store (hacs/default#11212): ora si installa cercando "Smart Home Cards" in HACS, senza repository personalizzato. Nessuna nuova versione.

## 2026-11-02 — 1.16.1: escape HTML dei valori provenienti da entita' e configurazione

- **Sicurezza**: nomi di sorgenti (`source_list` / `samsung_sources`), modalita' immagine/audio, nomi e colori delle app (`samsung_apps`) del telecomando Samsung, unita' di misura e colori delle serie nel popup grafico e la soglia della card Zigbee passano ora da `esc()` prima di finire in `innerHTML`. Un nome contenente markup viene mostrato come testo; il servizio chiamato riceve sempre il nome originale (l'attributo e' decodificato dal browser).
- Nessun cambiamento di funzione.

## 2026-11-01 — 1.16.0: telecomando Samsung sotto la card TV

- **Nuovo**: opzione `show_samsung_remote: true` (predefinita `false`) sulla card Elettrodomestici con `artwork: tv`: sotto la card compare lo stesso telecomando in stile Samsung di `samsung-tv-remote-card` (tasti, D-pad, volume/canali, tasti colorati, app, sorgenti, immagine/audio, Art Mode), integrato nel bundle (una sola risorsa, nessun conflitto se `samsung-tv-remote-card` e' installata: elemento interno `shc-samsung-remote`).
- Opzioni facoltative: `samsung_entity`, `samsung_remote_entity`, `samsung_turn_on_script`, `samsung_layout`, `samsung_apps`, `samsung_sources`, `samsung_show_picture|sound|art|ambient`. Editor visuale: spunta "Mostra il telecomando Samsung sotto la card" con i campi TV ed entita' remote.
- Requisiti: integrazione SamsungTV Smart (HACS) per tasti, app, immagine/audio e Art Mode; con la sola integrazione core funzionano i comandi `media_player` standard.
- Senza l'opzione la card TV resta identica a prima (verificato: nessun elemento aggiunto, nessun errore in console).
- Documentazione in README e `docs/elettrodomestici.md`, con screenshot.

## 2026-11-01 — 1.15.1: pulsante script piu' chiaro, ventilatore con script, immagine personalizzata, Volume 2 a scomparsa (#3, #7)

- **Pulsante di accensione con script** (elettrodomestici): resta acceso (verde) quando l'apparecchio e' acceso. Lo stato viene da `power_script_state` (nuovo, facoltativo), altrimenti dal consumo; con i telecomandi IR/RF senza feedback la card ricorda l'ultimo comando inviato, cosi' `power_script_off` parte davvero quando l'apparecchio e' acceso. Prima il tocco lanciava sempre lo script di accensione se il consumo era sotto la soglia di standby.
- **Ventilatore**: `power_script` / `power_script_off` anche sulla card ventilatore (il tasto power avvia lo script al posto del servizio `fan`).
- **Immagine personalizzata**: opzione `image` nelle card NAS, UPS, Fritz!Box, Server, Proxmox ed Elettrodomestici (percorso `/local/...` o URL). Con due UPS puoi usare due foto diverse.
- **NAS**: la riga Volume 2 compare solo se `sensors.vol2` e' configurato.
- Tutto facoltativo: senza le nuove opzioni le card restano come prima.

## 2026-10-31 — 1.15.0: quattro nuovi elettrodomestici e accensione con script (#3)

- **Nuovi disegni** nella card elettrodomestici: `airfryer` (friggitrice ad aria), `microwave` (microonde), `griddle` (piastra / bistecchiera), `induction` (piano a induzione), con animazione "in funzione" e icona nell'intestazione. Presenti nella lista dei tipi dell'editor.
- **Piano a induzione**: opzione `zones_entity` (numero di zone accese, oppure elenco come `1,3`): le zone non attive restano spente. Senza, si accendono tutte insieme.
- **Accensione con script** per tutti gli elettrodomestici: `power_script` (script, scena, pulsante... oppure azione diretta come `remote.send_command`) e `power_script_off` facoltativo. Pensata per apparecchi IR/RF (Broadlink). Pulsante nella testata, solo se impostato; campi anche nell'editor.
- Tutto è facoltativo e spento di default: le card esistenti restano identiche (verificato confrontando il markup prima e dopo su Lavatrice, Asciugatrice, Lavastoviglie, Frigo, Tablet, Forno e TV).
- Documentazione ed esempi YAML in `docs/elettrodomestici.md`; galleria nel README.

## 2026-10-31 — 1.14.2: stato della presa sulla card (#3)

- **Nuovo (#3)**: opzione `show_socket_state: true` (predefinita `false`) sulla card elettrodomestici: nella testata compare l'indicatore della presa `power_cut_entity` (verde "Presa ON", grigio "Presa OFF", "Presa non disponibile"); un tocco apre la scheda dell'interruttore. Funziona anche con `allow_power_cut` spento.
- Editor visuale: spunta "Mostra sulla card lo stato della presa", vicino a quella di "Togli corrente".
- Senza l'opzione la card resta identica a prima.

## 2026-10-31 — 1.14.1: climatizzatore, ventola e pulsanti (#4, #5, #6)

- **Fix (#4)**: i nomi delle velocità della ventola sono riconosciuti senza distinguere maiuscole e minuscole (`Auto`, `auto`, `Silence`...); aggiunto `silence` → "Silenzioso". Il click invia sempre il valore reale di `fan_modes`.
- **Fix (#4)**: l'automazione della ventola nel package `clima.yaml` usa il valore reale di `fan_modes`, quindi funziona sia con Daikin Onecta (`auto`) sia con la Daikin AC core (`Auto`).
- **Nuovo (#6)**: il pulsante **Consumi** compare solo se c'è almeno uno tra `power_entity`, `energy_entity` o `consumption.*`; il pulsante **Programmazione** solo se gli helper di `schedule` esistono in Home Assistant.
- **Nuovo (#6)**: opzioni `hide_consumi` e `hide_schedule` per nascondere i pulsanti a mano.
- **Nuovo (#5)**: opzione `fan_auto_in_schedule`: toglie la pillola "Ventola automatica" dalla card e mette l'interruttore nel popup Programmazione (che si apre anche senza helper di programmazione).
- Editor visuale: aggiunte le tre opzioni. Tutte sono spente di default.
- Nota aggiornamento: se usavi la card senza sensori di consumo o senza helper di programmazione, i due pulsanti ora non compaiono più (prima aprivano un popup vuoto).

## 2026-10-30 (2) — 1.14.0: Tablet a muro e "Togli corrente" facoltativo

- **Elettrodomestici, nuovo disegno `tablet`**: tablet a muro con lo schermo che si illumina quando lo stato è "running"; nell'editor visuale compare come "Tablet a muro".
- **`side.rows`**: nuove icone `sun`, `user`, `home` e nuovo formato `ratio` (con `max`, es. 60 su 255).
- **Nuove opzioni**: `hide_consumi: true` (nasconde il pulsante Consumi per dispositivi senza energia) e `bar_color` (colore fisso della barra principale, es. batteria verde).
- **Opzione "Togli corrente" (solo per chi la vuole)**: `power_cut_entity` (uno `switch.*`) e `allow_power_cut` (predefinito `false`). Nell'editor c'è la sezione "Togli corrente (facoltativo)"; la spunta resta attiva solo dopo una conferma "Sei sicuro?" e ogni spegnimento chiede di nuovo conferma. Non viene mai offerta per il disegno `fridge` né per entità frigo/freezer. Non è attiva in nessun esempio.
- Le modifiche sono solo aggiuntive: le altre card non cambiano.
- README: nuove sezioni Frigo e Tablet a muro con immagine ed esempio YAML.

## 2026-10-30 — 1.13.0: Frigorifero e Samsung con LocalThings

- **Elettrodomestici, nuovo disegno `fridge`**: frigorifero (anche come icona piccola). Per un frigo non smart basta la presa con misura dei Watt.
- **Elettrodomestici, nuova opzione `side`**: al posto del riquadro "Ultimo ciclo" un pannello tuo con fino a 4 righe (`label`, `icon`, `entity`, `format`: `onoff`, `hours`, `count`, `percent`, `kwh`, `since`). Vale per qualunque disegno. Nell'editor visuale c'è anche "Frigorifero" tra i tipi.
- **Niente interruttore on/off sul frigo, di proposito**: così un tocco sbagliato non può togliere corrente al cibo. Spiegato nella guida.
- **Package `frigo.yaml`**: compressore acceso dedotto dai Watt (con attese anti-picco) e contatori di oggi (tempo acceso, avvii).
- **Elettrodomestici Samsung con LocalThings** (asciugatrice e simili): pulsanti Avvia/Pausa/Stop (`controls.start_button`, `pause_button`, `running_entity`...), `select` extra, formati `minutes`/`hms`, `zero_label`, `hide_values`, avvisi `warn_entities` con `not_states` e `{state}` nell'etichetta.
- Guida [docs/elettrodomestici.md](docs/elettrodomestici.md): nuove sezioni "Frigorifero non smart" e "Samsung con LocalThings".

## 2026-10-28 (2) — 1.12.1: banda della potenza solo se c'è il sensore

- **Elettrodomestici**: la banda "Potenza attuale" non compare più se manca il sensore in Watt (`power_entity` vuoto o entità che non esiste): niente più barra ferma a 0 W. Nuova opzione `hide_power: true` (anche nell'editor) per toglierla comunque. `power_entity` non è più obbligatorio se c'è `live.state_entity`: chi ha un elettrodomestico smart senza presa con misura usa solo lo stato.
- **Climatizzatore**: stessa logica, opzione `hide_power` anche nell'editor (sezione Consumi).
- **Fix Climatizzatore, Stufetta, Ventilatore, Caldaia**: le righe senza sensore configurato (umidità, esterna, pressione...) restavano visibili con "—" invece di sparire.
- **README**: immagini e link con indirizzi completi, così anche la pagina della card dentro HACS mostra la galleria come su GitHub.

## 2026-10-28 — 1.12.0: Climatizzatore, pulsante "Ventola automatica"

- **Climatizzatore**: nuovo campo `fan_auto_entity` (anche nell'editor visuale). Sulla card compare il pulsante **Ventola automatica / Ventola manuale** che apre il popup Ventola, dove un interruttore accende o spegne l'automazione. Scegliere a mano una velocità spegne l'automatica da sola. Nuovo campo facoltativo `fan_auto_hint` per il testo di spiegazione.
- **Package `clima.yaml`**: aggiunti `input_boolean.clima_salone_ventola_automatica` e l'automazione che porta la ventola su auto, 3 o 2 a seconda di quanto manca alla temperatura impostata (cambia la ventola solo quando serve).
- Guida [docs/clima.md](docs/clima.md) aggiornata.

## 2026-10-28 — 1.11.3: card Proxmox, logo giusto e campi mancanti nell'editor

- **Fix Proxmox**: senza `artwork` la card mostrava il logo di Home Assistant al posto di quello di Proxmox; ora il predefinito è `proxmox` (anche quando la card viene aggiunta dal selettore). Segnalato nella issue #2.
- **Editor Proxmox**: aggiunti i campi che mancavano nella sezione Sistema: stato del nodo, contenitori attivi, VM attive, ultimo avvio, RAM usata, RAM libera e disco local-lvm. Prima si potevano impostare solo da YAML.
- Guida [docs/proxmox.md](docs/proxmox.md) aggiornata.

## 2026-10-26 (2) — 1.11.2: galleria animata nel README, due fix

- **README**: nuova sezione "Tutte le card a colpo d'occhio" con tutte le 17 card; elettrodomestici, climatizzatore, stufetta, ventilatore, caldaia e rete Zigbee sono GIF animate, accese e in funzione.
- **Fix Caldaia**: quando l'acqua calda era in uso, la card scriveva "In uso" sopra tutta la card e la svuotava (la classe di stato aveva lo stesso nome della riga Acqua).
- **Fix Stufetta, Ventilatore, Caldaia** con "Nascondi se scollegata": quando il dispositivo tornava online, il badge di stato in alto restava vuoto fino al ricaricamento della pagina.

## 2026-10-26 — Alexa: scegli su quali dispositivi annunciare, card per card

- **Energia, Elettrodomestici, FritzBox**: nell'ingranaggio ci sono 4 nuovi interruttori **↳ Alexa Salone, Bagno, Cameretta, Camera**. Ogni card annuncia solo sulle Alexa accese, anche più di una (es. Energia su salone e bagno, Lavatrice solo in salone). Niente più elenco di dispositivi da scrivere nel package.
- Script condiviso `notifica_vocale_alexa`: nuovo campo facoltativo `flag_dispositivi`. Guida: [docs/centro-notifiche.md](docs/centro-notifiche.md#scegliere-su-quali-alexa-annunciare).
- **Energia, avviso soglia**: Alexa lo dice **una volta sola** (volume 0,5) e poi aspetta almeno 5 minuti, invece di ripeterlo ogni 10 secondi finché il consumo resta alto.
- Nessuna modifica al file JS delle card: aggiornare i package e le `settings_sections`.

## 2026-10-25 (9) — 1.11.1: barre staccate anche su Climatizzatore e Stufetta

- **Climatizzatore e Stufetta**: la barra dell'umidità è staccata di qualche pixel da quella della temperatura, come nella Caldaia: si legge meglio (opzione `bar_gap: false` per attaccarle).
- **Climatizzatore**: l'aria animata segue la **potenza** della presa: rallenta e sbiadisce quando l'inverter modula, e sotto `idle_power` (60 W) la card mostra "In pausa". Utile con le integrazioni che non dicono se il compressore è fermo (es. Daikin Onecta).
- Guide: specificato che le immagini dei dispositivi sono animate (si muovono come una GIF e cambiano colore in base a temperatura, stato e livello).

## 2026-10-25 (8) — 1.11.0: comandi a distanza per gli elettrodomestici, scale più fitte

- **Elettrodomestici, comandi a distanza** (nuovo campo `controls`, facoltativo): riquadro **Comandi** sotto il riepilogo con Avvia, Stop (doppio tocco per sicurezza), Accendi/Spegni e il popup **Programmi** con programmi, opzioni e avvio ritardato (Subito…8 h). Pensato per Home Connect (esempio reale: lavastoviglie Bosch, nomi dei programmi in italiano); con `machine_select` anche Avvia/Pausa/Riprendi/Stop per gli elettrodomestici SmartThings che li accettano. Se il controllo remoto è spento sulla macchina, i pulsanti si disattivano e la card spiega cosa fare. Guida: [docs/elettrodomestici.md](docs/elettrodomestici.md), sezione "Comandi a distanza".
- **Climatizzatore, Stufetta, Caldaia**: la scala della temperatura ha un numero **per ogni grado** (nuova opzione `scale_step` per tornare a 2 o più). Il Ventilatore resta com'era.
- **Caldaia**: la barra della pressione è **staccata** di qualche pixel da quella della temperatura e ha un numero **ogni 0,25 bar** (nuova opzione `pressure_scale_step`).
- Schermate aggiornate di Climatizzatore, Stufetta e Caldaia.

## 2026-10-25 (7) — 1.10.0: Stufetta, Ventilatore, Caldaia e caloriferi

- **Nuova card 🔥 Stufetta** (`shc-heater-card`): stufetta animata con onde di calore per livello (H1/H2/H3), gauge dritta con temperatura e umidità della stanza e cursore della soglia, pulsanti per livelli, solo ventilazione e oscillazione, popup gestione automatica, impostazioni e stato. Esempio reale: Dreo 314S (DR-HSH004S), ma va bene qualsiasi stufetta `climate.`. Package [`packages/stufetta.yaml`](packages/stufetta.yaml): ogni accensione parte in H3, alla soglia della stanza scende a H1/H2. Guida: [docs/stufetta.md](docs/stufetta.md).
- **Nuova card 🌀 Ventilatore** (`shc-fan-card`): pale animate con velocità reale, testa che oscilla, nebbia e luce colorata; velocità con − e +, modalità, oscillazione, nebbia; popup programmazione (una tantum, giorno/notte, timer), nebbia e luce, stato e manutenzione (serbatoio, ore di pulizia). Esempio reale: Dreo DR-HEC005S con nebulizzatore, ma va bene qualsiasi ventilatore `fan.`. Package [`packages/ventilatore.yaml`](packages/ventilatore.yaml). Guida: [docs/ventilatore.md](docs/ventilatore.md).
- **Nuova card 🔥 Caldaia e caloriferi** (`shc-boiler-card`): caldaia animata collegata a un calorifero (fiamma, mandata/ritorno, acqua calda), gauge dritta con temperatura di casa e impostata (anche da spenta) e **barra della pressione impianto** con lancetta; − e + anche a caldaia spenta; modalità, programmi P1/P2/P3, camino; **consumi gas** oggi/settimana/mese/anno e storico per giorni, settimane, mesi e anni, divisi riscaldamento e acqua calda, dalle statistiche a lungo termine. Esempio reale: Baxi Luna Classic con Remeha Home, ma va bene qualsiasi caldaia o termostato `climate.`. Package [`packages/caldaia_remeha.yaml`](packages/caldaia_remeha.yaml) (gas stimato, avvisi pressione e caldaia offline; i sensori del gas non tornano a 0 quando la caldaia è offline, così le statistiche non contano doppio). Guida: [docs/caldaia.md](docs/caldaia.md).
- **Nascondi se scollegata** (stufetta, ventilatore, caldaia): casella nell'editor e interruttore nel popup ℹ️. Quando il dispositivo non risponde la card diventa una striscia bassa "… offline"; toccandola si riapre la card o si toglie l'opzione. La scelta fatta dal popup viene salvata nella dashboard.
- Editor visuale: nuovo tipo di campo sì/no (casella).

## 2026-10-25 (6) — 1.9.1: Climatizzatore con split animato e gauge dritta

- **Card ❄️ Climatizzatore**: in alto lo **split che soffia aria**, animato come il cestello di lavatrice e lavastoviglie. Aria blu in raffrescamento, arancio in riscaldamento, azzurra in deumidifica, grigia in ventilazione; tenue quando la stanza è in temperatura, ferma e grigia da spento. Sul display la temperatura impostata.
- **Gauge dritta** al posto di quella rotonda: scala della temperatura sopra con lancetta della stanza e **lancetta rossa della temperatura impostata** (anche a clima spento), barra dell'umidità 2 px sotto con la sua scala e lancetta. Lancette bianche con contorno nero, leggibili su ogni colore.
- **− e + funzionano anche a clima spento**: imposti la temperatura prima di accenderlo.
- Tolta la barra "Umidità stanza" in fondo (è già nella gauge dritta).
- Nuove opzioni `hero` (`immagine` o `gauge` per la gauge rotonda di prima, ora con lancette a contorno nero), `segments` e `humidity_segments`. Non serve più gauge-card-pro.
- Guida aggiornata con schermate chiaro/scuro, riscaldamento e spento: [docs/clima.md](docs/clima.md).

## 2026-10-25 (5) — 1.9.0: nuova card Climatizzatore

- **Nuova card ❄️ Climatizzatore** (`shc-climate-card`), layout centrato di default. Al posto della foto c'è la **gauge** (gauge-card-pro, oppure la gauge standard di HA se non è installata) con temperatura stanza, temperatura impostata e umidità.
- Comandi diretti: accendi/spegni (riaccende nell'ultima modalità), − e + con più tocchi raccolti in un solo comando, un pulsante per ogni modalità supportata, alette oscillanti.
- Riquadro Clima: stanza, impostata, umidità, esterna, potenza, consumo di oggi. Barre potenza e umidità.
- **⚙️ Programmazione** accensione/spegnimento una tantum, con pillola sulla card quando è attiva. **📊 Consumi** freddo/caldo per giorno, settimana, mese, anno. **🌀 Ventola e alette** con preset. **ℹ️ Stato e diagnostica** con sensori di errore che fanno scattare l'avviso.
- Nuovo package [`packages/clima.yaml`](packages/clima.yaml) (sintassi aggiornata `triggers:`/`actions:`). Editor visuale incluso.
- Guida: [docs/clima.md](docs/clima.md).

## 2026-10-25 (4) — 1.8.3: ordine elenco Zigbee

- Elenco Dispositivi della card Rete Zigbee: di nuovo prima gli offline, poi in ordine alfabetico.

## 2026-10-25 (3) — 1.8.2: abbinamento con conto alla rovescia e ripetitore scelto

- **Card Rete Zigbee, ⚙️ Abbinamenti**: conto alla rovescia grande con barra del tempo che resta (anche nel badge della card), pulsante Ferma abbinamento.
- **Abbina tramite**: si può forzare l'abbinamento da un ripetitore preciso o dal solo coordinatore, come nell'interfaccia di Zigbee2MQTT.
- Elenco Dispositivi in **ordine alfabetico** (gli offline restano evidenziati in rosso e filtrabili).
- Package: nuovo `sensor.zigbee_abbinamento_fine` (MQTT, da `bridge/info`). Nuove opzioni card `pairing_end_entity` e `base_topic`.

## 2026-10-25 (2) — 1.8.1: fix card Rete Zigbee

- **Fix**: il pulsante "Apri" dell'interfaccia Zigbee2MQTT portava alla dashboard principale. Il percorso giusto è quello del pannello nel menu laterale (es. `/45df7312_zigbee2mqtt`): le versioni recenti di Home Assistant non hanno più `/hassio/ingress/...`. Esempio e guida corretti.
- La colonna a destra non ripete più l'LQI medio, già mostrato nella barra "Segnale medio".

## 2026-10-25 — 1.8.0: nuova card Rete Zigbee

- **Nuova card 📡 Rete Zigbee** (`shc-zigbee-card`) per Zigbee2MQTT, stessa grafica della card FritzBox. Simbolo Zigbee animato: verde con onde radio se tutto è online, rosso che trema se qualcosa è offline. A destra LQI medio, LQI minimo con il nome del dispositivo, dispositivi a rete e a batteria; la riga "Batt. bassa" compare solo sotto soglia.
- **⚙️ Abbinamenti**: permit join, ultimi dispositivi abbinati, versione e stato del bridge, livello di log, apertura dell'interfaccia Zigbee2MQTT, riavvio con conferma.
- **📊 Dispositivi**: elenco con foto (cartella locale, altrimenti dal sito di Zigbee2MQTT), filtri, ricerca, tacche del segnale, batteria, "offline da". Scheda del singolo dispositivo con esclusione da conteggio e avvisi.
- **🔋 Segnale e batterie**: classifiche dal più debole e dalla più scarica.
- **🔔 Notifiche**: avvisi offline/nuovi dispositivi/batteria bassa, soglie, fascia oraria con riepilogo all'apertura, già avvisati, esclusi, notifica di prova.
- **📈 Grafici**: dispositivi online, LQI medio, LQI minimo.
- Nuovo package [`packages/centro_controllo_zigbee.yaml`](packages/centro_controllo_zigbee.yaml): sopravvive a riavvii e ricaricamenti senza avvisi doppi. Editor visuale incluso.
- Guida: [docs/zigbee.md](docs/zigbee.md).

## 2026-10-20 — 1.7.0: card Alexa configurabili senza toccare il JS

- **Alexa Memo e Alexa WebRadio**: speaker, stazioni, script aggiungi/rimuovi e giorni della sveglia non sono più scritti dentro `smart-home-cards.js`. Sono nuove opzioni della card: `devices` (Memo), `speakers`, `stations`, `image_path`, `add_script`, `remove_script`, `alarm_days` (WebRadio). Prima andavano modificati nel file JS, e ogni aggiornamento HACS cancellava le modifiche.
- I valori di prima restano come **default**: chi usa i miei package non deve cambiare niente, la card appare identica.
- **Editor visuale**: gli elenchi (speaker, stazioni, giorni) si modificano con Aggiungi/Rimuovi, ogni elenco si apre con "mostra/modifica".
- Uno speaker senza `name` prende il friendly name dell'entità.
- I chip degli speaker della WebRadio lanciano gli script con `script.turn_on`, come la card Alexa Annuncio Testo.
- **README e guida installazione**: per HACS si parte dalla ricerca diretta di "Smart Home Cards"; il repository personalizzato resta come alternativa.
- **Guida Elettrodomestici**: esempio completo di `week_rows` (sezione "Ultimi 7 giorni") e controllo delle statistiche per `energy_stat_entity`.
- Guida aggiornata: [docs/alexa.md](docs/alexa.md#speaker-stazioni-e-sveglia-personalizzati).

## 2026-09-26 (2) — Fix grafici: etichette a 4 cifre tagliate su tutte le card

- **Fix**: nel popup Grafici, quando un valore arrivava a 4 cifre (es. "2623"), l'etichetta sull'asse veniva tagliata — il margine era stato allargato solo per la card Energia (che mostra spesso Watt a 4 cifre), le altre 8 card con grafico (Elettrodomestici, Server HA, NAS, UPS, Proxmox) avevano ancora il margine vecchio. Ora tutte usano lo stesso margine più largo. Verificato dal vivo sul grafico CPU/RAM della card NAS, nessuna rottura visiva.

## 2026-09-26 — Nuova card Alexa WebRadio

- **Nuova card 📻 Alexa WebRadio** (`shc-alexa-webradio-card`): stazioni TuneIn e playlist Spotify/Amazon Music/Deezer su Alexa multiroom, in griglie con logo piccolo (non a schermo intero) raggruppate per servizio. Volume, chip per aggiungere/rimuovere gli speaker dal gruppo, e due pulsanti dedicati per **Sveglia programmata** (due orari, giorni della settimana) e **Volume ridotto automatico** allo spegnimento, entrambi in popup senza uscire dalla card.
- **Editor visuale** incluso fin dal primo rilascio (nessun giro extra come per le prime due card Alexa).
- Nuovo package: [`packages/alexa_webradio.yaml`](packages/alexa_webradio.yaml) — ripulito dal tag di versione legacy `[V1.8]` e dalla sintassi `service:` (ora `action:`), stessa logica del package originale.
- Guida aggiornata: [docs/alexa.md](docs/alexa.md).

## 2026-09-25 — Fix ingranaggio vuoto, guida installazione più chiara

- **Fix**: l'icona ⚙️ Impostazioni, su una card senza `settings_sections`/`actions` configurati (il caso di chi installa via HACS e usa solo l'editor visuale), si apriva mostrando un popup vuoto — facile scambiarlo per "non fa niente". Ora mostra "Nessuna impostazione configurata" su tutte le card che ne erano prive (Elettrodomestici, FritzBox, Server HA, NAS, Energia, Differenziata, Proxmox — la UPS lo aveva già).
- **Guida installazione** (`docs/installazione.md`): aggiunta una checklist esplicita, per punti, di cosa resta comunque da fare a mano dopo l'installazione via HACS (foto prodotto, package reale, blocco `settings_sections`/`actions`, layout) — prima queste info erano solo accennate ed era facile perdersele, pensando che la card fosse rotta invece che semplicemente non ancora configurata. Aggiornato anche l'elenco delle guide (mancavano Differenziata, Centro Notifiche, Alexa) e corretto un link a un repo vecchio per Energia Casa.
- Ogni guida di card ripete ora lo stesso avviso nella propria sezione "🖊️ Editor visuale": l'editor a campi non può scrivere `settings_sections`/`actions`, va sempre incollato a mano dal blocco YAML della guida.

## 2026-09-24 — Nuove card Alexa: Annuncio Testo e Memo

- **Nuova card 🔊 Alexa Annuncio Testo** (`shc-alexa-text-card`): scrivi un messaggio, scegli lo speaker (o il gruppo multiroom) e il volume, e lo riproduci con un tap su Alexa. Guida: [docs/alexa.md](docs/alexa.md).
- **Nuova card 🔊 Alexa Memo** (`shc-alexa-memo-card`): fino a **4 promemoria vocali indipendenti**, ciascuno con proprio testo, intervallo di date + orario (oppure singola data/ora se non ripetuto) e dispositivi Alexa scelti con chip multi-selezione nell'editor visuale. Campo **Persona** opzionale: se all'orario previsto la persona non è in casa, l'annuncio resta "in sospeso" e viene fatto pochi minuti dopo il suo rientro. Uno stepper sulla card Memo 1 sblocca progressivamente Memo 3 e 4.
- Entrambe riusano il motore vocale condiviso di `centro_notifiche_alexa.yaml`, lo stesso già usato da Raccolta Differenziata e dalle altre card.
- **Editor visuale** per entrambe (mancava al primo rilascio): "Aggiungi card" ora propone i campi giusti invece di lasciarti scrivere lo YAML a mano.
- Nuovi package: [`packages/alexa_text.yaml`](packages/alexa_text.yaml) (rinominato da `alexa_google_text.yaml`, "Google" era solo un residuo di naming legacy), [`packages/memo_alexa.yaml`](packages/memo_alexa.yaml).
- Card **NAS Synology**: aggiunto il campo **Stato di sicurezza** all'editor visuale — era già gestito dalla card e documentato, ma non selezionabile senza scrivere YAML a mano.
- Schermate reali (tema scuro) per entrambe le card Alexa, i loro editor e il popup "Come funziona" del memo.

## 2026-09-21 (sera) — Grafici, Statistiche e differenziata

- **Nuovo pulsante 📈 Grafici** su tutte le card: finestra con il grafico storico in **24 h · 7 gg · 30 gg · da … a** (date a scelta), che si adatta a PC e smartphone, con linea guida, minimo/media/massimo e curve sovrapposte dove serve. Guida: [docs/grafici.md](docs/grafici.md).
- I grafici usano la **cronologia reale** fino a 8 giorni (per la potenza si tiene il **picco**: 2 100 W restano 2 100 W, non una media di 400 W) e le statistiche a lungo termine oltre; linea a gradini come lo stato reale.
- Toccando le barre delle card (CPU, batteria, carico, circuiti…) si apre lo stesso grafico, non più solo le ultime 6 ore.
- Card **Elettrodomestici**: nel popup **Statistiche** (barrette) tornano tutti i consumi: per periodo (oggi, ieri, mese, anno…), ultimi 7 giorni e i due istogrammi (mese e anno).
- Card **FritzBox**: la campanella degli aggiornamenti è l'ultimo pulsante a destra; le due barre live hanno il fondoscala uguale alla **portante agganciata + 2%** (download con il download, upload con l'upload).
- Card **Raccolta differenziata**: nuovo pulsante **Tipi di raccolta** (l'ultimo a destra) per scrivere a mano i tipi di rifiuto del proprio comune; Impostazioni in finestra nativa. Guida, package e schermate nel repo dedicato [ha_garbage](https://github.com/Simonz82/ha_garbage).
- Tutte le schermate della guida sono rifatte (classico/centrato, chiaro/scuro).

## 2026-09-21 — Layout classico / centrato

- Ogni card si può mostrare in **due layout**: *classico* (foto a sinistra) o *centrato* (foto al centro in alto, informazioni su due colonne, poi le barre). La scelta è la prima riga **Layout** delle Impostazioni di ogni card. Nuova guida: [docs/layout.md](docs/layout.md), con le schermate di tutte le card nei due layout e nei due temi.
- Nuovo package [`packages/layout_schede.yaml`](packages/layout_schede.yaml) con un menu (`input_select`) per card; nuovi parametri della card `layout_entity` e `layout`.
- Le righe `input_select` dei popup nativi sono ora un vero **menu a tendina** (prima aprivano la finestra dell'entità).
- Card **Energia Casa**: divisione 40/60 nel layout centrato; in "Top consumo" si accorcia il nome del dispositivo e mai i watt; grafico delle barre più alto con etichette dell'asse non tagliate.
- Card **UPS**: la riga del layout sta in una sezione "Aspetto" a parte.
- Rimossi dal codice e dalle descrizioni i riferimenti a un'altra famiglia grafica: le card sono semplicemente "card per Home Assistant".

## 2026-09-17 — Prima pubblicazione

- Pubblicate le 7 card: Elettrodomestici, Energia Casa, FritzBox, Server Home Assistant, NAS Synology, Proxmox, UPS.
- Guida di installazione passo-passo, guida al mini-linguaggio del popup Impostazioni (`settings_sections`), guida al pattern di notifiche personalizzate push/Alexa.
- Documentazione campo per campo per ogni card, con esempi YAML completi.

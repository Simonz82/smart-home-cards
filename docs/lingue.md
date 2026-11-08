# 🌍 Lingue / Languages

**EN:** **all cards** (Appliances, Energy, NAS, Proxmox, Home Assistant server, FRITZ!Box, UPS, Zigbee, Climate, Heater, Fan, Boiler, Waste collection, Alexa, Notification Center) and their **visual editors** now follow the language of Home Assistant automatically (`it` and `en`; any other language shows English). There is no language option to set. With Home Assistant in Italian nothing changes.

**Available languages:** Italian (`it`), English (`en`), Dutch (`nl`, thanks to @hartliefHA). Any other language falls back to English.

**Contribute a language:** open `smart-home-cards.js`, find `const SHC_I18N = { it: {...}, en: {...} }` (just above the `shcT()` function), copy the whole `en` block, rename it with the two-letter language code (for example `nl`), translate the **values** only (keep the keys and the `{1}`, `{2}`, `{value}` placeholders) and send a pull request. No other change is needed: missing keys fall back to English.

**IT:** **tutte le card** e i loro **editor visuali** seguono da soli la lingua di Home Assistant (`it` ed `en`; con altre lingue mostrano l'inglese). Non c'è nessuna opzione da impostare; con Home Assistant in italiano non cambia nulla. Per aggiungere una lingua: copia il blocco `en` in `SHC_I18N`, traduci solo i valori e apri una pull request.

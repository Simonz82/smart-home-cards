# smart-home-cards

**Home Assistant Lovelace cards: beautiful, complete, one file. / Card Lovelace belle e complete per Home Assistant, in un solo file.**

[![HACS Default](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/default)
[![Release](https://img.shields.io/github/v/release/Simonz82/smart-home-cards)](https://github.com/Simonz82/smart-home-cards/releases/latest)
[![License: MIT](https://img.shields.io/github/license/Simonz82/smart-home-cards)](LICENSE)
[![Validate](https://github.com/Simonz82/smart-home-cards/actions/workflows/validate.yml/badge.svg)](https://github.com/Simonz82/smart-home-cards/actions/workflows/validate.yml)

[![Open in Marketplace (HACS)](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Simonz82&repository=smart-home-cards&category=plugin)

**[🇬🇧 English](#english) · [🇮🇹 Italiano](#italiano)**

> English first because the project is used worldwide (HACS, Dutch and English users); the Italian version below is complete and identical in content. / Inglese per primo perché il progetto è usato in tutto il mondo; la versione italiana qui sotto è completa e identica nei contenuti.

---

<a id="english"></a>
## 🇬🇧 English

### What is it?
Beautiful, complete Lovelace cards for Home Assistant. One JavaScript file, 18 cards, a built-in visual editor (no YAML needed), a settings pop-up and a statistics pop-up on every card. Works on desktop and phone.

Tap a card to open its guide.

<table>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavatrice.gif" width="220" alt="🧺 Washing machine"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Washing machine</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/asciugatrice.gif" width="220" alt="🧺 Dryer"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Dryer</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavastoviglie.gif" width="220" alt="🍽️ Dishwasher"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍽️ Dishwasher</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/forno.gif" width="220" alt="🍗 Oven"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍗 Oven</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/frigo.gif" width="220" alt="🧊 Fridge"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md">🧊 Fridge</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/friggitrice.gif" width="220" alt="🍟 Air fryer"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🍟 Air fryer</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/microonde.gif" width="220" alt="📡 Microwave"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">📡 Microwave</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/piastra.gif" width="220" alt="🥩 Griddle"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🥩 Griddle</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/induzione.gif" width="220" alt="🍳 Induction hob"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🍳 Induction hob</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/pellet.gif" width="220" alt="🔥 Pellet stove"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🔥 Pellet stove</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/stampante3d.gif" width="220" alt="🖨️ 3D printer"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🖨️ 3D printer</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/batteria.gif" width="220" alt="🔋 Battery"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🔋 Battery</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/contatore-acqua.gif" width="220" alt="💧 Water meter"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">💧 Water meter</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/piscina.gif" width="220" alt="🏊 Pool pump"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🏊 Pool pump</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tapparella.gif" width="220" alt="🪟 Roller blind"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🪟 Roller blind</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/albero-natale.gif" width="220" alt="🎄 Christmas tree"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🎄 Christmas tree</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/console.gif" width="220" alt="🎮 Game console"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🎮 Game console</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tablet.gif" width="220" alt="📱 Wall tablet"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md">📱 Wall tablet</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/energia.gif" width="220" alt="⚡ Home Energy"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md">⚡ Home Energy</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/clima.gif" width="220" alt="❄️ Air conditioner"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md">❄️ Air conditioner</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/stufetta.gif" width="220" alt="🔥 Heater"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md">🔥 Heater</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/ventilatore.gif" width="220" alt="🌀 Fan"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md">🌀 Fan</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/caldaia.gif" width="220" alt="🔥 Boiler and radiators"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md">🔥 Boiler and radiators</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/scaldacqua.gif" width="220" alt="🚿 Water heater"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md">🚿 Water heater</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/fritz.gif" width="220" alt="📶 FRITZ!Box"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md">📶 FRITZ!Box</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/zigbee.gif" width="220" alt="📡 Zigbee network"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md">📡 Zigbee network</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/server.gif" width="220" alt="🖥️ Home Assistant server"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md">🖥️ Home Assistant server</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/nas.gif" width="220" alt="💾 Synology NAS"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md">💾 Synology NAS</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/proxmox.gif" width="220" alt="🖧 Proxmox"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md">🖧 Proxmox</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/ups.gif" width="220" alt="🔋 UPS"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md">🔋 UPS</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/differenziata.gif" width="220" alt="♻️ Waste collection"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md">♻️ Waste collection</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/notifiche.gif" width="220" alt="🔔 Notification center"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md">🔔 Notification center</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-testo.gif" width="220" alt="🔊 Alexa text announce"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa text announce</a></b></td>
  </tr>
  <tr>
    <td colspan="1"></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-memo.gif" width="220" alt="🔊 Alexa memo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa memo</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-webradio.gif" width="220" alt="📻 Alexa web radio"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">📻 Alexa web radio</a></b></td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv.gif" width="220" alt="📺 TV"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">📺 TV</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv-telecomando.gif" width="220" alt="📺 TV + Samsung remote"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md">📺 TV + Samsung remote</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv-epg.gif" width="220" alt="📺 TV + TV guide (EPG)"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md">📺 TV + TV guide (EPG)</a></b></td>
  </tr>
</table>

<sub>All previews are animated and show the cards switched on, with sample data.</sub>

**What's new?** See the [CHANGELOG](CHANGELOG.md) and the [releases](https://github.com/Simonz82/smart-home-cards/releases).

### Install
**With the Marketplace (recommended).** From Home Assistant 2026.11 HACS is the built-in **Marketplace** (before that, it is the HACS menu).
1. Press the **Open in Marketplace (HACS)** button above, or open **Settings > Marketplace** and search for **Smart Home Cards**.
2. Press **Download**. Updates then arrive by themselves.
3. Reload the browser page (Ctrl+F5).

**By hand.**
1. Download [`smart-home-cards.js`](smart-home-cards.js) and copy it to `/config/www/`.
2. Go to **Settings > Dashboards > (three dots) > Resources > Add resource**. URL `/local/smart-home-cards.js`, type **JavaScript module**.
3. Reload the browser page (Ctrl+F5).

Full step-by-step guide: [docs/installazione.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/installazione.md) (Italian).

### First card
Open a dashboard, press **Edit > Add card**, search for the card by name and fill in the fields. Or, in YAML:

```yaml
type: custom:shc-appliance-clone-card
name: Washing machine
artwork: washer
power_entity: sensor.washing_machine_power   # your own power sensor, in watts
threshold_run: 5                             # above this = "running"
```

Replace the entity with yours. Every card has a guide with all options, examples and ready-made packages.

### Guides, one per card
- [Appliances (washer, dryer, dishwasher, oven, TV, fridge and more)](https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md)
- [Home Energy](https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md)
- [Air conditioner](https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md)
- [Heater](https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md)
- [Fan](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md)
- [Boiler and radiators](https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md)
- [Water heater](https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md)
- [FRITZ!Box](https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md)
- [Zigbee network](https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md)
- [Home Assistant server](https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md)
- [Synology NAS](https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md)
- [Proxmox](https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md)
- [UPS](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md)
- [Waste collection](https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md)
- [Notification center](https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md)
- [Alexa (text, memo, web radio)](https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md)

Also: [layouts](https://github.com/Simonz82/smart-home-cards/blob/main/docs/layout.md), [charts](https://github.com/Simonz82/smart-home-cards/blob/main/docs/grafici.md), [custom notifications](https://github.com/Simonz82/smart-home-cards/blob/main/docs/notifiche-personalizzate.md), [TV guide and remote](https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md).

### Languages
All cards and their editors follow the language of Home Assistant: **Italian, English, Dutch** (thanks to @hartliefHA). Any other language shows English. Nothing to configure. Want to add a language? See [docs/lingue.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/lingue.md).

### FAQ and common problems
- **The card shows "Custom element doesn't exist".** The resource is missing. Add `/local/smart-home-cards.js` (manual) or check that the download finished (Marketplace). Then reload.
- **I installed or updated it but nothing changes.** Clear the browser cache or press **Ctrl+F5**. On the phone app: Settings > Companion app > Troubleshooting > Reset frontend cache.
- **Product photos (router, NAS, UPS) are empty.** Copy the [`foto-pkg/`](foto-pkg) folder to `/config/www/foto-pkg/` (see the install guide).
- **The card is empty or shows dashes.** Check that the entities you wrote exist and have a value.
- **Settings pop-up says "No settings configured".** Normal: add `settings_sections` from the card guide.

### Support
- Found a bug or want a feature? Open an [Issue](https://github.com/Simonz82/smart-home-cards/issues/new/choose).
- Questions or ideas? Use the [Discussions](https://github.com/Simonz82/smart-home-cards/discussions).
- Pull requests are welcome.

### License
[MIT](LICENSE): free to use, change and share. The console photos keep their own licenses (some CC BY-SA / CC BY): see [CREDITS.md](CREDITS.md).

---

<a id="italiano"></a>
## 🇮🇹 Italiano

### Che cos'è?
Card Lovelace belle e complete per Home Assistant. Un solo file JavaScript, 18 card, editor visuale integrato (niente YAML obbligatorio), popup Impostazioni e Statistiche su ogni card. Funziona su PC e cellulare.

Tocca una card per aprire la sua guida.

<table>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavatrice.gif" width="220" alt="🧺 Lavatrice"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Lavatrice</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/asciugatrice.gif" width="220" alt="🧺 Asciugatrice"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Asciugatrice</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavastoviglie.gif" width="220" alt="🍽️ Lavastoviglie"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍽️ Lavastoviglie</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/forno.gif" width="220" alt="🍗 Forno"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍗 Forno</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/frigo.gif" width="220" alt="🧊 Frigo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md">🧊 Frigo</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/friggitrice.gif" width="220" alt="🍟 Friggitrice ad aria"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🍟 Friggitrice ad aria</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/microonde.gif" width="220" alt="📡 Microonde"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">📡 Microonde</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/piastra.gif" width="220" alt="🥩 Piastra"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🥩 Piastra</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/induzione.gif" width="220" alt="🍳 Piano a induzione"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-friggitrice-microonde-piastra-e-piano-a-induzione">🍳 Piano a induzione</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/pellet.gif" width="220" alt="🔥 Stufa a pellet"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🔥 Stufa a pellet</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/stampante3d.gif" width="220" alt="🖨️ Stampante 3D"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🖨️ Stampante 3D</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/batteria.gif" width="220" alt="🔋 Batteria"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🔋 Batteria</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/contatore-acqua.gif" width="220" alt="💧 Contatore acqua"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">💧 Contatore acqua</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/piscina.gif" width="220" alt="🏊 Pompa piscina"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🏊 Pompa piscina</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tapparella.gif" width="220" alt="🪟 Tapparella"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🪟 Tapparella</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/albero-natale.gif" width="220" alt="🎄 Albero di Natale"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🎄 Albero di Natale</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/console.gif" width="220" alt="🎮 Console"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md#-nuovi-disegni-animati-1200">🎮 Console</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tablet.gif" width="220" alt="📱 Tablet a muro"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/frigo-tablet.md">📱 Tablet a muro</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/energia.gif" width="220" alt="⚡ Energia Casa"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md">⚡ Energia Casa</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/clima.gif" width="220" alt="❄️ Climatizzatore"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md">❄️ Climatizzatore</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/stufetta.gif" width="220" alt="🔥 Stufetta"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md">🔥 Stufetta</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/ventilatore.gif" width="220" alt="🌀 Ventilatore"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md">🌀 Ventilatore</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/caldaia.gif" width="220" alt="🔥 Caldaia e caloriferi"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md">🔥 Caldaia e caloriferi</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/scaldacqua.gif" width="220" alt="🚿 Scaldacqua"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md">🚿 Scaldacqua</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/fritz.gif" width="220" alt="📶 FritzBox"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md">📶 FritzBox</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/zigbee.gif" width="220" alt="📡 Rete Zigbee"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md">📡 Rete Zigbee</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/server.gif" width="220" alt="🖥️ Server Home Assistant"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md">🖥️ Server Home Assistant</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/nas.gif" width="220" alt="💾 NAS Synology"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md">💾 NAS Synology</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/proxmox.gif" width="220" alt="🖧 Proxmox"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md">🖧 Proxmox</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/ups.gif" width="220" alt="🔋 UPS"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md">🔋 UPS</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/differenziata.gif" width="220" alt="♻️ Raccolta differenziata"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md">♻️ Raccolta differenziata</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/notifiche.gif" width="220" alt="🔔 Centro notifiche"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md">🔔 Centro notifiche</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-testo.gif" width="220" alt="🔊 Alexa annuncio testo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa annuncio testo</a></b></td>
  </tr>
  <tr>
    <td colspan="1"></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-memo.gif" width="220" alt="🔊 Alexa memo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa memo</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/alexa-webradio.gif" width="220" alt="📻 Alexa WebRadio"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">📻 Alexa WebRadio</a></b></td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv.gif" width="220" alt="📺 TV"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">📺 TV</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv-telecomando.gif" width="220" alt="📺 TV + telecomando Samsung"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md">📺 TV + telecomando Samsung</a></b></td>
    <td align="center" valign="top" colspan="2"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv-epg.gif" width="220" alt="📺 TV + guida TV (EPG)"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md">📺 TV + guida TV (EPG)</a></b></td>
  </tr>
</table>

<sub>Tutte le anteprime sono animate e mostrano le card accese, con dati di esempio.</sub>

**Cosa c'è di nuovo?** Guarda il [CHANGELOG](CHANGELOG.md) e le [release](https://github.com/Simonz82/smart-home-cards/releases).

### Installazione
**Con il Marketplace (consigliato).** Da Home Assistant 2026.11 HACS è il **Marketplace** integrato (prima era il menu HACS).
1. Premi il pulsante **Open in Marketplace (HACS)** qui sopra, oppure apri **Impostazioni > Marketplace** e cerca **Smart Home Cards**.
2. Premi **Scarica**. Gli aggiornamenti arrivano da soli.
3. Ricarica la pagina del browser (Ctrl+F5).

**A mano.**
1. Scarica [`smart-home-cards.js`](smart-home-cards.js) e copialo in `/config/www/`.
2. Vai in **Impostazioni > Dashboard > (tre puntini) > Risorse > Aggiungi risorsa**. URL `/local/smart-home-cards.js`, tipo **Modulo JavaScript**.
3. Ricarica la pagina del browser (Ctrl+F5).

Guida completa passo passo: [docs/installazione.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/installazione.md).

### La prima card
Apri una dashboard, premi **Modifica > Aggiungi card**, cerca la card per nome e compila i campi. Oppure, in YAML:

```yaml
type: custom:shc-appliance-clone-card
name: Lavatrice
artwork: washer
power_entity: sensor.lavatrice_potenza   # il tuo sensore di potenza, in watt
threshold_run: 5                         # sopra questi watt = "in funzione"
```

Sostituisci l'entità con la tua. Ogni card ha una guida con tutte le opzioni, esempi e package pronti.

### Le guide, una per card
- [Elettrodomestici (lavatrice, asciugatrice, lavastoviglie, forno, TV, frigo e altri)](https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md)
- [Energia Casa](https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md)
- [Climatizzatore](https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md)
- [Stufetta](https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md)
- [Ventilatore](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md)
- [Caldaia e caloriferi](https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md)
- [Scaldacqua](https://github.com/Simonz82/smart-home-cards/blob/main/docs/scaldacqua.md)
- [FritzBox](https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md)
- [Rete Zigbee](https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md)
- [Server Home Assistant](https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md)
- [NAS Synology](https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md)
- [Proxmox](https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md)
- [UPS](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md)
- [Raccolta differenziata](https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md)
- [Centro notifiche](https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md)
- [Alexa (testo, memo, webradio)](https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md)

Anche: [layout](https://github.com/Simonz82/smart-home-cards/blob/main/docs/layout.md), [grafici](https://github.com/Simonz82/smart-home-cards/blob/main/docs/grafici.md), [notifiche personalizzate](https://github.com/Simonz82/smart-home-cards/blob/main/docs/notifiche-personalizzate.md), [guida TV e telecomando](https://github.com/Simonz82/smart-home-cards/blob/main/docs/tv.md).

### Lingue
Tutte le card e i loro editor seguono la lingua di Home Assistant: **italiano, inglese, olandese** (grazie a @hartliefHA). Con altre lingue si vede l'inglese. Non c'è niente da impostare. Vuoi aggiungere una lingua? Vedi [docs/lingue.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/lingue.md).

### Domande frequenti e problemi comuni
- **La card dice "Custom element doesn't exist".** Manca la risorsa. Aggiungi `/local/smart-home-cards.js` (a mano) oppure controlla che il download sia finito (Marketplace). Poi ricarica.
- **Ho installato o aggiornato ma non cambia niente.** Svuota la cache del browser o premi **Ctrl+F5**. Nell'app del telefono: Impostazioni > App Companion > Risoluzione problemi > Reimposta cache del frontend.
- **Le foto prodotto (router, NAS, UPS) sono vuote.** Copia la cartella [`foto-pkg/`](foto-pkg) in `/config/www/foto-pkg/` (vedi la guida di installazione).
- **La card è vuota o mostra dei trattini.** Controlla che le entità scritte esistano e abbiano un valore.
- **Il popup Impostazioni dice "Nessuna impostazione configurata".** È normale: aggiungi `settings_sections` dalla guida della card.

### Supporto
- Hai trovato un errore o vuoi una funzione? Apri una [Issue](https://github.com/Simonz82/smart-home-cards/issues/new/choose).
- Domande o idee? Usa le [Discussioni](https://github.com/Simonz82/smart-home-cards/discussions).
- Le Pull Request sono benvenute.

### Licenza
[MIT](LICENSE): usale, modificale, condividile liberamente. Se vuoi, cita la fonte. Le foto delle console restano sotto la loro licenza (alcune CC BY-SA / CC BY): vedi [CREDITS.md](CREDITS.md).

---

## ☕ Support the project / Vuoi darmi una mano?

*EN: this project is completely free and not meant to make money. If you want to help with costs and time, here is how.*

Il contenuto di questa pagina è completamente gratuito e lo scopo non è certamente fare soldi. Se vuoi darmi una mano per le spese e il tempo perso, ecco alcuni modi:

| | |
|---|---|
| [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C713VTGJ) | Offrimi un caffè su Ko-fi |
| [![PayPal](https://github.com/Simonz82/shared-assets/blob/main/paypal.svg)](https://www.paypal.com/paypalme/simongmail) | Una donazione libera su PayPal |
| [![Amazon](https://github.com/Simonz82/shared-assets/blob/main/Amazon_logo.png)](https://amzn.to/3XWWTgz) | Fai i tuoi acquisti Amazon partendo da questo link |

**Canali Telegram:**

| | |
|---|---|
| [![Home_Assistant_News](https://github.com/Simonz82/shared-assets/blob/main/home_assistant_news.jpg)](https://t.me/Home_Assistant_News) | Notizie dedicate a Home Assistant |
| [![Offerte Domotica](https://github.com/Simonz82/shared-assets/blob/main/offerte_domotica.jpg)](https://t.me/offerte_domotica_ita) | Offerte sui prodotti di domotica |

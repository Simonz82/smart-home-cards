# smart-home-cards

Card Lovelace personalizzate per Home Assistant, pensate per essere "belle e complete" senza impilare 4-5 card diverse (HACS) una dentro l'altra. Ogni card è un unico file JavaScript, gira su qualunque dashboard (anche sul cellulare), ha un popup Impostazioni e uno Statistiche integrati, e un **editor visuale nativo** (niente YAML obbligatorio: "Aggiungi card" → cerchi il nome → compili i campi).

**Repository unico**: le 17 card (elettrodomestici, energia, climatizzatore, stufetta, ventilatore, caldaia e caloriferi, FritzBox, rete Zigbee, server HA, NAS, Proxmox, UPS, raccolta differenziata, centro notifiche, annuncio testo Alexa, memo Alexa, webradio Alexa) sono tutte in **un solo file** (`smart-home-cards.js`) e documentate tutte qui sotto, nessun altro repository da installare a parte questo. *(In passato Energia Casa e Raccolta Differenziata avevano un repo a parte ciascuna — sono confluite qui per avere un unico posto da cui partire; quei due repo restano online per chi li aveva già installati, ma segnalano di passare a questo.)*

**Non serve programmare nulla**: si installa il file, si aggiunge la card alla dashboard, si scrivono i nomi delle proprie entità al posto di quelle di esempio. Tutte le istruzioni qui sotto sono scritte per chi non ha mai installato una card personalizzata prima.

> Autore: [Simonz82](https://github.com/Simonz82) — usate liberamente, adattate, migliorate. Se personalizzate qualcosa e vi sembra utile agli altri, una Pull Request è benvenuta.

> 🎞️ Le immagini dei dispositivi (elettrodomestici, climatizzatore, stufetta, ventilatore, caldaia) sono **animate**: si muovono e cambiano colore in base a temperatura, stato e livello. Le vedi in movimento nella galleria qui sotto; le schermate nelle guide sono foto ferme di un istante.

## 👀 Tutte le card a colpo d'occhio

Le GIF mostrano le card **accese e in funzione**: cestello che gira, aria del climatizzatore, onde di calore della stufetta, pale e nebbia del ventilatore, fiamma della caldaia. Tocca una card per aprire la sua guida.

<table>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavatrice.gif" width="260" alt="🧺 Lavatrice"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Lavatrice</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/asciugatrice.gif" width="260" alt="🧺 Asciugatrice"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🧺 Asciugatrice</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/lavastoviglie.gif" width="260" alt="🍽️ Lavastoviglie"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍽️ Lavastoviglie</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/forno.gif" width="260" alt="🍗 Forno"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">🍗 Forno</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/tv.gif" width="260" alt="📺 TV"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md">📺 TV</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/energia-centrato-dark.png" width="260" alt="⚡ Energia Casa"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md">⚡ Energia Casa</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/clima.gif" width="260" alt="❄️ Climatizzatore"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md">❄️ Climatizzatore</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/stufetta.gif" width="260" alt="🔥 Stufetta"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md">🔥 Stufetta</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/ventilatore.gif" width="260" alt="🌀 Ventilatore"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md">🌀 Ventilatore</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/caldaia.gif" width="260" alt="🔥 Caldaia e caloriferi"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md">🔥 Caldaia e caloriferi</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/fritz-centrato-dark.png" width="260" alt="📶 FritzBox"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md">📶 FritzBox</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/galleria/zigbee.gif" width="260" alt="📡 Rete Zigbee"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md">📡 Rete Zigbee</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/server-centrato-dark.png" width="260" alt="🖥️ Server Home Assistant"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md">🖥️ Server Home Assistant</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/nas-centrato-dark.png" width="260" alt="💾 NAS Synology"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md">💾 NAS Synology</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/proxmox-centrato-dark.png" width="260" alt="🖧 Proxmox"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md">🖧 Proxmox</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/ups-centrato-dark.png" width="260" alt="🔋 UPS"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md">🔋 UPS</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/garbage-centrato-dark.png" width="260" alt="♻️ Raccolta Differenziata"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md">♻️ Raccolta Differenziata</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/centro-notifiche.png" width="260" alt="🔔 Centro Notifiche"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md">🔔 Centro Notifiche</a></b></td>
  </tr>
  <tr>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/alexa-text.png" width="260" alt="🔊 Alexa Annuncio Testo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa Annuncio Testo</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/alexa-memo.png" width="260" alt="🔊 Alexa Memo"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">🔊 Alexa Memo</a></b></td>
    <td align="center" valign="top" width="33%"><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md"><img src="https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/alexa-webradio.png" width="260" alt="📻 Alexa WebRadio"></a><br><b><a href="https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md">📻 Alexa WebRadio</a></b></td>
  </tr>
</table>

## Indice

| Card | Cosa mostra | Serve per |
|---|---|---|
| [🧺 Elettrodomestici](https://github.com/Simonz82/smart-home-cards/blob/main/docs/elettrodomestici.md) | Lavatrice, lavastoviglie, asciugatrice, forno, TV, frigorifero (anche non smart, solo presa): stato, ciclo in corso, consumi, storico settimanale (anche senza YAML, vedi guida), comandi a distanza per chi li ha (es. lavastoviglie Home Connect) | Qualsiasi elettrodomestico collegato a una presa/misuratore di potenza |
| [⚡ Energia Casa](https://github.com/Simonz82/smart-home-cards/blob/main/docs/energia.md) | Consumo istantaneo, circuiti singoli, costi, confronto con periodo precedente | Un misuratore di potenza generale casa in Watt |
| [❄️ Climatizzatore](https://github.com/Simonz82/smart-home-cards/blob/main/docs/clima.md) | Split animato che soffia aria (blu freddo, arancio caldo), gauge dritta con temperatura stanza/impostata e umidità, comandi diretti anche da spento, programmazione accensione/spegnimento, consumi, ventola e alette, diagnostica | Qualsiasi entità `climate.` |
| [🔥 Stufetta](https://github.com/Simonz82/smart-home-cards/blob/main/docs/stufetta.md) | Stufetta animata (onde di calore per livello), gauge dritta con stanza e soglia, livelli H1/H2/H3/Eco, gestione automatica "parte al massimo, alla soglia scende" | Qualsiasi stufetta `climate.` (esempio: Dreo 314S DR-HSH004S) |
| [🌀 Ventilatore](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ventilatore.md) | Ventilatore animato (pale, oscillazione, nebbia, luce), velocità, modalità, programmazione, nebbia e luce, serbatoio e pulizia | Qualsiasi ventilatore `fan.` (esempio: Dreo DR-HEC005S con nebulizzatore) |
| [🔥 Caldaia e caloriferi](https://github.com/Simonz82/smart-home-cards/blob/main/docs/caldaia.md) | Caldaia animata con calorifero, gauge dritta con casa/impostata e barra della pressione impianto, programmi orari, consumi gas per giorni/settimane/mesi/anni divisi riscaldamento e acqua calda | Qualsiasi caldaia o termostato `climate.` (esempio: Baxi Luna Classic con Remeha Home) |
| [📶 FritzBox / Router](https://github.com/Simonz82/smart-home-cards/blob/main/docs/fritzbox.md) | Stato connessione, banda impegnata, velocità, test di velocità | Router AVM FritzBox (integrazione ufficiale HA) |
| [📡 Rete Zigbee](https://github.com/Simonz82/smart-home-cards/blob/main/docs/zigbee.md) | Dispositivi online/offline e da quanto, segnale LQI medio e minimo, batterie, elenco con foto, abbinamenti, avvisi in fascia oraria | Zigbee2MQTT con disponibilità attiva |
| [🖥️ Server Home Assistant](https://github.com/Simonz82/smart-home-cards/blob/main/docs/homeassistant-server.md) | CPU/RAM/disco del server, aggiornamenti, backup, riavvii programmati | Qualsiasi installazione Home Assistant (OS/Supervised/Container) |
| [💾 NAS Synology](https://github.com/Simonz82/smart-home-cards/blob/main/docs/nas-synology.md) | CPU/RAM/volumi/dischi, stato sicurezza, consumo, riavvio/spegnimento | NAS Synology con integrazione DSM |
| [🖧 Proxmox](https://github.com/Simonz82/smart-home-cards/blob/main/docs/proxmox.md) | Stato nodo, CPU/RAM/disco, VM/container attivi, salute SSD | Host Proxmox VE con un'integrazione che esponga questi sensori |
| [🔋 UPS](https://github.com/Simonz82/smart-home-cards/blob/main/docs/ups.md) | Stato, carica batteria, carico, autonomia residua | Gruppo di continuità (es. tramite NUT/apcupsd) |
| [♻️ Raccolta Differenziata](https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md) | Rifiuto del giorno, giorno del ritiro, orario di esposizione, tipi di raccolta scritti a mano | Nessun hardware, solo un `input_text` |
| [🔔 Centro Notifiche](https://github.com/Simonz82/smart-home-cards/blob/main/docs/centro-notifiche.md) | Volumi e finestra oraria degli annunci Alexa condivisi da tutte le altre card, in un'unica card di impostazioni | Il package `centro_notifiche_alexa.yaml` + integrazione Alexa Media Player |
| [🔊 Alexa Annuncio Testo / Memo / WebRadio](https://github.com/Simonz82/smart-home-cards/blob/main/docs/alexa.md) | Annuncio vocale al volo con selettore multiroom e volume; fino a 4 promemoria vocali programmati con riprova al rientro in casa; oppure radio/playlist su Alexa multiroom con sveglia programmata e volume ridotto automatico | Integrazione Alexa Media Player |
| [📈 Grafici 24 h / 7 gg / 30 gg / da … a](https://github.com/Simonz82/smart-home-cards/blob/main/docs/grafici.md) | Su ogni card un pulsante apre il grafico storico del dispositivo, adattato a PC e smartphone, con i picchi reali | Tutte le card |
| [🎛️ Layout classico / centrato](https://github.com/Simonz82/smart-home-cards/blob/main/docs/layout.md) | Ogni card in due layout (foto a sinistra oppure foto centrale in alto), scelto da un menu nelle Impostazioni | Tutte le card |

Tutte le card condividono lo stesso motore di **notifiche personalizzate** (push + Alexa) — vedi [docs/notifiche-personalizzate.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/notifiche-personalizzate.md) — e lo stesso mini-linguaggio per il popup Impostazioni — vedi [docs/settings-sections.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/settings-sections.md).

## 📦 Installazione con HACS

Apri **HACS**, cerca **Smart Home Cards** e installala: aggiornamenti automatici, nessun file da ricopiare a mano.

Se la ricerca non la trova (la tua versione di HACS non ha ancora la raccolta nell'elenco predefinito), aggiungila come **repository personalizzato**: tre puntini in alto a destra → Repository personalizzati → `https://github.com/Simonz82/smart-home-cards`, categoria **Dashboard**. Dettagli: [docs/installazione.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/installazione.md#0-con-hacs-se-preferisci-non-copiare-i-file-a-mano).

## Installazione rapida

Guida completa passo-passo: [docs/installazione.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/installazione.md). In breve:

1. Scarica [`smart-home-cards.js`](https://github.com/Simonz82/smart-home-cards/blob/main/smart-home-cards.js) e copialo in `/config/www/` sul tuo Home Assistant.
2. Impostazioni → Dashboard → (⋮ in alto a destra) → Risorse → Aggiungi risorsa → `/local/smart-home-cards.js` (tipo: Modulo JavaScript).
3. Ricarica la pagina (svuota la cache se serve).
4. Aggiungi una card, modalità YAML, incolla uno degli esempi nelle guide sopra, sostituisci le entità con le tue.
5. (Facoltativo) Per scegliere il layout dalle Impostazioni copia anche [`packages/layout_schede.yaml`](https://github.com/Simonz82/smart-home-cards/blob/main/packages/layout_schede.yaml) (vedi [docs/layout.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/layout.md)).
6. (Facoltativo, ma consigliato) Installa anche il mio package originale per quella card, in [`packages/`](https://github.com/Simonz82/smart-home-cards/tree/main/packages/) — vedi il paragrafo "🚀 Metodo veloce" in cima a ogni guida. Sono i file **reali** che uso io, con solo poche righe da cambiare in cima (o da cercare e sostituire): niente da scrivere da zero.

Un solo file JS contiene tutte e 17 le card — installi una volta sola, poi usi quelle che ti servono.

## 🎛️ Due layout per ogni card

Ogni card si può mostrare in **classico** (foto a sinistra) o **centrato** (foto centrale in alto, informazioni su due colonne, poi le barre). La scelta è la **prima riga delle Impostazioni** della card: un menu a tendina, e la card cambia subito. Guida completa: **[docs/layout.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/layout.md)**.

| Classico | Centrato |
|---|---|
| ![Energia classico](https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/energia-classico-light.png) | ![Energia centrato](https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/energia-centrato-light.png) |
| ![Lavatrice classico](https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/lavatrice-classico-dark.png) | ![Lavatrice centrato](https://raw.githubusercontent.com/Simonz82/smart-home-cards/main/docs/screenshot/layout/lavatrice-centrato-dark.png) |

## Cosa include, cosa devi adattare tu

- **Le immagini prodotto** (foto del router/NAS/UPS/logo Proxmox/HA mostrate nelle card) sono incluse in [`foto-pkg/`](https://github.com/Simonz82/smart-home-cards/tree/main/foto-pkg/) — copiale insieme al file della card, vedi [docs/installazione.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/installazione.md).
- **Le immagini dei rifiuti** (per la card Raccolta Differenziata) sono in [`rifiuti/`](https://github.com/Simonz82/smart-home-cards/tree/main/rifiuti/) — vedi [docs/differenziata.md](https://github.com/Simonz82/smart-home-cards/blob/main/docs/differenziata.md).
- **I package reali** (sensori, helper, automazioni di notifica/report/riavvio) sono in [`packages/`](https://github.com/Simonz82/smart-home-cards/tree/main/packages/) — sono letteralmente quelli che uso io in produzione, con i dati personali tolti. Ogni guida spiega, nel paragrafo "🚀 Metodo veloce", esattamente quali righe cambiare per il tuo impianto.
- **Le entità** che ogni card e ogni package si aspettano dipendono comunque dal tuo impianto/integrazioni — ogni guida elenca esattamente quali servono e a cosa servono, sia per chi usa i miei package sia per chi preferisce costruire i propri da zero.

## Licenza

Nessuna restrizione: usale, modificale, ridistribuiscile. Se vuoi, cita la fonte.

---

## ☕ Vuoi darmi una mano?

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

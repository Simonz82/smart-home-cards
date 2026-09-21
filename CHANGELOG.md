# Changelog

## 2026-09-21 (sera) — Grafici, Statistiche e differenziata

- **Nuovo pulsante 📈 Grafici** su tutte le card: finestra con il grafico storico in **24 h · 7 gg · 30 gg · da … a** (date a scelta), che si adatta a PC e smartphone, con linea guida, minimo/media/massimo e curve sovrapposte dove serve. Guida: [docs/grafici.md](docs/grafici.md).
- I grafici usano la **cronologia reale** fino a 8 giorni (per la potenza si tiene il **picco**: 2 100 W restano 2 100 W, non una media di 400 W) e le statistiche a lungo termine oltre; linea a gradini come lo stato reale.
- Toccando le barre delle card (CPU, batteria, carico, circuiti…) si apre lo stesso grafico, non più solo le ultime 6 ore.
- Card **Elettrodomestici**: nel popup **Statistiche** (barrette) tornano tutti i consumi: per periodo (oggi, ieri, mese, anno…), ultimi 7 giorni e i due istogrammi (mese e anno).
- Card **FritzBox**: la campanella degli aggiornamenti è l'ultimo pulsante a destra; le due barre live hanno il fondoscala uguale alla **portante agganciata + 2%** (download con il download, upload con l'upload).
- Card **Raccolta differenziata**: nuovo pulsante **Tipi di raccolta** (l'ultimo a destra) per scrivere a mano i tipi di rifiuto del proprio comune, con esempio; le Impostazioni sono ora una finestra nativa con la riga Layout e i giorni; per i tipi senza foto compare la loro icona. Nuovi: [docs/differenziata.md](docs/differenziata.md), `packages/differenziata.yaml`, `packages/centro_notifiche_alexa.yaml`.
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

# smart-home-cards

Card Lovelace personalizzate per Home Assistant, pensate per essere "belle e complete" senza impilare 4-5 card diverse (HACS) una dentro l'altra. Ogni card è un unico file JavaScript, gira su qualunque dashboard (anche sul cellulare), ha un popup Impostazioni e uno Statistiche integrati.

**Non serve programmare nulla**: si installa il file, si aggiunge la card alla dashboard, si scrivono i nomi delle proprie entità al posto di quelle di esempio. Tutte le istruzioni qui sotto sono scritte per chi non ha mai installato una card personalizzata prima.

> Autore: [Simonz82](https://github.com/Simonz82) — usate liberamente, adattate, migliorate. Se personalizzate qualcosa e vi sembra utile agli altri, una Pull Request è benvenuta.

## Indice

| Card | Cosa mostra | Serve per |
|---|---|---|
| [🧺 Elettrodomestici](docs/elettrodomestici.md) | Lavatrice, lavastoviglie, asciugatrice, forno, TV: stato, ciclo in corso, consumi, storico settimanale | Qualsiasi elettrodomestico collegato a una presa/misuratore di potenza |
| [⚡ Energia Casa](docs/energia.md) | Consumo istantaneo, circuiti singoli, costi, confronto con periodo precedente | Un misuratore di potenza generale casa (Shelly EM, contatore, ecc.) |
| [📶 FritzBox / Router](docs/fritzbox.md) | Stato connessione, banda impegnata, velocità, test di velocità | Router AVM FritzBox (integrazione ufficiale HA) |
| [🖥️ Server Home Assistant](docs/homeassistant-server.md) | CPU/RAM/disco del server, aggiornamenti, backup, riavvii programmati | Qualsiasi installazione Home Assistant (OS/Supervised/Container) |
| [💾 NAS Synology](docs/nas-synology.md) | CPU/RAM/volumi/dischi, stato sicurezza, consumo, riavvio/spegnimento | NAS Synology con integrazione DSM |
| [🖧 Proxmox](docs/proxmox.md) | Stato nodo, CPU/RAM/disco, VM/container attivi, salute SSD | Host Proxmox VE con un'integrazione che esponga questi sensori |
| [🔋 UPS](docs/ups.md) | Stato, carica batteria, carico, autonomia residua | Gruppo di continuità (es. tramite NUT/apcupsd) |

Tutte le card condividono lo stesso motore di **notifiche personalizzate** (push + Alexa) — vedi [docs/notifiche-personalizzate.md](docs/notifiche-personalizzate.md) — e lo stesso mini-linguaggio per il popup Impostazioni — vedi [docs/settings-sections.md](docs/settings-sections.md).

## Installazione rapida

Guida completa passo-passo: [docs/installazione.md](docs/installazione.md). In breve:

1. Scarica [`smart-home-cards.js`](smart-home-cards.js) e copialo in `/config/www/` sul tuo Home Assistant.
2. Impostazioni → Dashboard → (⋮ in alto a destra) → Risorse → Aggiungi risorsa → `/local/smart-home-cards.js` (tipo: Modulo JavaScript).
3. Ricarica la pagina (svuota la cache se serve).
4. Aggiungi una card, modalità YAML, incolla uno degli esempi nelle guide sopra, sostituisci le entità con le tue.

Un solo file contiene tutte e 7 le card — installi una volta sola, poi usi quelle che ti servono.

## Cosa NON è incluso

- Le **entità** (sensori, switch, automazioni, helper) che ogni card si aspetta: quelle dipendono dal tuo impianto/integrazioni e vanno create da te. Ogni guida elenca esattamente quali servono e a cosa servono.
- Le **immagini prodotto** opzionali (foto del router/NAS/UPS mostrate nella card): non sono redistribuite per motivi di copyright — ogni guida indica il percorso file atteso se vuoi aggiungerne una tua.
- Automazioni pronte per l'invio delle notifiche: la card gestisce solo l'interruttore ON/OFF della preferenza, l'automazione che effettivamente invia il push/Alexa la scrivi tu (esempio incluso in [docs/notifiche-personalizzate.md](docs/notifiche-personalizzate.md)).

## Licenza

Nessuna restrizione: usale, modificale, ridistribuiscile. Se vuoi, cita la fonte.

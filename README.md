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
5. (Facoltativo, ma consigliato) Installa anche le automazioni pronte in [`automazioni/`](automazioni/), così notifiche/report/riavvii programmati funzionano davvero e non solo a livello di interfaccia — vedi [automazioni/README.md](automazioni/README.md).

Un solo file contiene tutte e 7 le card — installi una volta sola, poi usi quelle che ti servono.

## Cosa include, cosa devi adattare tu

- **Le immagini prodotto** (foto del router/NAS/UPS/logo Proxmox/HA mostrate nelle card) sono incluse in [`foto-pkg/`](foto-pkg/) — copiale insieme al file della card, vedi [docs/installazione.md](docs/installazione.md).
- **Le automazioni** che fanno funzionare davvero notifiche/report/riavvii programmati sono già scritte e pronte in [`automazioni/`](automazioni/) — non devi inventarle da zero. Ogni file ha in testa un blocco di commenti con l'elenco esatto dei parametri da cambiare in base al tuo impianto (nomi entità, servizio di notifica, ecc.), il resto puoi lasciarlo com'è.
- **Le entità** (sensori, switch, helper) che ogni card e ogni automazione si aspettano dipendono dal tuo impianto/integrazioni e vanno create da te — ogni guida elenca esattamente quali servono e a cosa servono.

## Licenza

Nessuna restrizione: usale, modificale, ridistribuiscile. Se vuoi, cita la fonte.

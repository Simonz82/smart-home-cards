# 🖨️ Card Stampante (`shc-printer-card`)

> **Nuova - feedback benvenuto.** Provata con entità simulate: se la usi con la tua stampante scrivimi com'è andata (issue o discussione su GitHub).

<p align="center"><img src="screenshot/galleria/stampante.gif" width="360" alt="Card stampante"></p>

Pensata per l'integrazione standard **[Internet Printing Protocol (IPP)](https://www.home-assistant.io/integrations/ipp/)**: un sensore di stato (`idle`, `printing`, `stopped`), un sensore per ogni livello di inchiostro / toner (in %) e, se c'è, il contatore delle pagine. Funziona con qualunque stampante che esponga questi sensori.

Disegno animato: durante la stampa il foglio esce e il LED lampeggia; lo stato ferma accende il LED rosso. Sotto il disegno ci sono le **barre dei livelli, ognuna con il suo colore**.

## Cosa fa

- Stato: **Pronta**, **In stampa**, **Ferma**.
- **Lista dei livelli** (`ink_levels`): per ognuno entità, nome e colore. Se non indichi il colore la card lo ricava dal nome (nero, ciano, magenta, giallo; altrimenti una tavolozza).
- **Avviso inchiostro basso** sotto `ink_low` (default 15 %): la barra lampeggia e compare il messaggio col nome del colore. Avviso anche se la stampante è ferma.
- Tocco su una barra = dettaglio dell'entità. Pulsante grafico (storico livelli) e pulsante ℹ.

## Esempio

```yaml
type: custom:shc-printer-card
name: Stampante
entity: sensor.canon_pixma                 # stato IPP (idle / printing / stopped)
pages_entity: sensor.canon_pixma_pagine    # facoltativo
ink_low: 15
ink_levels:
  - entity: sensor.canon_pixma_nero
    name: Nero
  - entity: sensor.canon_pixma_ciano
    name: Ciano
  - entity: sensor.canon_pixma_magenta
    name: Magenta
  - entity: sensor.canon_pixma_giallo
    name: Giallo
    color: "#facc15"                        # facoltativo
```

Per trovare le entità: Strumenti per sviluppatori → Stati, filtra per il nome della stampante.

## Opzioni

| Campo | Obbligatorio | Default | Descrizione |
|---|---|---|---|
| `entity` | **Sì** | - | Sensore di stato della stampante (IPP) |
| `name`, `icon` | No | Stampante, `mdi:printer` | Nome e icona del chip |
| `ink_levels` | No | - | Elenco di `{ entity, name, color }` (anche solo il nome dell'entità) |
| `ink_low` | No | `15` | Soglia % dell'avviso inchiostro basso |
| `pages_entity` | No | - | Contatore pagine stampate |
| `layout`, `layout_entity` | No | centrato | Layout `classico` o `centrato` |

Testi in italiano, inglese e olandese; c'è l'editor visuale ("Aggiungi card" → "Stampante").

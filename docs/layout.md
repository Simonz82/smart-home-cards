# 🎛️ Layout classico o centrato

Ogni card di questa raccolta si può mostrare in **due layout**, e la scelta si fa da un **menu nella prima riga delle Impostazioni** della card (l'ingranaggio in alto). La card resta una sola: cambia solo la disposizione.

| Layout | Come è disposta la card |
|---|---|
| **Classico** | La foto a sinistra e il blocco delle informazioni a destra |
| **Centrato** | La foto al centro in alto, subito sotto le informazioni su due colonne, poi le barre di misurazione |

## Dove si sceglie

Nelle **Impostazioni** di ogni card la prima riga si chiama **Layout**: un menu a tendina con *Classico* e *Centrato*. Appena scegli, la card cambia.

| Popup nativo (es. Lavatrice) | Popup nativo (Raccolta differenziata) |
|---|---|
| ![Layout nelle impostazioni - lavatrice](screenshot/layout/impostazioni-layout-lavatrice-light.png) | ![Layout nelle impostazioni - raccolta](screenshot/layout/impostazioni-layout-garbage-light.png) |

Tema scuro: [lavatrice](screenshot/layout/impostazioni-layout-lavatrice-dark.png) · [UPS](screenshot/layout/impostazioni-layout-ups-dark.png) · [raccolta](screenshot/layout/impostazioni-layout-garbage-dark.png) · [energia](screenshot/layout/impostazioni-layout-energia-dark.png) · [server](screenshot/layout/impostazioni-layout-server-dark.png)

> La scelta è **per card** e vale per tutta la tua installazione di Home Assistant (non per il singolo dispositivo): è salvata in un menu (`input_select`), non nel browser.

## Come si attiva

### 1. Crea i menu (una volta sola)

Copia [`packages/layout_schede.yaml`](../packages/layout_schede.yaml) in `/config/packages/` e riavvia. Crea un menu per ogni card:

| Card | Menu |
|---|---|
| Lavatrice | `input_select.layout_lavatrice` |
| Asciugatrice | `input_select.layout_asciugatrice` |
| Lavastoviglie | `input_select.layout_lavastoviglie` |
| Forno | `input_select.layout_forno` |
| TV | `input_select.layout_tv` |
| Energia Casa | `input_select.layout_energia` |
| FritzBox | `input_select.layout_fritz` |
| Server Home Assistant | `input_select.layout_server` |
| NAS Synology | `input_select.layout_nas` |
| Proxmox | `input_select.layout_proxmox` |
| UPS | `input_select.layout_ups` |
| Raccolta differenziata | `input_select.layout_garbage` |

Togli dal file le righe delle card che non usi.

### 2. Collega la card al suo menu

Nella configurazione della card aggiungi `layout_entity`:

```yaml
type: custom:shc-appliance-clone-card
name: Lavatrice
layout_entity: input_select.layout_lavatrice   # <- il menu del layout
# ...il resto della configurazione
```

### 3. Metti la riga "Layout" per prima nelle Impostazioni

**Popup nativo** (quello che si apre da solo con l'ingranaggio): aggiungi come **prima** sezione di `settings_sections`:

```yaml
settings_sections:
  - title: Aspetto
    rows:
      - { entity: input_select.layout_lavatrice, label: Layout }
  # ...le altre sezioni
```

Le righe `input_select` compaiono come un vero menu a tendina.

**Popup con `browser_mod`** (`legacy_settings_popup`, come nella raccolta differenziata, nel server HA e nell'energia): aggiungi una riga `input_select` come prima voce dell'elenco:

```yaml
content:
  type: entities
  entities:
    - entity: input_select.layout_garbage
      name: Layout
      icon: mdi:view-dashboard-outline
    - type: divider
    # ...le altre righe
```

### Senza menu

Se non ti serve la scelta dalle Impostazioni, puoi fissare il layout nella configurazione:

```yaml
layout: centrato     # oppure: classico (predefinito)
```

Se sono presenti entrambi, vince il menu (`layout_entity`).

## Note sul layout centrato

- Le informazioni sono su **due colonne**; se sono dispari (3), l'ultima occupa tutta la larghezza.
- Nella card **Energia Casa** la divisione è 40% / 60%, per lasciare più spazio al "Top consumo", il cui nome si accorcia con i puntini ma mostra sempre i watt.
- La **raccolta differenziata** in layout centrato mostra il bidone grande al centro.
- Nella card **FritzBox** l'IP pubblico delle schermate qui sotto è oscurato.

## Le schermate

Tutte le card, nei due layout e nei due temi.

### 🧺 Lavatrice

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🧺 Lavatrice classico chiaro](screenshot/layout/lavatrice-classico-light.png) | ![🧺 Lavatrice centrato chiaro](screenshot/layout/lavatrice-centrato-light.png) |
| **Scuro** | ![🧺 Lavatrice classico scuro](screenshot/layout/lavatrice-classico-dark.png) | ![🧺 Lavatrice centrato scuro](screenshot/layout/lavatrice-centrato-dark.png) |

### 🧺 Asciugatrice

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🧺 Asciugatrice classico chiaro](screenshot/layout/asciugatrice-classico-light.png) | ![🧺 Asciugatrice centrato chiaro](screenshot/layout/asciugatrice-centrato-light.png) |
| **Scuro** | ![🧺 Asciugatrice classico scuro](screenshot/layout/asciugatrice-classico-dark.png) | ![🧺 Asciugatrice centrato scuro](screenshot/layout/asciugatrice-centrato-dark.png) |

### 🧺 Lavastoviglie

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🧺 Lavastoviglie classico chiaro](screenshot/layout/lavastoviglie-classico-light.png) | ![🧺 Lavastoviglie centrato chiaro](screenshot/layout/lavastoviglie-centrato-light.png) |
| **Scuro** | ![🧺 Lavastoviglie classico scuro](screenshot/layout/lavastoviglie-classico-dark.png) | ![🧺 Lavastoviglie centrato scuro](screenshot/layout/lavastoviglie-centrato-dark.png) |

### 🧺 Forno

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🧺 Forno classico chiaro](screenshot/layout/forno-classico-light.png) | ![🧺 Forno centrato chiaro](screenshot/layout/forno-centrato-light.png) |
| **Scuro** | ![🧺 Forno classico scuro](screenshot/layout/forno-classico-dark.png) | ![🧺 Forno centrato scuro](screenshot/layout/forno-centrato-dark.png) |

### 📺 TV

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![📺 TV classico chiaro](screenshot/layout/tv-classico-light.png) | ![📺 TV centrato chiaro](screenshot/layout/tv-centrato-light.png) |
| **Scuro** | ![📺 TV classico scuro](screenshot/layout/tv-classico-dark.png) | ![📺 TV centrato scuro](screenshot/layout/tv-centrato-dark.png) |

### ⚡ Energia Casa

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![⚡ Energia Casa classico chiaro](screenshot/layout/energia-classico-light.png) | ![⚡ Energia Casa centrato chiaro](screenshot/layout/energia-centrato-light.png) |
| **Scuro** | ![⚡ Energia Casa classico scuro](screenshot/layout/energia-classico-dark.png) | ![⚡ Energia Casa centrato scuro](screenshot/layout/energia-centrato-dark.png) |

### 📶 FritzBox

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![📶 FritzBox classico chiaro](screenshot/layout/fritz-classico-light.png) | ![📶 FritzBox centrato chiaro](screenshot/layout/fritz-centrato-light.png) |
| **Scuro** | ![📶 FritzBox classico scuro](screenshot/layout/fritz-classico-dark.png) | ![📶 FritzBox centrato scuro](screenshot/layout/fritz-centrato-dark.png) |

### 🖥️ Server Home Assistant

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🖥️ Server Home Assistant classico chiaro](screenshot/layout/server-classico-light.png) | ![🖥️ Server Home Assistant centrato chiaro](screenshot/layout/server-centrato-light.png) |
| **Scuro** | ![🖥️ Server Home Assistant classico scuro](screenshot/layout/server-classico-dark.png) | ![🖥️ Server Home Assistant centrato scuro](screenshot/layout/server-centrato-dark.png) |

### 💾 NAS Synology

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![💾 NAS Synology classico chiaro](screenshot/layout/nas-classico-light.png) | ![💾 NAS Synology centrato chiaro](screenshot/layout/nas-centrato-light.png) |
| **Scuro** | ![💾 NAS Synology classico scuro](screenshot/layout/nas-classico-dark.png) | ![💾 NAS Synology centrato scuro](screenshot/layout/nas-centrato-dark.png) |

### 🖧 Proxmox

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🖧 Proxmox classico chiaro](screenshot/layout/proxmox-classico-light.png) | ![🖧 Proxmox centrato chiaro](screenshot/layout/proxmox-centrato-light.png) |
| **Scuro** | ![🖧 Proxmox classico scuro](screenshot/layout/proxmox-classico-dark.png) | ![🖧 Proxmox centrato scuro](screenshot/layout/proxmox-centrato-dark.png) |

### 🔋 UPS

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![🔋 UPS classico chiaro](screenshot/layout/ups-classico-light.png) | ![🔋 UPS centrato chiaro](screenshot/layout/ups-centrato-light.png) |
| **Scuro** | ![🔋 UPS classico scuro](screenshot/layout/ups-classico-dark.png) | ![🔋 UPS centrato scuro](screenshot/layout/ups-centrato-dark.png) |

### ♻️ Raccolta differenziata

| | Classico | Centrato |
|---|---|---|
| **Chiaro** | ![♻️ Raccolta differenziata classico chiaro](screenshot/layout/garbage-classico-light.png) | ![♻️ Raccolta differenziata centrato chiaro](screenshot/layout/garbage-centrato-light.png) |
| **Scuro** | ![♻️ Raccolta differenziata classico scuro](screenshot/layout/garbage-classico-dark.png) | ![♻️ Raccolta differenziata centrato scuro](screenshot/layout/garbage-centrato-dark.png) |


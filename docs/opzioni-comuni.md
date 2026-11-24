# Opzioni comuni a più card (1.30.0)

Queste opzioni non cambiano niente se non le scrivi: la card resta come prima. Dopo l'aggiornamento premi **Ctrl+F5** nel browser.

## 1. Più automazioni nelle impostazioni (`automation_entities`)

**A cosa serve.** Nel popup **Impostazioni** (l'ingranaggio) della card compare un interruttore per ogni automazione che scegli. Così accendi o spegni le automazioni di quella card senza uscire dalla dashboard.

**Su quali card.** Fritz, Server, NAS, Proxmox, Energia, Raccolta differenziata, Elettrodomestico (YAML), UPS, Caffè, Purificatore, Deumidificatore, Stampante. Le card con un proprio elenco di interruttori (stufetta, ventilatore, caldaia, boiler, clima) hanno già il loro modo di farlo.

**Passo per passo (editor visuale)**
1. Apri la card nell'editor (matita > tre puntini sulla card > **Modifica**).
2. In fondo, nella sezione **Altre opzioni**, apri **Automazioni nelle impostazioni**.
3. Premi **Aggiungi**, scegli l'automazione dall'elenco, scrivi un nome (facoltativo).
4. Premi **Salva**, poi tocca l'ingranaggio della card: trovi la sezione **Automazioni** con gli interruttori.

**Passo per passo (YAML)**
```yaml
automation_entities:
  - automation.notifica_blackout                # basta l'ID
  - entity: automation.spegni_servizi           # oppure ID + nome
    name: Spegni servizi sotto il 20%
```

Se scrivi anche `automation_entity` (una sola) vale lo stesso: i doppioni sono ignorati. Se l'ID non esiste la riga non compare.

## 2. Dimensione dell'immagine (`image_scale`)

**A cosa serve.** Rende la foto o il disegno della card più grande o più piccolo.

**Come si usa.** Un numero: `1` è normale, `1.3` è il 30% più grande, `0.8` è il 20% più piccolo (da 0.3 a 3).

**Passo per passo (editor visuale).** Sezione **Altre opzioni** > **Dimensione dell'immagine** > scrivi per esempio `1.3` > **Salva**. Lascia vuoto per la dimensione normale.

**Passo per passo (YAML)**
```yaml
image_scale: 1.3
```

**Su quali card.** Tutte quelle che hanno un'immagine o un disegno in alto (UPS, Fritz, Server, NAS, Proxmox, Energia, Raccolta, elettrodomestici, caffè, stufetta, ventilatore, caldaia, boiler, clima, Zigbee, purificatore, deumidificatore, stampante). Se ingrandisci molto, i bordi del disegno vengono tagliati dal riquadro: abbassa il numero.

## Problemi comuni

- **L'interruttore dell'automazione non compare** -> l'ID non esiste. Controlla in **Impostazioni > Automazioni e scene** e copia l'ID giusto (`automation.xxx`).
- **`image_scale` non cambia niente** -> aggiorna alla 1.30.0 e premi **Ctrl+F5**. Il numero deve essere diverso da 1.
- **L'immagine esce dal riquadro** -> hai messo un numero troppo grande. Prova `1.2`.

**EN** — `automation_entities`: list of automations, each with its own switch in the card's settings popup (visual editor: More options > Automations in the settings, or YAML `automation_entities: [automation.x, {entity: automation.y, name: Label}]`). `image_scale`: number, `1` = normal, `1.3` = 30% bigger, `0.8` = smaller. Both default to the previous look. Press Ctrl+F5 after updating.

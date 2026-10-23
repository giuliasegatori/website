# giuliasegatori.com

Il sito di Giulia Segatori, product designer. Next.js, pubblicato su Vercel: ogni push su `main` va online.

## Avvio in locale

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000.

## Dove sono le cose

- `pages/index.js`: la home, divisa in capitoli (Hero, Telemetria, Lavoro, Progetti, Archivio, Diario, Chi sono). I testi sono in coppia italiano/inglese con `t('italiano', 'english')`.
- `content/diario/*.md`: gli articoli del diario. Il nome del file diventa l'indirizzo (`/diario/nome-file`).
- `styles/global.css`: colori, caratteri e layout. I colori sono variabili in cima al file, con la versione scura sotto.
- `components/`: header, contatti e lista articoli, condivisi tra le pagine.
- `public/`: immagini, favicon e immagine di anteprima per i social (`og-image.jpg`).

## Scrivere un nuovo articolo

Crea un file in `content/diario/`, per esempio `content/diario/il-mio-articolo.md`:

```markdown
---
title: "Il titolo"
excerpt: "Una o due frasi che compaiono nella lista."
tag: Feedback
minutes: 3
date: 2026-11-02
---

Il testo, in Markdown.
```

Gli articoli sono ordinati per data, dal più recente.

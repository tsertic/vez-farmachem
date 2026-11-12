# VEZ Farmachem — website redesign

A modern single-page redesign concept for [vez-farmachem.com](https://vez-farmachem.com/), the site of a Zagreb-based company working in sourcing, co-development and distribution of Active Pharmaceutical Ingredients.

The redesign keeps the identity of the original brand — the hatched **V**, the solid yellow **F**, the charcoal background with slanted hairlines — and builds a full visual language on top of it. All copy and figures come from the existing site; nothing about the company was invented.

## What's on the page

- Hero with an animated flask illustration built from the logo's two motifs (hatching and yellow)
- Company figures, heritage timeline (2001 Kyiv office, 2014 move to Croatia, 2017 HALMED approval)
- Four service areas: API sourcing, in-bulk finished dosage forms, agency representation, regulatory know-how
- Quality and compliance section based on the company's EU GDP statement
- Location plot for Zagreb, Kyiv and the group's Swiss heritage
- Contact details for both offices

## Tech stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies. Fonts (Montserrat, Inter, JetBrains Mono) load from Google Fonts. Every illustration is inline SVG.

## Setup

```bash
git clone <repo-url>
cd vez-farmachem
python -m http.server 4173
```

Then open http://localhost:4173. Opening `index.html` directly in a browser works too.

## Project structure

```
index.html            page markup and inline SVG illustrations
styles/tokens.css     design tokens: color, type scale, spacing, radii
styles/base.css       reset, typography, buttons, header, footer
styles/sections.css   one block per page section, plus keyframes
scripts/main.js       header state, mobile menu, scroll reveal, counters
assets/favicon.svg    VF mark
```

## Contributing

Pull requests, issues, and ideas are all welcome. Whether it's fixing a typo,
improving performance, adding a feature, or rethinking the architecture —
if you see something that could be better, open a PR or start a discussion.

Check out [AGENTS.md](./AGENTS.md) for contribution guidelines.

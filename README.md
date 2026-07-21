# Rökland

En guide och berättelse om **Rökland på Alnö** utanför Sundsvall — platsen, dess historia och den nya stadsdel som nu växer fram. Sajten är byggd för oss som bor på **Skansvägen 1** och alla andra som är nyfikna på marken under fötterna: från Alnö gamla kyrka och öns 560 miljoner år gamla berggrund till järnålderns gravfält, sågverkens tid och kommunens plan för 47 nya småhustomter.

Innehållet börjar lätt och går på djupet — läs rakt igenom eller hoppa runt i sidomenyn.

> **Obs:** Det här är en populärt hållen hembygdsguide, inte ett vetenskapligt verk. Årtal och uppgifter bygger på öppna källor (Sundsvalls kommun, Wikipedia, Alnö hembygdsförening m.fl.). Där en uppgift är osäker — som tolkningen av ortnamnet *Rökland* — sägs det uttryckligen i texten.

## Teknik

- [Next.js](https://nextjs.org) (App Router)
- React med egenbyggda UI-komponenter — inga tredjeparts komponentbibliotek
- Tailwind CSS med temafärger i `app/globals.css` (paletten *spruce & granite*)
- [motion](https://motion.dev) för animation (via `LazyMotion` i `components/motion-provider.tsx`)
- Hostas på [Vercel](https://vercel.com)

## Kom igång

```bash
pnpm install
pnpm dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Lägg till innehåll

Varje kapitel är en Markdown-fil i `content/`. Se [`content/README.md`](content/README.md) för frontmatter-format och ordning — sajten plockar upp nya filer automatiskt.

## Projektstruktur

- `app/` — routes, layout och globala stilar
- `components/` — UI-komponenter
- `content/` — kapitel som Markdown (en fil per kapitel)
- `lib/` — hjälpfunktioner (`content.ts` kapitelläsare, `cn()`, `Slot`)
- `public/icons/` — PWA-ikoner (granen) som `app/manifest.webmanifest` refererar till

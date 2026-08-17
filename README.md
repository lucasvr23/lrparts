# LR Parts Westerwald

Website voor LR Parts Westerwald — nieuwe & gebruikte Land Rover onderdelen,
eigen werkplaats en inkoop. Industriepark 40, 56593 Horhausen (DE).

Next.js 16 (App Router) + Tailwind v4, statische export naar GitHub Pages.
Site-taal is Duits.

## Lokaal draaien

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # statische export naar ./out
```

## Structuur

| Pad | Wat |
| --- | --- |
| `src/app/page.tsx` | de hele homepage (alle secties in één bestand) |
| `src/content/site.ts` | **bedrijfsgegevens, navigatie, onderdeelcategorieën** — hier aanpassen |
| `src/components/Header.tsx` | sticky nav + mobiel menu |
| `src/components/Wordmark.tsx` | het LR PARTS / WESTERWALD logo als tekst |
| `src/app/globals.css` | kleurtokens, overgenomen uit de bannerafbeelding |
| `public/images/` | de 11 foto's, met sprekende namen |

Teksten en gegevens staan zo veel mogelijk in `src/content/site.ts`, niet in de
componenten. Eén plek om te wijzigen.

## Kleuren

Uit `public/images/logo-banner.webp` gesampled:

| Token | Hex | Herkomst |
| --- | --- | --- |
| `pine-500` | `#17614A` | letters "LR PARTS" |
| `gold-500` | `#AA9D5D` | letters "WESTERWALD" |
| `forest-950` | `#0A3E1A` | onderkant verloop |
| `mist-100` | `#EAEDEA` | bovenkant verloop |

## Deploy naar GitHub Pages

`.github/workflows/deploy.yml` bouwt en publiceert bij elke push naar `main`.
Eenmalig instellen: **Settings → Pages → Source: GitHub Actions**.

De site komt op `https://lucasvr23.github.io/lrparts/`. Omdat dat een subpad is,
zet de workflow `NEXT_PUBLIC_BASE_PATH=/lrparts`.

> **Let op bij afbeeldingen:** met `images.unoptimized` zet `next/image` de
> basePath *niet* zelf voor de URL. Gebruik daarom altijd de helper
> `bild("bestand.webp")` uit `src/content/site.ts` — anders werken de foto's
> lokaal wel en op Pages niet.

Bij een eigen domein: `CNAME` in `public/` zetten en `NEXT_PUBLIC_BASE_PATH`
in de workflow leegmaken.

## Klantpreview (noindex)

De workflow zet `NEXT_PUBLIC_NOINDEX=1`. Daardoor krijgt de site:

- `<meta name="robots" content="noindex, nofollow, nocache">`
- een `robots.txt` met `Disallow: /`

Zo blijft de preview uit Google. De URL zelf blijft wél publiek bereikbaar —
noindex is geen wachtwoord. Deel de link dus alleen met de klant.

**Bij livegang:** haal `NEXT_PUBLIC_NOINDEX` uit
`.github/workflows/deploy.yml`. Vergeet je dat, dan wordt de site nooit
gevonden in Google. Controleren kan met:

```bash
NEXT_PUBLIC_BASE_PATH=/lrparts npm run build
grep -c 'name="robots"' out/index.html   # moet 0 zijn
cat out/robots.txt                        # moet "Allow: /" zijn
```

## Nog te doen

- [ ] **Impressum + Datenschutzerklärung** — in Duitsland wettelijk verplicht
      (§5 DDG / DSGVO). Footer linkt er al naar, de pagina's bestaan nog niet.
- [ ] Openingstijden: staat nu op "nach telefonischer Absprache".
- [ ] Contactformulier. GitHub Pages kan geen serverroutes, dus een externe
      dienst (Formspree, Web3Forms) of alleen telefoon/e-mail houden.
- [ ] Subpagina's per sectie, als de losse secties te vol worden.
- [ ] Ongebruikte foto's: `defender-110-winter`, `discovery-winter`,
      `logo-banner`.

/**
 * Zentrale Stelle für alle Betriebsdaten.
 * Hier ändern – nicht in den Komponenten.
 */

export const site = {
  name: "LR Parts Westerwald",
  tagline: "Neue & gebrauchte Land Rover Ersatzteile",
  strasse: "Industriepark 40",
  plz: "56593",
  ort: "Horhausen",
  land: "Deutschland",
  telefon: "+49 176 4343 6582",
  telefonHref: "tel:+4917643436582",
  email: "lrpartsww@gmail.com",
  emailHref: "mailto:lrpartsww@gmail.com",
} as const;

/** Basis-Pfad, damit die Seite auch unter /lrparts/ auf GitHub Pages läuft. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Vorschau-Modus: hält die Seite aus Google heraus (noindex, nofollow
 * und robots.txt mit Disallow).
 *
 * ACHTUNG: Vor dem echten Livegang muss NEXT_PUBLIC_NOINDEX aus
 * .github/workflows/deploy.yml entfernt werden – sonst bleibt die Seite
 * dauerhaft unsichtbar in Suchmaschinen.
 */
export const noindex = process.env.NEXT_PUBLIC_NOINDEX === "1";

/**
 * Pfad zu einem Bild in public/images/.
 *
 * Wichtig: bei `images.unoptimized` setzt next/image den basePath NICHT
 * selbst vor die URL. Ohne diesen Helfer laden die Bilder unter
 * /lrparts/ nicht. Also immer bild("datei.webp") benutzen.
 */
export const bild = (datei: string) => `${basePath}/images/${datei}`;

export const navigation = [
  { href: "#teileverkauf", label: "Teileverkauf" },
  { href: "#werkstatt", label: "Werkstatt" },
  { href: "#ankauf", label: "Ankauf" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

/** Fahrzeugreihen, für die Teile ab Lager verfügbar sind. */
export const modelle = [
  "Defender",
  "Discovery 1 – 4",
  "Range Rover",
  "Range Rover Sport",
  "Freelander",
  "Evoque",
] as const;

/**
 * Werkstatt: bewusst schmal gehalten. Schwerpunkt ist der Einbau der
 * großen Baugruppen aus dem eigenen Lager, keine Allround-Werkstatt.
 */
export const werkstattLeistungen = [
  "Motorwechsel inklusive Anbauteilen",
  "Wechsel von Schalt- und Automatikgetrieben",
  "Verteilergetriebe, Achsen und Differenziale",
  "Einbau weiterer Teile aus unserem Lager",
] as const;

export const teileKategorien = [
  {
    titel: "Motoren & Getriebe",
    text: "Geprüfte Motoren, Schalt- und Automatikgetriebe sowie Verteilergetriebe – direkt ab Lager.",
  },
  {
    titel: "Einspritzung & Kraftstoff",
    text: "Injektoren, Hochdruckpumpen und Düsen, gereinigt und auf Funktion geprüft.",
  },
  {
    titel: "Achsen & Antrieb",
    text: "Vorder- und Hinterachsen, Differenziale, Antriebswellen und Aufhängungsteile.",
  },
  {
    titel: "Karosserie & Anbauteile",
    text: "Türen, Klappen, Kotflügel, Stoßfänger und Anbauteile in verschiedenen Farben.",
  },
  {
    titel: "Elektrik & Steuergeräte",
    text: "Steuergeräte, Sensoren, Kabelbäume und Kleinelektrik für alle gängigen Baureihen.",
  },
  {
    titel: "Innenraum",
    text: "Sitze, Verkleidungen, Armaturen und Zubehör – gebraucht in gutem Zustand.",
  },
] as const;

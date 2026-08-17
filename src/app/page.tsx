import Image from "next/image";
import { Header } from "@/components/Header";
import { Wordmark } from "@/components/Wordmark";
import { basePath, bild, modelle, site, teileKategorien } from "@/content/site";

export default function Startseite() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <ModellLeiste />
        <Teileverkauf />
        <Werkstatt />
        <Ankauf />
        <UeberUns />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- Bausteine */

function Abschnitt({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Ueberschrift({
  kicker,
  titel,
  invers = false,
}: {
  kicker: string;
  titel: string;
  invers?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold-500">
        {kicker}
      </p>
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          invers ? "text-white" : "text-pine-900"
        }`}
      >
        {titel}
      </h2>
    </div>
  );
}

/* -------------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src={bild("halle-banner.webp")}
        alt="Betriebshalle von LR Parts Westerwald mit Land Rover Fahrzeugen"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-950/40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-mist-100 backdrop-blur-sm">
            Horhausen · Westerwald
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Neue &amp; gebrauchte{" "}
            <span className="text-gold-400">Land&nbsp;Rover</span> Ersatzteile
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-200">
            Großes Teilelager für Defender, Discovery, Range Rover und
            Freelander. Dazu eigene Werkstatt und Ankauf von Fahrzeugen –
            alles an einem Standort im Westerwald.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-forest-950 transition-colors hover:bg-gold-400"
            >
              Teil anfragen
            </a>
            <a
              href={site.telefonHref}
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {site.telefon}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Modell-Leiste */

function ModellLeiste() {
  return (
    <div className="border-y border-mist-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-pine-400">
          Teile ab Lager für
        </span>
        {modelle.map((m) => (
          <span key={m} className="text-sm font-semibold text-pine-800">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Teileverkauf */

function Teileverkauf() {
  return (
    <Abschnitt id="teileverkauf">
      <Ueberschrift kicker="Teileverkauf" titel="Vom Injektor bis zum Motor" />
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-pine-700">
        Wir zerlegen laufend Fahrzeuge und halten dadurch tausende geprüfte
        Gebrauchtteile vorrätig. Neuteile bestellen wir auf Wunsch dazu. Sagen
        Sie uns einfach, welches Teil Sie brauchen – am schnellsten geht es mit
        Fahrgestellnummer.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teileKategorien.map((k) => (
          <div
            key={k.titel}
            className="rounded-2xl border border-mist-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-pine-900/5"
          >
            <h3 className="text-base font-bold text-pine-900">{k.titel}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-pine-700">
              {k.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        <Bild
          src={bild("lager-motoren-getriebe.webp")}
          alt="Lagerhalle mit Land Rover Motoren und Getrieben auf Paletten"
        />
        <Bild
          src={bild("injektoren.webp")}
          alt="Aufgearbeitete Injektoren und Pumpe-Düse-Einheiten"
        />
      </div>
    </Abschnitt>
  );
}

function Bild({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-200">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

/* ---------------------------------------------------------------- Werkstatt */

function Werkstatt() {
  const leistungen = [
    "Wartung, Inspektion und Ölservice",
    "Reparatur von Motor, Getriebe und Antrieb",
    "Fehlersuche an Elektrik und Elektronik",
    "Einbau der bei uns gekauften Teile",
    "Vorbereitung für die Hauptuntersuchung",
    "Schweiß- und Rostarbeiten am Rahmen",
  ];

  return (
    <Abschnitt id="werkstatt" className="bg-grid bg-forest-950">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Ueberschrift
            kicker="Werkstatt"
            titel="Schrauber, die Land Rover kennen"
            invers
          />
          <p className="mt-5 text-base leading-relaxed text-mist-200">
            In unserer Werkstatt kümmern wir uns um genau die Baureihen, für die
            wir auch die Teile im Regal haben. Das spart Zeit bei der Diagnose
            und bei der Beschaffung – und Sie bekommen alles aus einer Hand.
          </p>

          <ul className="mt-8 space-y-3">
            {leistungen.map((l) => (
              <li key={l} className="flex gap-3 text-sm text-mist-100">
                <Haken />
                {l}
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-9 inline-flex rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Termin vereinbaren
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={bild("defender-flotte.webp")}
            alt="Mehrere Land Rover Defender auf dem Hof der Werkstatt"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Abschnitt>
  );
}

function Haken() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------- Ankauf */

function Ankauf() {
  return (
    <Abschnitt id="ankauf">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
          <Image
            src={bild("discovery-lagerplatz.webp")}
            alt="Angekaufte Land Rover Discovery auf dem Lagerplatz"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:order-1">
          <Ueberschrift
            kicker="Ankauf"
            titel="Wir kaufen Ihren Land Rover"
          />
          <p className="mt-5 text-base leading-relaxed text-pine-700">
            Defekter Motor, durchgerosteter Rahmen, Unfallschaden oder einfach
            keine HU mehr? Wir kaufen Land Rover in jedem Zustand – vom
            Bastlerfahrzeug bis zum gepflegten Defender. Auch komplette
            Teilebestände und Restposten nehmen wir.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                t: "Kurze Rückmeldung",
                d: "Fotos und Fahrgestellnummer per WhatsApp oder E-Mail – Sie bekommen zügig ein Angebot.",
              },
              {
                t: "Abholung inklusive",
                d: "Wir holen das Fahrzeug mit eigenem Anhänger ab, auch wenn es nicht mehr fährt.",
              },
              {
                t: "Abmeldung und Papiere",
                d: "Verwertungsnachweis und Abmeldung erledigen wir für Sie.",
              },
            ].map((p) => (
              <div key={p.t} className="border-l-2 border-gold-500 pl-4">
                <h3 className="text-sm font-bold text-pine-900">{p.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-pine-700">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Abschnitt>
  );
}

/* ----------------------------------------------------------------- Über uns */

function UeberUns() {
  return (
    <Abschnitt id="ueber-uns" className="bg-white">
      <Ueberschrift kicker="Über uns" titel="Land Rover aus Leidenschaft" />
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-pine-700">
          <p>
            LR Parts Westerwald sitzt im Industriepark in Horhausen, mitten im
            Westerwald. Aus der eigenen Begeisterung für die Marke ist ein
            Betrieb geworden, der heute Teilelager, Werkstatt und Fahrzeugankauf
            unter einem Dach vereint.
          </p>
          <p>
            Wir kennen die typischen Schwachstellen der Baureihen aus der
            täglichen Praxis. Deshalb bekommen Sie bei uns keine Teilenummer
            vorgelesen, sondern eine Einschätzung, die weiterhilft.
          </p>
          <p>
            Versand innerhalb Deutschlands und Europas – kleine Teile als Paket,
            Motoren und Getriebe auf der Palette. Abholung nach Absprache ist
            natürlich auch möglich.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Bild
            src={bild("betrieb-industriepark.webp")}
            alt="Betriebsgelände im Industriepark Horhausen"
          />
          <Bild
            src={bild("versand-paletten.webp")}
            alt="Versandfertig verpackte Teile auf Paletten"
          />
        </div>
      </div>
    </Abschnitt>
  );
}

/* ------------------------------------------------------------------ Kontakt */

function Kontakt() {
  const karteUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.strasse}, ${site.plz} ${site.ort}`,
  )}`;

  return (
    <Abschnitt id="kontakt" className="bg-grid bg-forest-950">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Ueberschrift
            kicker="Kontakt"
            titel="Sagen Sie uns, was Sie suchen"
            invers
          />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-200">
            Am schnellsten geht es per Telefon oder WhatsApp. Halten Sie am
            besten die Fahrgestellnummer bereit – dann finden wir das passende
            Teil sofort.
          </p>

          <dl className="mt-9 space-y-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                Telefon &amp; WhatsApp
              </dt>
              <dd className="mt-1.5">
                <a
                  href={site.telefonHref}
                  className="text-xl font-bold text-white hover:text-gold-300"
                >
                  {site.telefon}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                E-Mail
              </dt>
              <dd className="mt-1.5">
                <a
                  href={site.emailHref}
                  className="text-lg font-semibold text-white hover:text-gold-300"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                Adresse
              </dt>
              <dd className="mt-1.5 text-lg leading-snug text-white">
                {site.strasse}
                <br />
                {site.plz} {site.ort}
              </dd>
              <dd className="mt-2">
                <a
                  href={karteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gold-400 underline decoration-gold-500/40 underline-offset-4 hover:text-gold-300"
                >
                  Route planen
                </a>
              </dd>
            </div>
            <div>
              {/* TODO: feste Öffnungszeiten eintragen, sobald bekannt. */}
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">
                Öffnungszeiten
              </dt>
              <dd className="mt-1.5 text-base text-mist-200">
                Besuch und Abholung nach telefonischer Absprache.
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-2xl">
          <Image
            src={bild("defender-pickup-forst.webp")}
            alt="Land Rover Defender Pick-up mit Holzanhänger im Westerwald"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Abschnitt>
  );
}

/* ------------------------------------------------------------------- Footer */

function Footer() {
  return (
    <footer className="bg-forest-950 px-4 pb-10 pt-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-8 border-t border-white/10 pt-10">
          <div>
            <Wordmark invers />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-300">
              {site.tagline} · {site.strasse} · {site.plz} {site.ort}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm text-mist-300">
            {/* TODO: Impressum und Datenschutzerklärung sind in Deutschland Pflicht
                und müssen vor dem Livegang als eigene Seiten angelegt werden. */}
            <a href={`${basePath}/impressum/`} className="hover:text-white">
              Impressum
            </a>
            <a href={`${basePath}/datenschutz/`} className="hover:text-white">
              Datenschutz
            </a>
            <a href={site.emailHref} className="hover:text-white">
              {site.email}
            </a>
          </nav>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-mist-300/60">
          Land Rover, Defender, Discovery, Range Rover, Freelander und Evoque
          sind eingetragene Marken der Jaguar Land Rover Limited. LR Parts
          Westerwald ist ein unabhängiger Anbieter und steht in keiner
          Geschäftsbeziehung zu Jaguar Land Rover. Modell- und
          Markenbezeichnungen dienen ausschließlich der Beschreibung der
          Verwendbarkeit unserer Teile.
        </p>
      </div>
    </footer>
  );
}

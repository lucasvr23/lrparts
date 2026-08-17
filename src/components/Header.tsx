"use client";

import { useState } from "react";
import { navigation, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [offen, setOffen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist-200/80 bg-mist-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" aria-label={site.name} className="shrink-0">
          <Wordmark />
        </a>

        {/* Navigation ab Tablet */}
        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((eintrag) => (
            <a
              key={eintrag.href}
              href={eintrag.href}
              className="text-sm font-medium text-pine-800 transition-colors hover:text-pine-500"
            >
              {eintrag.label}
            </a>
          ))}
          <a
            href={site.telefonHref}
            className="rounded-full bg-pine-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-600"
          >
            Anrufen
          </a>
        </nav>

        {/* Menü-Schalter für Mobilgeräte */}
        <button
          type="button"
          onClick={() => setOffen((v) => !v)}
          aria-expanded={offen}
          aria-label="Menü öffnen"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-mist-200 text-pine-800 md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {offen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {offen && (
        <nav className="border-t border-mist-200 bg-mist-50 px-4 pb-5 pt-2 md:hidden">
          {navigation.map((eintrag) => (
            <a
              key={eintrag.href}
              href={eintrag.href}
              onClick={() => setOffen(false)}
              className="block border-b border-mist-200/70 py-3.5 text-base font-medium text-pine-800 last:border-0"
            >
              {eintrag.label}
            </a>
          ))}
          <a
            href={site.telefonHref}
            className="mt-4 block rounded-full bg-pine-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {site.telefon}
          </a>
        </nav>
      )}
    </header>
  );
}

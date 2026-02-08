import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 border-t-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Grid Layout für 3 Spalten */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Spalte 1: Über uns */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              🐝 Imkerverein Neustadt
            </h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Seit 1985 engagieren wir uns für den Naturschutz und die Förderung
              der Bienenhaltung. Werden Sie Teil unserer Gemeinschaft.
            </p>
          </div>

          {/* Spalte 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="hover:text-amber-400 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/honig-kaufen"
                  className="hover:text-amber-400 transition-colors"
                >
                  Honig kaufen
                </Link>
              </li>
              <li>
                <Link
                  href="/kurse"
                  className="hover:text-amber-400 transition-colors"
                >
                  Imkerkurse
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Musterstraße 12</li>
              <li>31535 Neustadt</li>
              <li className="mt-4">
                <a
                  href="mailto:info@imker-neustadt.de"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@imker-neustadt.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Imkerverein Neustadt e.V.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

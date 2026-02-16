import Link from "next/link";
import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-auto border-t-4 border-amber-600">
      {/* Layout Änderung: md:grid-cols-4 statt 3, damit Platz für die neue Spalte ist */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        {/* Spalte 1: Info */}
        <div>
          <h3 className="text-amber-500 font-bold mb-4 uppercase tracking-wider">
            {siteConfig.name}
          </h3>
          <p className="leading-relaxed mb-4 max-w-xs">
            Gemeinsam für die Bienen und die Natur in unserer Region. Wir
            fördern die Imkerei und den Naturschutz.
          </p>
        </div>

        {/* Spalte 2: Navigation (Nur Hauptmenü) */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">
            Menü
          </h3>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-amber-500 transition-colors block w-fit"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Spalte 3: Rechtliches (NEU: Separiert) */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">
            Rechtliches
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/impressum"
                className="hover:text-amber-500 transition-colors"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-amber-500 transition-colors"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        {/* Spalte 4: Kontakt */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider">
            Kontakt
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span>📧</span>
              <a
                href="mailto:info@imkerverein-neustadt.de"
                className="hover:text-amber-500"
              >
                info@imkerverein-neustadt.de
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span>📞</span>
              <span>05032 / 123 456</span>
            </li>
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>
                Musterstraße 12
                <br />
                31535 Neustadt
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-stone-950 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

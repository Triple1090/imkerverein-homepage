import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    // 'sticky top-0' fixiert den Header oben
    // 'backdrop-blur-md' sorgt für den Milchglas-Effekt
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
      <nav className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Bereich */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
            🐝
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-amber-900 leading-none">
              IMKERVEREIN
            </span>
            <span className="text-xs text-amber-600 font-medium tracking-widest uppercase">
              Neustadt e.V.
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Startseite
            </Link>
          </li>
          <li>
            <Link
              href="/ueber-uns"
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Über uns
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Kontakt
            </Link>
          </li>
          <li>
            {/* Ein Call-to-Action Button direkt im Header */}
            <Link
              href="/mitglied-werden"
              className="hidden md:block bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 hover:text-white transition-all"
            >
              Mitglied werden
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-amber-600 text-white shadow-md">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Vereinsname */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-amber-100 transition-colors"
        >
          🐝 Imkerverein Neustadt
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Startseite
            </Link>
          </li>
          <li>
            {/* Dieser Link funktioniert noch nicht, da die Seite fehlt - das ist okay */}
            <Link href="/ueber-uns" className="hover:underline">
              Über uns
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client"; // Wichtig: Macht die Komponente interaktiv (für Hooks)

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Hook für die aktuelle URL
import { siteConfig } from "../../config/siteConfig";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // z.B. "/ueber-uns"

  // Hilfsfunktion: Ist dieser Link gerade aktiv?
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm transition-all">
      <nav className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Bereich */}
        <Link href="/" className="group flex items-center gap-3">
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

        {/* Desktop Navigation (Dynamisch generiert) */}
        <ul className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                  isActive(item.href)
                    ? "text-amber-600 font-bold border-b-2 border-amber-600 pb-1" // Aktiver Style
                    : "text-gray-600 hover:text-amber-600 pb-1 border-b-2 border-transparent" // Inaktiver Style
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden text-amber-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMenuOpen ? (
            // X Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay (Nur sichtbar wenn isMenuOpen === true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100dvh-5rem)] bg-white border-b border-amber-100 shadow-xl animate-in slide-in-from-top-5 overflow-y-auto">
          <ul className="flex flex-col p-6 gap-4 text-center">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} // Menü schließen nach Klick
                  className={`block text-lg py-2 ${
                    isActive(item.href)
                      ? "text-amber-600 font-bold bg-amber-50 rounded-lg"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

import React from "react";
import Image from "next/image";
// 👇 1. Das ist der Turbo-Boost: Bild importieren!
import heroImage from "@/public/images/vitaly-gariev-unsplash.jpg";
import { events } from "@/src/config/events";
import { EventCard } from "@/src/components/ui/EventCard";

export const metadata = {
  title: "Termine & Veranstaltungen | Imkerverein Neustadt",
  description: "Kommende Treffen, Schulungen und Feste des Imkervereins.",
};

export default function TerminePage() {
  // Termine sortieren
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. HERO HEADER */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* HINTERGRUND BILD */}
        <div className="absolute inset-0 z-0 bg-amber-900">
          <Image
            src={heroImage} // <--- Objekt nutzen statt String
            alt="Imker im gelben Schutzanzug prüft Wabe"
            fill
            className="object-cover brightness-[0.4]"
            placeholder="blur" // <--- Das entfernt die 2 Sekunden Wartezeit (Sofort-Vorschau)
            priority // Lädt mit höchster Priorität
            sizes="100vw" // Optimierung für Handy-Datenvolumen
            quality={90}
          />
        </div>

        {/* CREDIT */}
        <div className="absolute bottom-2 right-4 z-10 text-[10px] text-white/40 hover:text-white/80 transition-colors">
          Foto von{" "}
          <a
            href="https://unsplash.com/de/fotos/imker-im-gelben-anzug-halt-wabengestell-mit-bienen-WeVnfc88Feg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30"
          >
            Vitaly Gariev
          </a>{" "}
          auf Unsplash
        </div>

        {/* INHALT */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            Unsere Termine
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            Komm vorbei! Egal ob Monatsversammlung, Schulung oder Sommerfest –
            wir freuen uns immer über Gäste.
          </p>
        </div>
      </section>

      {/* 2. LISTE DER TERMINE */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-200">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-stone-100">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Keine Termine geplant
              </h3>
              <p className="text-stone-500">
                Schau später nochmal vorbei oder abonniere unseren Newsletter.
              </p>
            </div>
          )}
        </div>

        <div className="text-center pt-8 border-t border-stone-200">
          <p className="text-stone-500 text-sm">
            Änderungen vorbehalten. Bitte prüfen Sie kurz vor der Veranstaltung
            nochmal diese Seite.
          </p>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import Image from "next/image"; // <--- Image Import wichtig
import { events } from "@/src/config/events";
import { EventCard } from "@/src/components/ui/EventCard";

export const metadata = {
  title: "Termine & Veranstaltungen | Imkerverein Neustadt",
  description: "Kommende Treffen, Schulungen und Feste des Imkervereins.",
};

export default function TerminePage() {
  // Sortieren: Zukünftige Termine (optional könnte man vergangene filtern)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. HERO HEADER mit Bild */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* HINTERGRUND BILD */}
        <div className="absolute inset-0 z-0 bg-amber-900">
          <Image
            src="/images/vitaly-gariev-unsplash.jpg" // Pfad relativ zu 'public'
            alt="Imker im gelben Schutzanzug prüft Wabe"
            fill
            className="object-cover brightness-[0.4]" // Abdunklung für Lesbarkeit
            priority
          />
        </div>

        {/* CREDIT (Unten rechts, dezent) */}
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

        {/* INHALT (Titel & Text) */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
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

        {/* Optional: Hinweis auf Google Kalender oder Export */}
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

import React from "react";
// Wir importieren unsere neuen Bausteine
import { Hero } from "../components/sections/Hero";
import { FeatureCard } from "../components/ui/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. Der Hero Bereich (ausgelagert) */}
      <Hero />

      {/* 2. Die Info-Karten */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-20">
        <FeatureCard
          title="Regionale Natur"
          text="Wir pflegen Blühstreifen und Nistplätze in ganz Neustadt. Ein Paradies für Bienen."
          icon="🌿"
        />
        <FeatureCard
          title="Echter Honig"
          text="Direkt vom Imker nebenan – ohne Zusatzstoffe, 100% Natur aus deiner Region."
          icon="🍯"
        />
        <FeatureCard
          title="Aktives Wissen"
          text="Monatliche Treffen und Schulungen für Anfänger und Profis im Vereinsheim."
          icon="🎓"
        />
      </section>

      {/* Hier könnten weitere Sektionen folgen, z.B. <LatestNews /> oder <CallToAction /> */}
    </main>
  );
}

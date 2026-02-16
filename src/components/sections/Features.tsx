import React from "react";
// Achte darauf, dass der Import-Pfad zu deiner FeatureCard stimmt!
import { FeatureCard } from "../ui/FeatureCard";

export function Features() {
  return (
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
  );
}

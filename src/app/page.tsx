import React from "react";
// Wir importieren unsere neuen Bausteine
import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. Der Hero Bereich (ausgelagert) */}
      <Hero />
      <Features />

      {/* Hier könnten weitere Sektionen folgen, z.B. <LatestNews /> oder <CallToAction /> */}
    </main>
  );
}

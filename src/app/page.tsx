import React from "react";
// WICHTIG: Wir importieren die optimierte Image-Komponente
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero-Bereich mit Grid-Layout (Text links, Bild rechts) */}
      <section className="bg-amber-50 py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Linke Spalte: Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Naturschutz trifft{" "}
              <span className="text-amber-600">Tradition</span>.
            </h1>
            <p className="text-lg text-amber-800 mb-8 leading-relaxed">
              Der Imkerverein Neustadt setzt sich seit 1985 für den Erhalt der
              heimischen Bienen ein. Lerne unser Handwerk kennen.
            </p>
            <div className="flex gap-4">
              <Link
                href="/mitglied-werden"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Mitglied werden
              </Link>
              <Link
                href="/ueber-uns"
                className="bg-white text-amber-900 border border-amber-200 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: Bild */}
          <div className="relative">
            {/* TIPP FÜR DEN SHOWCASE: 
              Bilder brauchen immer 'width' und 'height', damit der Browser den Platz reserviert 
              und die Seite beim Laden nicht "springt" (Layout Shift).
              
              Das 'alt'-Attribut ist Pflicht für Google (SEO) und blinde Nutzer!
            */}
            <Image
              src="/hero-biene.jpg" // Next.js sucht automatisch im 'public' Ordner
              alt="Eine Biene auf einer gelben Blüte"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover"
              priority // Das Bild ist "above the fold" (sofort sichtbar), also laden wir es sofort!
            />
          </div>
        </div>
      </section>

      {/* Info-Karten (unverändert, aber visuell sauberer) */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Regionale Natur"
          text="Wir pflegen Blühstreifen und Nistplätze in ganz Neustadt."
        />
        <FeatureCard
          title="Echter Honig"
          text="Direkt vom Imker nebenan – ohne Zusatzstoffe, 100% Natur."
        />
        <FeatureCard
          title="Aktives Wissen"
          text="Monatliche Treffen und Schulungen für Anfänger und Profis."
        />
      </section>
    </main>
  );
}

// DRY-Prinzip: Eine kleine Hilfs-Komponente direkt hier in der Datei
// (Für kleine Dinge ist das okay, bei größeren kommt es in /components)
function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-8 border border-amber-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-amber-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

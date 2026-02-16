import React from "react";
import Image from "next/image";
// 👇 1. Das Bild statisch importieren für den "Instant-Load"-Effekt
import heroImage from "@/public/images/douglas-raggio-unsplash.jpg";

// 👇 Pfade korrigiert (meistens ist @/config richtig, ohne 'src')
import { siteConfig } from "@/src/config/site";
import { boardMembers } from "@/src/config/team";
import { TeamCard } from "@/src/components/ui/TeamCard";

export const metadata = {
  title: "Über uns | Imkerverein Neustadt",
  description: "Die Geschichte des Vereins und der aktuelle Vorstand.",
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. HEADER: Jetzt optimiert */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* HINTERGRUND BILD */}
        <div className="absolute inset-0 z-0 bg-amber-900">
          <Image
            src={heroImage} // <--- Objekt nutzen statt String
            alt="Imkergruppe bei der Durchsicht"
            fill
            className="object-cover brightness-[0.4]" // Abdunklung beibehalten
            placeholder="blur" // <--- Sofortige Vorschau (Blur)
            priority // Lädt mit höchster Priorität
            sizes="100vw" // Wichtig für Mobile-Datenvolumen
            quality={90}
          />
        </div>

        {/* CREDIT */}
        <div className="absolute bottom-2 right-4 z-10 text-[10px] text-white/40 hover:text-white/80 transition-colors">
          Foto von{" "}
          <a
            href="https://unsplash.com/de/fotos/vier-personen-im-anti-bienenbiss-anzug-halten-bei-tageslicht-waben-vZGvVTO1pIg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30"
          >
            Douglas Raggio
          </a>{" "}
          auf Unsplash
        </div>

        {/* INHALT */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-white animate-in fade-in zoom-in duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl">
            Über uns
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            Seit 1985 engagieren wir uns für Bienen, Natur und Menschen in
            unserer Region. Wir sind mehr als nur Honig.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* 2. SEKTION: Geschichte / Text */}
        <section className="max-w-3xl mx-auto text-lg text-stone-700 leading-relaxed space-y-6">
          <p>
            Der <strong>{siteConfig.name}</strong> wurde gegründet, um Imker in
            der Region zu vernetzen und das Wissen um die Bienenhaltung zu
            bewahren. Was als kleiner Stammtisch begann, ist heute eine
            lebendige Gemeinschaft mit über 120 Mitgliedern.
          </p>
          <p>
            Unser Ziel ist nicht nur die Honiggewinnung, sondern vor allem der
            Naturschutz. Durch Blühstreifen-Aktionen und Aufklärungsarbeit in
            Schulen tragen wir dazu bei, dass Neustadt bienenfreundlicher wird.
          </p>
        </section>

        {/* 3. SEKTION: Der Vorstand */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Der Vorstand
            </h2>
            <p className="text-stone-600">
              Deine Ansprechpartner für alle Fragen rund um den Verein.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
            {boardMembers.map((member) => (
              <TeamCard key={member.role} member={member} />
            ))}
          </div>
        </section>

        {/* 4. SEKTION: Dokumente / Satzung */}
        <section className="bg-amber-50 rounded-3xl p-8 md:p-12 text-center border border-amber-100 shadow-sm">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            Vereinssatzung
          </h2>
          <p className="text-stone-700 mb-6 max-w-xl mx-auto">
            Transparenz ist uns wichtig. Hier findest du unsere aktuelle Satzung
            und Beitragsordnung zum Nachlesen.
          </p>
          <button className="bg-white border-2 border-amber-200 text-amber-800 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 hover:border-amber-300 transition-all shadow-sm transform hover:-translate-y-1">
            📄 Satzung herunterladen (PDF)
          </button>
        </section>
      </div>
    </main>
  );
}

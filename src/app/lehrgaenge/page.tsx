import React from "react";
import Link from "next/link";
import Image from "next/image"; // <--- Image Komponente
// 👇 WICHTIG: Wir importieren das Bild, damit Next.js es optimieren kann (Blur-Up Effekt)
import heroImage from "@/public/images/simon-kadula-unsplash.jpg";

import { HelpCircle, Calendar, MapPin, Euro } from "lucide-react";
import { FeatureCard } from "@/src/components/ui/FeatureCard";

export const metadata = {
  title: "Imker-Ausbildung",
  description:
    "Werde Imker in Neustadt. Theorie, Praxis und dein eigenes Volk.",
};

export default function LehrgangPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. HERO: Jetzt optimiert für Performance & Ladezeit */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* HINTERGRUND BILD */}
        <div className="absolute inset-0 z-0 bg-amber-900">
          <Image
            src={heroImage} // <--- Objekt statt String nutzen!
            alt="Bienen auf einer Wabe"
            fill
            className="object-cover brightness-[0.4]" // Abdunklung beibehalten
            placeholder="blur" // <--- Das löst dein Lade-Problem! (Verschwommene Vorschau)
            priority // Lädt sofort
            sizes="100vw" // Wichtig für Mobile-Performance
            quality={90}
          />
        </div>

        {/* CREDIT */}
        <div className="absolute bottom-2 right-4 z-10 text-[10px] text-white/40 hover:text-white/80 transition-colors">
          Foto von{" "}
          <a
            href="https://unsplash.com/de/fotos/ein-haufen-bienen-die-sich-auf-einem-bienenstock-befinden-DIwC450lRGI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30"
          >
            Simon Kadula
          </a>{" "}
          auf Unsplash
        </div>

        {/* INHALT */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 text-white animate-in fade-in zoom-in duration-700">
          <span className="inline-block bg-amber-600/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2 border border-amber-500/50 shadow-lg">
            Ausbildung 2024
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
            Vom Anfänger zum <br />
            eigenen Honig.
          </h1>
          <p className="text-xl text-stone-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
            Lerne das Imkern sicher und praxisnah. Wir begleiten dich ein ganzes
            Jahr lang – vom ersten Rähmchen bis zur Ernte.
          </p>
          <div className="pt-8">
            <Link
              href="#anmeldung"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 hover:scale-105 transition-all shadow-xl border-2 border-transparent hover:border-amber-300"
            >
              Jetzt Platz sichern
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* 2. VALUE PROPS */}
        <section className="grid md:grid-cols-3 gap-8 -mt-24 relative z-20">
          <FeatureCard
            title="Keine Ausrüstung nötig"
            text="Für den Start stellen wir dir Schutzkleidung und Werkzeug. Du musst nichts kaufen, bevor du sicher bist."
            icon="🧤"
          />
          <FeatureCard
            title="Persönlicher Pate"
            text="Ein erfahrener Imker steht dir auch außerhalb der Kurse für Fragen zur Seite."
            icon="🤝"
          />
          <FeatureCard
            title="Zertifizierter Abschluss"
            text="Du erhältst den offiziellen Sachkundenachweis des Landesverbands Hannoverscher Imker."
            icon="📜"
          />
        </section>

        {/* 3. TIMELINE */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Dein Bienenjahr
            </h2>
            <p className="text-stone-600 text-lg">
              So läuft die Ausbildung ab. Theorie und Praxis gehen Hand in Hand.
            </p>
          </div>

          <div className="relative border-l-4 border-amber-200 ml-4 md:ml-auto md:mx-auto max-w-3xl space-y-12 pl-8 md:pl-0">
            {/* Timeline Item 1 */}
            <div className="relative md:flex items-center justify-between group">
              <div className="absolute -left-[39px] md:left-1/2 md:-ml-3 w-6 h-6 bg-amber-500 rounded-full border-4 border-stone-50 shadow-sm z-10 transition-transform group-hover:scale-125" />
              <div className="md:w-[45%] md:text-right mb-2 md:mb-0">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">
                  März - April
                </span>
                <h3 className="text-xl font-bold text-stone-800">
                  Grundlagen & Start
                </h3>
              </div>
              <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-stone-100 group-hover:border-amber-200 transition-colors">
                <p className="text-stone-600 leading-relaxed">
                  Biologie der Biene, Beutenbau und die erste Durchsicht am
                  Lehrbienenstand. Wir öffnen gemeinsam die ersten Völker.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative md:flex items-center justify-between flex-row-reverse group">
              <div className="absolute -left-[39px] md:left-1/2 md:-ml-3 w-6 h-6 bg-amber-500 rounded-full border-4 border-stone-50 shadow-sm z-10 transition-transform group-hover:scale-125" />
              <div className="md:w-[45%] mb-2 md:mb-0">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">
                  Mai - Juni
                </span>
                <h3 className="text-xl font-bold text-stone-800">
                  Schwarmzeit & Ableger
                </h3>
              </div>
              <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-stone-100 group-hover:border-amber-200 transition-colors">
                <p className="text-stone-600 leading-relaxed">
                  Die Hochsaison! Wir lernen, wie man Schwärme verhindert und
                  sogar eigene Ableger bildet.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative md:flex items-center justify-between group">
              <div className="absolute -left-[39px] md:left-1/2 md:-ml-3 w-6 h-6 bg-amber-500 rounded-full border-4 border-stone-50 shadow-sm z-10 transition-transform group-hover:scale-125" />
              <div className="md:w-[45%] md:text-right mb-2 md:mb-0">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">
                  Juli - August
                </span>
                <h3 className="text-xl font-bold text-stone-800">
                  Die Honigernte 🍯
                </h3>
              </div>
              <div className="md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-stone-100 group-hover:border-amber-200 transition-colors">
                <p className="text-stone-600 leading-relaxed">
                  Der süße Lohn. Entdeckeln, Schleudern, Abfüllen. Du nimmst
                  dein erstes Glas selbst geschleuderten Honig mit nach Hause.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HARD FACTS & CONVERSION */}
        <section
          id="anmeldung"
          className="bg-stone-900 text-stone-300 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          {/* Deko Hintergrund */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Bereit für dein{" "}
                <span className="text-amber-500">Abenteuer</span>?
              </h2>
              <p className="text-lg text-stone-400">
                Die Plätze sind auf 15 Teilnehmer begrenzt, um eine intensive
                Betreuung zu sichern.
              </p>

              <div className="space-y-4 pt-4 border-t border-stone-800 mt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500">
                      Startdatum
                    </div>
                    <div className="text-white font-medium">15. März 2024</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500">
                      Ort
                    </div>
                    <div className="text-white font-medium">
                      Lehrbienenstand Neustadt
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
                    <Euro className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500">
                      Kursgebühr
                    </div>
                    <div className="text-white font-medium">
                      150€ (inkl. Material & Zertifikat)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Karte */}
            <div className="bg-white text-stone-900 p-8 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-1">
              <h3 className="font-bold text-2xl mb-4 text-stone-900">
                Interesse anmelden
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Wir senden dir den genauen Ablaufplan und das Anmeldeformular
                unverbindlich per E-Mail zu.
              </p>
              <Link
                href="/kontakt?betreff=Anfrage Lehrgang"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-center py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-lg"
              >
                Infos anfordern →
              </Link>
              <p className="text-xs text-center text-stone-400 mt-4">
                Keine sofortige Buchung. Keine versteckten Kosten.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="max-w-3xl mx-auto space-y-8 pb-10">
          <h2 className="text-2xl font-bold text-center text-amber-900">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="Muss ich Vorkenntnisse haben?"
              answer="Nein, überhaupt nicht. Der Kurs ist speziell für absolute Anfänger konzipiert. Wir holen dich dort ab, wo du stehst."
            />
            <FaqItem
              question="Brauche ich einen eigenen Garten?"
              answer="Nicht zwingend. Viele Imker stellen ihre Bienen bei Landwirten oder in Kleingärten auf. Wir haben eine Karte mit Stellplatz-Angeboten in der Region."
            />
            <FaqItem
              question="Wie viel Zeit muss ich einplanen?"
              answer="Im Frühling/Sommer (April-Juli) etwa 1 Stunde pro Woche pro Bienenvolk. Im Winter ruhen die Bienen, da gibt es kaum praktische Arbeit."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-all cursor-default">
      <h4 className="font-bold text-lg text-stone-800 mb-2 flex items-center gap-3">
        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
        {question}
      </h4>
      <p className="text-stone-600 pl-8 leading-relaxed">{answer}</p>
    </div>
  );
}

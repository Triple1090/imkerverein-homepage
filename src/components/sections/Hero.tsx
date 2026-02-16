import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-amber-50 py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Linke Spalte: Text */}
        <div className="text-left animate-in slide-in-from-left-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Naturschutz trifft <span className="text-amber-600">Tradition</span>
            .
          </h1>
          <p className="text-lg text-amber-800 mb-8 leading-relaxed">
            Der Imkerverein Neustadt setzt sich seit 1985 für den Erhalt der
            heimischen Bienen ein. Lerne unser Handwerk kennen.
          </p>
          <div className="flex flex-wrap gap-4">
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
        {/* 'group' ist wichtig, damit wir beim Hovern des Containers etwas auslösen können */}
        <div className="relative group animate-in slide-in-from-right-10 duration-700 delay-200">
          <Image
            src="/hero-biene.jpg"
            alt="Eine Honigbiene auf einer gelben Blüte"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 object-cover"
            priority
          />

          {/* 👇 Der Bildnachweis (Erscheint nur bei Hover) */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-full shadow-sm">
              Foto von{" "}
              <a
                href="https://unsplash.com/de/fotos/honigbiene-sitzt-auf-gelber-blume-yxXpjF-RrnA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline decoration-white/50 underline-offset-2"
              >
                Kai Wenzel
              </a>{" "}
              auf Unsplash
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

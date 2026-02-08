import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero-Bereich */}
      <section className="bg-amber-50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
          Imkerverein Neustadt
        </h1>
        <p className="text-xl text-amber-800 max-w-2xl mx-auto">
          Traditionelle Imkerei und Naturschutz in unserer Region.
        </p>
        <button className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
          Mitglied werden
        </button>
      </section>

      {/* Info-Karten */}
      <section className="py-16 max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-amber-100 rounded-xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-amber-900">Natur</h2>
          <p className="text-gray-600">
            Wir pflegen Stellplätze und schützen die lokale Flora.
          </p>
        </div>
        <div className="p-6 border border-amber-100 rounded-xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-amber-900">Honig</h2>
          <p className="text-gray-600">
            Echter regionaler Honig direkt von unseren Imkern.
          </p>
        </div>
        <div className="p-6 border border-amber-100 rounded-xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-amber-900">Wissen</h2>
          <p className="text-gray-600">
            Schulungen und Austausch für Jung und Alt.
          </p>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import Script from "next/script";
import { useContactForm } from "@/src/hooks/useContactForm";

export default function KontaktPage() {
  const { status, submitForm, reset } = useContactForm();

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
        <div className="text-6xl mb-4">🐝</div>
        <h1 className="text-3xl font-bold text-amber-900 mb-4">
          Nachricht verflogen!
        </h1>
        <p className="text-gray-600 text-lg">
          Vielen Dank. Wir haben Ihre Nachricht erhalten und summen bald zurück.
        </p>
        <button
          onClick={reset}
          className="mt-8 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all shadow-md font-bold"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {/* Das Script muss hier geladen werden, damit window.Botpoison verfügbar wird */}
      <Script
        src="https://unpkg.com/@botpoison/browser"
        strategy="lazyOnload"
      />

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">Kontakt</h1>
        <p className="text-gray-600">
          Egal ob Fragen zur Imkerei oder Interesse an einer Mitgliedschaft –
          wir freuen uns auf Ihre Nachricht.
        </p>
      </div>

      <form
        onSubmit={submitForm}
        className="bg-white p-8 rounded-3xl border border-amber-100 shadow-xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-amber-900 mb-2"
            >
              Ihr Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Max Mustermann"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-stone-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-amber-900 mb-2"
            >
              E-Mail Adresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="max@beispiel.de"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-stone-300"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="betreff"
            className="block text-sm font-semibold text-amber-900 mb-2"
          >
            Betreff
          </label>
          <select
            id="betreff"
            name="betreff"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white"
          >
            <option>Allgemeine Anfrage</option>
            <option>Mitgliedschaft</option>
            <option>Honigbestellung</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-amber-900 mb-2"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Wie können wir Ihnen helfen?"
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder:text-stone-300"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${
            status === "loading"
              ? "bg-stone-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700 hover:-translate-y-1 active:scale-95"
          }`}
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Verarbeitung...
            </>
          ) : (
            "Nachricht absenden"
          )}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-center font-medium bg-red-50 p-3 rounded-lg border border-red-100">
            Da ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut.
          </p>
        )}
      </form>
    </div>
  );
}

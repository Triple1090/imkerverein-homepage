"use client";

import { useState } from "react";

// 1. Wir definieren die Typen, statt 'any' zu nutzen
type BotpoisonConfig = {
  publicKey: string;
};

type BotpoisonSolution = {
  solution: string;
};

interface BotpoisonInstance {
  challenge: () => Promise<BotpoisonSolution>;
}

// Das Konstruktor-Interface (new Botpoison(...))
interface BotpoisonConstructor {
  new (config: BotpoisonConfig): BotpoisonInstance;
}

// Wir erweitern das globale Window-Interface sauber
declare global {
  interface Window {
    Botpoison?: BotpoisonConstructor; // '?' weil es erst geladen werden muss
  }
}

export function useContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      // Sicherheits-Checks
      if (!process.env.NEXT_PUBLIC_BOTPOISON_KEY)
        throw new Error("Botpoison Key fehlt");
      if (!process.env.NEXT_PUBLIC_FORMSPARK_URL)
        throw new Error("Formspark URL fehlt");

      // Prüfen, ob das Script geladen ist
      if (!window.Botpoison) {
        throw new Error("Botpoison Script wurde noch nicht geladen.");
      }

      // 2. Typensichere Instanziierung
      const botpoison = new window.Botpoison({
        publicKey: process.env.NEXT_PUBLIC_BOTPOISON_KEY,
      });

      const { solution } = await botpoison.challenge();

      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _botpoison: solution,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Fehler beim Versand:", error);
      setStatus("error");
    }
  }

  return { status, submitForm, reset: () => setStatus("idle") };
}

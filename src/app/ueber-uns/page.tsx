import React from "react";
import { siteConfig } from "@/src/config/siteConfig";

export default function UeberUnsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-amber-900 mb-6">
        Über {siteConfig.name}
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        {siteConfig.description}
        <br />
        <br />
        Hier entsteht die Geschichte des Vereins...
      </p>
    </main>
  );
}

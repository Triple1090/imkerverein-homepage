// src/config/site.ts
export const siteConfig = {
  name: "Imkerverein Neustadt e.V.",
  shortName: "Imkerverein Neustadt",
  description: "Naturschutz trifft Tradition. Seit 1985.",
  contact: {
    email: "info@imkerverein-neustadt.de",
    address: ["Musterstraße 12", "31535 Neustadt"],
    phone: "05032 / 123 456",
  },
  nav: [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Mitglied werden", href: "/mitglied-werden" },
    { label: "Termine", href: "/termine" },
    { label: "Imker-Lehrgang", href: "/lehrgaenge" },
  ],
};

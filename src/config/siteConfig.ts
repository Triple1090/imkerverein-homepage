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
    { label: "Lehrgänge", href: "/kurse" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
  ],
  vorstand: [
    {
      vorsitzEins: "Sven Wunder",
      email: "vorstand@imkerverein-neustadt.de",
      telefon: "05072123456",
    },
    {
      vorsitzZwei: "Jürgen Hochegger",
      email: "vorstand@imkerverein-neustadt.de",
    },
    {
      kassenwart: "Herr Kassenwart",
      email: "kassenwart@imkerverein-neustadt.de",
    },
    {
      schriftfuehrer: "Herr Schriftfuehrer",
      email: "schriftfuehrer@imkerverein-neustadt.de",
    },
    {
      medienwart: "Tjark Radewaldt",
      email: "medienwart@imkerverein-neustadt.de",
    },
    {
      honigobmann: "Herr Honigobmann",
      email: "honigobmann@imkerverein-neustadt.de",
    },
  ],
};

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
      role: "1. Vorstandsmitglied",
      namePerson: "Sven Wunder",
      email: "vorstand@imkerverein-neustadt.de",
      telefon: "05072123456",
    },
    {
      role: "2. Vorstandsmitglied",
      namePerson: "Jürgen Hochegger",
      email: "vorstand@imkerverein-neustadt.de",
      phone: "05072123456",
    },
    {
      role: "Kassenwart",
      namePerson: "Jürgen Hochegger",
      email: "vorstand@imkerverein-neustadt.de",
      phone: "05072123456",
    },
    {
      role: "Medienwart",
      namePerson: "Tjark Radewaldt",
      email: "vorstand@imkerverein-neustadt.de",
      phone: "05072123456",
    },
  ],
};

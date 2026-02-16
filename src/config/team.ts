export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  image?: string; // Optional: Falls Bilder vorhanden sind
}

export const boardMembers: TeamMember[] = [
  {
    name: "Dr. Sabine Honig",
    role: "1. Vorsitzende",
    email: "vorsitz@imkerverein-neustadt.de",
    // image: "/images/vorstand/sabine.jpg" <--- Später einkommentieren
  },
  {
    name: "Michael Wabe",
    role: "2. Vorsitzender",
    email: "stellvertreter@imkerverein-neustadt.de",
  },
  {
    name: "Petra Pollen",
    role: "Kassenwartin",
    email: "kasse@imkerverein-neustadt.de",
  },
  {
    name: "Klaus Drohne",
    role: "Schriftführer",
    email: "schriftfuehrer@imkerverein-neustadt.de",
  },
  {
    name: "Julia Stich",
    role: "Obfrau für Bienengesundheit",
  },
];

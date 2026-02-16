export type EventType = "versammlung" | "schulung" | "fest" | "sonstiges";

export interface ImkerEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: EventType;
}

export const events: ImkerEvent[] = [
  {
    id: "1",
    title: "Monatsversammlung März",
    date: "2024-03-15",
    time: "19:00",
    location: "Gasthaus 'Zur Biene', Hauptstr. 12",
    description: "Thema: Auswinterung der Völker und erste Durchsicht.",
    type: "versammlung",
  },
  {
    id: "2",
    title: "Anfängerkurs: Praxis am Bienenstand",
    date: "2024-04-06",
    time: "10:00",
    location: "Lehrbienenstand im Stadtpark",
    description:
      "Bitte Schutzkleidung mitbringen! Bei Regen findet der Theorie-Teil statt.",
    type: "schulung",
  },
  {
    id: "3",
    title: "Honig-Schleudertag",
    date: "2024-06-10",
    time: "09:00",
    location: "Vereinsheim",
    description:
      "Gemeinsames Schleudern der Frühtracht. Helfer sind willkommen.",
    type: "fest",
  },
];

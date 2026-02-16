import React from "react";
import { ImkerEvent } from "@/src/config/events";
import { Calendar, MapPin, Clock } from "lucide-react"; // npm install lucide-react falls noch nicht da

// Helper für schönes Datumsformat (z.B. "15. März")
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString("de-DE", { month: "short" }).toUpperCase(),
  };
}

export function EventCard({ event }: { event: ImkerEvent }) {
  const { day, month } = formatDate(event.date);

  // Farb-Kodierung je nach Typ (optionales Detail)
  const typeColors = {
    versammlung: "bg-blue-100 text-blue-700",
    schulung: "bg-green-100 text-green-700",
    fest: "bg-amber-100 text-amber-700",
    sonstiges: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-stone-100 transition-all flex flex-col sm:flex-row gap-6 items-start">
      {/* Das Datum-Badge */}
      <div className="flex-shrink-0 w-20 h-20 bg-amber-50 rounded-2xl flex flex-col items-center justify-center border border-amber-100 text-amber-900 group-hover:scale-105 transition-transform">
        <span className="text-2xl font-bold leading-none">{day}</span>
        <span className="text-xs font-bold tracking-widest mt-1">{month}</span>
      </div>

      {/* Inhalt */}
      <div className="flex-grow space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
            {event.title}
          </h3>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider ${typeColors[event.type]}`}
          >
            {event.type}
          </span>
        </div>

        <p className="text-stone-600 leading-relaxed">{event.description}</p>

        {/* Metadaten Zeile */}
        <div className="flex flex-wrap gap-4 text-sm text-stone-500 pt-2 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            {event.time} Uhr
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Mail, User } from "lucide-react";
import { TeamMember } from "@/src/config/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-200 transition-all text-center group">
      {/* Das Bild oder der Platzhalter */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-50 group-hover:border-amber-100 transition-colors relative bg-stone-100 flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <User className="w-12 h-12 text-stone-300" />
        )}
      </div>

      {/* Text Info */}
      <h3 className="text-xl font-bold text-stone-900 mb-1">{member.name}</h3>
      <div className="text-amber-600 font-medium text-sm uppercase tracking-wider mb-4">
        {member.role}
      </div>

      {/* E-Mail Link (nur wenn vorhanden) */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors text-sm py-2 px-4 rounded-full bg-stone-50 hover:bg-amber-50"
        >
          <Mail className="w-4 h-4" />
          Kontakt
        </a>
      )}
    </div>
  );
}

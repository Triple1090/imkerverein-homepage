import React from "react";

interface FeatureCardProps {
  title: string;
  text: string;
  icon?: React.ReactNode; // Optional: Falls du später Icons hinzufügen willst
}

export function FeatureCard({ title, text, icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Optionales Icon (wird nur angezeigt, wenn übergeben) */}
      {icon && (
        <div className="mb-4 text-4xl bg-amber-50 w-16 h-16 flex items-center justify-center rounded-full text-amber-600">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-bold text-amber-900 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

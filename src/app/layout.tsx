import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 WICHTIG: Die Komponenten müssen in diesem Ordner liegen!
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

// 👇 NEU: Wir laden die Config für zentrale SEO-Daten
import { siteConfig } from "../config/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 PROFI-TIPP: Dynamische Metadaten statt Hardcoding
export const metadata: Metadata = {
  title: {
    default: siteConfig.name, // "Imkerverein Neustadt e.V."
    template: `%s | ${siteConfig.name}`, // Automatisch: "Kontakt | Imkerverein Neustadt e.V."
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-stone-50`}
      >
        <Header />

        {/* 'flex-grow' sorgt dafür, dass der Footer immer unten bleibt, 
            auch bei wenig Inhalt auf der Seite */}
        <main className="flex-grow flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 HIER ist dein korrigierter Import
import Header from "@/src/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imkerverein Neustadt",
  description: "Offizielle Website des Imkervereins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 1. Der Header wird hier eingefügt */}
        <Header />

        {/* 2. Der Seiteninhalt folgt danach */}
        <main>{children}</main>
      </body>
    </html>
  );
}

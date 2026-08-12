import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Newsreader, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "@/components/Lightbox";
import { brand } from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — An Architectural Record`,
  description: brand.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${zenOldMincho.variable} ${newsreader.variable} ${archivo.variable}`}>
      <body className="grain">
        <LightboxProvider>{children}</LightboxProvider>
      </body>
    </html>
  );
}

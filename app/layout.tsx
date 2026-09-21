import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATTIMI Wedding Experience",
  description:
    "Live Music, DJ Set, Entertainment e Show per il tuo matrimonio. Roma | Italia & Destination Weddings.",
  openGraph: {
    title: "ATTIMI Wedding Experience",
    description: "Diamo ritmo alle emozioni.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#111010] text-[#F8E9D8]`}
      >
        {children}
      </body>
    </html>
  );
}

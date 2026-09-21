import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Servizi — ATTIMI Wedding Experience",
  description: "Musica & DJ Set, Servizi IT, Fotografia & Video, Fiori & Décor. Tutto sotto un'unica regia.",
};

export default function Servizi() {
  return <ServicesPage />;
}

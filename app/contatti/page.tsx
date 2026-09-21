import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contatti — ATTIMI Wedding Experience",
  description: "Costruiamo insieme il tuo matrimonio. Contattaci per una proposta personalizzata.",
};

export default function Contatti() {
  return <ContactPage />;
}

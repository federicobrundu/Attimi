import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Chi Siamo — ATTIMI Wedding Experience",
  description: "Scopri la nostra missione, filosofia e il team di ATTIMI Wedding Experience.",
};

export default function About() {
  return <AboutPage />;
}

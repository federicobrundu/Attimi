import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio — ATTIMI Wedding Experience",
  description: "Live Moments: una selezione di matrimoni realizzati da ATTIMI Wedding Experience.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}

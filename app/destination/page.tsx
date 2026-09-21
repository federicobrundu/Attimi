import type { Metadata } from "next";
import DestinationPage from "@/components/DestinationPage";

export const metadata: Metadata = {
  title: "Destination Weddings — ATTIMI Wedding Experience",
  description: "Matrimoni in Italia e in tutta Europa. Il tuo matrimonio ovunque nel mondo.",
};

export default function Destination() {
  return <DestinationPage />;
}

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import DestinationWeddings from "@/components/DestinationWeddings";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="bg-[#111010]">
      <Hero />
      <Background className="bg-[#1A1A1A]">
        <Services />
      </Background>
      <About />
      <Experience />
      <Gallery />
      <DestinationWeddings />
      <CTA />
      <Footer />
    </main>
  );
}

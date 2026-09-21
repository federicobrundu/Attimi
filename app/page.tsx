import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="bg-[#111010]">
      <Hero />
      <Background className="bg-[#1A1A1A]">
        <Services />
      </Background>
    </main>
  );
}

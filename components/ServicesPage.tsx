"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import InternalHero from "@/components/InternalHero";

const services = [
  {
    id: "musica",
    label: "Musica & DJ Set",
    image: asset("/images/service-music.jpg"),
    headline: "La colonna sonora del vostro matrimonio.",
    body: "Live band, DJ set e impianti audio professionali per ogni momento della giornata: cerimonia, cocktail, cena e ballo. Selezioniamo i migliori artisti e costruiamo una scaletta su misura per voi.",
    items: ["Live band e quartetti d'archi", "DJ set con console professionale", "Impianto audio HD per cerimonia e ricevimento", "Luci base e uplighting", "MC e presentatore", "Musica di sottofondo personalizzata"],
  },
  {
    id: "it",
    label: "Servizi IT",
    image: asset("/images/service-it.jpg"),
    headline: "La tecnologia al servizio dell'emozione.",
    body: "Creiamo soluzioni digitali eleganti per rendere ogni aspetto del vostro matrimonio più fluido e memorabile: dal sito agli ospiti, dalla foto cloud al giorno stesso.",
    items: ["Sito matrimonio personalizzato", "Partecipazioni digitali animate", "Cloud foto istantanee per gli ospiti", "QR code su ogni tavolo", "Mini-app evento con programma e mappa", "Streaming live per chi non può essere presente"],
  },
  {
    id: "foto",
    label: "Foto & Video",
    image: asset("/images/service-photo-video.jpg"),
    headline: "Il racconto cinematografico del vostro giorno.",
    body: "Un team di fotografi e videomaker specializzati in matrimoni con un approccio editoriale e cinematografico. Ogni scatto è un'opera d'arte. Ogni frame del video racconta una storia.",
    items: ["Reportage fotografico full day", "Video cinematografico con colonna sonora originale", "Riprese con drone autorizzato", "Secondo fotografo e videografo", "Album fine-art stampato in Italia", "Consegna digitale con galleria privata"],
  },
  {
    id: "fiori",
    label: "Fiori & Décor",
    image: asset("/images/service-flowers.jpg"),
    headline: "Allestimenti che trasformano ogni spazio.",
    body: "I nostri floral designer creano ambienti unici e raffinati, in perfetta armonia con la palette e lo stile del matrimonio. Dall'arco della cerimonia alle centrotavola del ricevimento.",
    items: ["Arco floreale per cerimonia", "Centrotavola e tablescape", "Bouquet sposa e mise en place", "Addobbi navata e percorso", "Fiori all'occhiello per le giacche", "Scenografie personalizzate"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#111010]">
      <InternalHero
        label="I nostri servizi"
        title="Tutto sotto un&rsquo;unica regia."
        subtitle="Un solo team coordina ogni aspetto del vostro matrimonio. Nessun fornitore da inseguire. Solo un'esperienza integrata, curata e senza stress."
        image="/images/service-music.jpg"
      />

      {/* Service sections */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`px-6 py-20 md:py-32 ${i % 2 === 0 ? "bg-[#111010]" : "bg-[#161616]"}`}
        >
          <div className={`mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20 ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={s.image}
                alt={s.label}
                fill
                className="object-cover object-center"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
            >
              <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/60">{s.label}</p>
              <h2 className="font-display text-3xl font-light leading-snug text-[#F8E9D8] md:text-4xl">
                {s.headline}
              </h2>
              <div className="my-6 h-px w-10 bg-[#C7B299]/30" />
              <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/50">{s.body}</p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-[#C7B299]/40" />
                    <span className="font-sans text-[11px] leading-relaxed tracking-wide text-[#F8E9D8]/55">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="font-display text-3xl font-light italic text-[#C7B299]"
        >
          Costruiamo il tuo pacchetto su misura.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/contatti"
            className="inline-block bg-[#C7B299] px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#111010] transition-opacity duration-300 hover:opacity-80"
          >
            Richiedi una proposta
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

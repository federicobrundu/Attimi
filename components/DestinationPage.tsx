"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import InternalHero from "@/components/InternalHero";

const locations = [
  { area: "Italia", places: ["Roma", "Toscana", "Amalfi Coast", "Sicilia", "Puglia", "Lago di Como", "Venezia", "Portofino"] },
  { area: "Europa", places: ["Paris", "Côte d'Azur", "Santorini", "Vienna", "Barcelona", "Algarve", "Mykonos", "Dubrovnik"] },
];

const included = [
  "Sopralluogo location in loco",
  "Coordinamento fornitori locali",
  "Gestione permessi e logistica",
  "Trasporto attrezzatura audio e luci",
  "Alloggio team incluso nel preventivo",
  "Backup completo di ogni servizio",
];

export default function DestinationPage() {
  return (
    <main className="bg-[#111010]">
      <InternalHero
        label="Destination Weddings"
        title="Il vostro matrimonio,<br /><em class='text-[#C7B299]'>ovunque nel mondo.</em>"
        subtitle="Portiamo tutta la nostra esperienza e il nostro team ovunque vogliate celebrare. Nessun compromesso sulla qualità, nessuna location troppo lontana."
        image="/images/portfolio-5.jpg"
        height="min-h-[60vh]"
      />

      {/* What's included */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-16"
          >
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">Cosa includiamo</p>
            <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">
              Tutto compreso, ovunque.
            </h2>
            <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
          </motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.08 }}
                className="flex items-start gap-4 border border-[#C7B299]/10 p-6"
              >
                <span className="mt-1 h-px w-4 shrink-0 bg-[#C7B299]/40" />
                <p className="font-sans text-[11px] leading-relaxed tracking-wide text-[#F8E9D8]/55">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[#161616] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-16"
          >
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">Le nostre destinazioni</p>
            <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">Dove lavoriamo</h2>
            <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
          </motion.div>
          <div className="grid gap-16 md:grid-cols-2">
            {locations.map((region, i) => (
              <motion.div
                key={region.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 }}
              >
                <p className="mb-6 font-display text-2xl font-light text-[#F8E9D8]">{region.area}</p>
                <div className="flex flex-wrap gap-3">
                  {region.places.map((place) => (
                    <span
                      key={place}
                      className="border border-[#C7B299]/25 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.25em] text-[#C7B299]/60"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="font-display text-3xl font-light italic text-[#C7B299]"
        >
          La location è vostra. L&rsquo;esperienza è nostra.
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
            Pianifica il tuo matrimonio
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

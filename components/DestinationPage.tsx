"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

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
    <main className="bg-[#111010] pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={asset("/images/portfolio-5.jpg")}
          alt="Destination Wedding"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/30 to-transparent" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/60"
          >
            Destination Weddings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
            className="font-display text-5xl font-light text-[#F8E9D8] md:text-7xl"
          >
            Il vostro matrimonio,
            <br />
            <em className="text-[#C7B299]">ovunque nel mondo.</em>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
            className="mt-6 h-px w-12 origin-center bg-[#C7B299]/40"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.45 }}
            className="mt-6 max-w-lg font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/50"
          >
            Portiamo tutta la nostra esperienza e il nostro team ovunque vogliate
            celebrare. Nessun compromesso sulla qualità, nessuna location troppo lontana.
          </motion.p>
        </div>
      </section>

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

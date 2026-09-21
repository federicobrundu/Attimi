"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const locations = ["Roma", "Toscana", "Amalfi", "Sicilia", "Puglia", "Paris", "Côte d'Azur", "Santorini"];

export default function DestinationWeddings() {
  return (
    <section id="destination" className="relative overflow-hidden bg-[#1A1A1A] px-6 py-28 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/show.jpg")}
          alt="Destination Wedding"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="md:max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50"
          >
            Destination Weddings
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
            className="font-display text-4xl font-light leading-snug text-[#F8E9D8] md:text-5xl"
          >
            L&rsquo;emozione
            <br />
            <em className="text-[#C7B299]">non conosce confini.</em>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
            className="my-8 h-px w-12 origin-left bg-[#C7B299]/30"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.25 }}
            className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/55"
          >
            Portiamo la nostra musica e la nostra energia ovunque nel mondo.
            Dall&rsquo;Italia alle destinazioni più esclusive d&rsquo;Europa,
            ogni evento riceve la stessa cura e la stessa passione.
          </motion.p>

          {/* Location tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {locations.map((loc) => (
              <span
                key={loc}
                className="border border-[#C7B299]/25 px-4 py-1.5 font-sans text-[10px] uppercase tracking-[0.25em] text-[#C7B299]/60"
              >
                {loc}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contatti"
              className="inline-block border border-[#C7B299]/50 px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.3em] text-[#C7B299] transition-all duration-300 hover:bg-[#C7B299]/10 hover:border-[#C7B299]/80"
            >
              Pianifica il tuo evento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

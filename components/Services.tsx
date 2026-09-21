"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    key: "live-music",
    image: "/images/live-music.jpg",
    label: "Live Music",
    subtitle: "Una proposta live che fa la differenza.",
  },
  {
    key: "dj-set",
    image: "/images/dj-set.jpg",
    label: "DJ Set",
    subtitle: "La colonna sonora del tuo evento.",
  },
  {
    key: "entertainment",
    image: "/images/entertainment.jpg",
    label: "Entertainment",
    subtitle: "Energia, coinvolgimento e momenti unici.",
  },
  {
    key: "show",
    image: "/images/show.jpg",
    label: "Show",
    subtitle: "Atmosfere spettacolari curate nel dettaglio.",
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="relative bg-[#1A1A1A] px-6 py-28 md:py-36"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="mb-20 text-center"
      >
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">
          I nostri servizi
        </p>
        <h2 className="font-display text-3xl font-light uppercase tracking-[0.25em] text-[#F8E9D8] md:text-5xl">
          L&rsquo;esperienza
        </h2>
        <div className="mx-auto mt-5 h-px w-12 bg-[#C7B299]/30" />
      </motion.div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.article
            key={s.key}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut" as const,
              delay: i * 0.12,
            }}
            className="group relative overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={s.image}
                alt={s.label}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/30 to-transparent" />
            </div>

            {/* Text block */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C7B299]">
                {s.label}
              </p>
              <p className="mt-2 font-sans text-[11px] leading-relaxed tracking-wide text-[#F8E9D8]/60">
                {s.subtitle}
              </p>
              {/* Hover underline */}
              <div className="mt-3 h-px w-0 bg-[#C7B299]/50 transition-all duration-500 group-hover:w-8" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

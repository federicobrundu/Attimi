"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const services = [
  {
    key: "musica",
    image: asset("/images/live-music.jpg"),
    label: "Musica & DJ Set",
    subtitle: "Live performance, DJ set e intrattenimento musicale su misura per ogni momento della giornata.",
    tags: ["Live Band", "DJ Set", "Show", "Entertainment"],
  },
  {
    key: "tech",
    image: asset("/images/dj-set.jpg"),
    label: "Servizi IT",
    subtitle: "Audio professionale, luci scenografiche, schermi LED, streaming live e fotocabine interattive.",
    tags: ["Audio HD", "Light Design", "LED Wall", "Live Streaming"],
  },
  {
    key: "foto",
    image: asset("/images/entertainment.jpg"),
    label: "Foto & Video",
    subtitle: "Reportage cinematografico, drone, post-produzione editoriale e album di lusso stampati in Italia.",
    tags: ["Reportage", "Drone", "Film Cinematic", "Album Lusso"],
  },
  {
    key: "fiori",
    image: asset("/images/show.jpg"),
    label: "Fiori & Decor",
    subtitle: "Allestimenti floreali, tablescape, archi scenici e decorazioni personalizzate in ogni dettaglio.",
    tags: ["Allestimenti", "Floral Design", "Tablescape", "Archi"],
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative bg-[#1A1A1A] px-6 py-28 md:py-36">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="mx-auto mb-20 max-w-6xl"
      >
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">
          I nostri servizi
        </p>
        <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">
          Tutto sotto un&rsquo;unica regia.
        </h2>
        <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
      </motion.div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.article
            key={s.key}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.12 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/40 to-transparent" />
            </div>

            {/* Text block */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#C7B299]">
                {s.label}
              </p>
              <p className="mt-2 font-sans text-[10px] leading-relaxed tracking-wide text-[#F8E9D8]/55">
                {s.subtitle}
              </p>
              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#C7B299]/25 px-2 py-0.5 font-sans text-[9px] uppercase tracking-widest text-[#C7B299]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 h-px w-0 bg-[#C7B299]/50 transition-all duration-500 group-hover:w-8" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

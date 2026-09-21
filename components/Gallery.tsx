"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const items = [
  { src: asset("/images/portfolio-1.jpg"), alt: "Sposi sotto l'arco fiorito",      span: "md:col-span-2 md:row-span-2" },
  { src: asset("/images/portfolio-2.jpg"), alt: "Allestimento tavola",              span: "" },
  { src: asset("/images/portfolio-3.jpg"), alt: "Fotografo al lavoro",              span: "" },
  { src: asset("/images/portfolio-4.jpg"), alt: "DJ set al matrimonio",             span: "md:col-span-2" },
  { src: asset("/images/portfolio-5.jpg"), alt: "Ospiti in pista da ballo",         span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#111010] px-6 py-28 md:py-36">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="mx-auto mb-16 max-w-5xl"
      >
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">
          I nostri matrimoni
        </p>
        <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">
          Live Moments
        </h2>
        <p className="mt-5 max-w-lg font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/45">
          Una selezione di attimi vissuti. Musica, luci, emozioni e atmosfere
          costruite per ogni matrimonio con cura e visione.
        </p>
        <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
      </motion.div>

      {/* Masonry-style grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-3">
        {items.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: i * 0.08 }}
            className={`group relative overflow-hidden ${item.span}`}
            style={{ minHeight: "220px" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#111010]/30 transition-opacity duration-500 group-hover:opacity-0" />
            <p className="absolute bottom-4 left-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#F8E9D8]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.alt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

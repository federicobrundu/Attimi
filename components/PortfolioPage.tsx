"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const categories = [
  { label: "Momenti", tag: "moments" },
  { label: "Backstage", tag: "backstage" },
  { label: "Dettagli", tag: "details" },
  { label: "Décor", tag: "decor" },
  { label: "Foto & Video", tag: "media" },
];

const items = [
  { src: asset("/images/portfolio-1.jpg"),      alt: "Sposi sotto l'arco",        span: "md:col-span-2 md:row-span-2", label: "Momento" },
  { src: asset("/images/portfolio-2.jpg"),      alt: "Tablescape",                span: "",                            label: "Dettaglio" },
  { src: asset("/images/portfolio-3.jpg"),      alt: "Fotografo al lavoro",       span: "",                            label: "Backstage" },
  { src: asset("/images/service-flowers.jpg"),  alt: "Allestimento floreale",     span: "md:col-span-2",               label: "Décor" },
  { src: asset("/images/portfolio-4.jpg"),      alt: "DJ set wedding",            span: "",                            label: "Musica" },
  { src: asset("/images/portfolio-5.jpg"),      alt: "Ospiti in pista",           span: "",                            label: "Momenti" },
  { src: asset("/images/service-music.jpg"),    alt: "Pianoforte al ricevimento", span: "md:col-span-2",               label: "Musica" },
  { src: asset("/images/service-photo-video.jpg"), alt: "Montaggio video",        span: "",                            label: "Video" },
  { src: asset("/images/hero-wedding.jpg"),     alt: "Atmosfera cerimonia",       span: "md:col-span-2 md:row-span-2", label: "Momento" },
  { src: asset("/images/service-it.jpg"),       alt: "Digitale al matrimonio",    span: "",                            label: "Servizi IT" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#111010] pt-24">
      {/* Header */}
      <section className="px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50"
        >
          I nostri matrimoni
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="font-display text-5xl font-light text-[#F8E9D8] md:text-7xl"
        >
          Live Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/40"
        >
          Una selezione di attimi vissuti nei matrimoni che abbiamo costruito.
          Musica, luci, fiori, emozioni — ogni dettaglio racconta una storia.
        </motion.p>
      </section>

      {/* Categories */}
      <div className="flex justify-center gap-6 overflow-x-auto px-6 pb-12">
        {categories.map((c) => (
          <button
            key={c.tag}
            className="shrink-0 border-b border-[#C7B299]/20 pb-1 font-sans text-[10px] uppercase tracking-[0.3em] text-[#F8E9D8]/40 transition-colors duration-200 hover:border-[#C7B299]/60 hover:text-[#C7B299]"
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-6 pb-24 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.src + i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: i * 0.06 }}
            className={`group relative overflow-hidden ${item.span}`}
            style={{ minHeight: "240px" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#111010]/30 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="border border-[#C7B299]/40 px-3 py-1 font-sans text-[9px] uppercase tracking-widest text-[#C7B299]/80">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-8 font-display text-2xl font-light italic text-[#C7B299]"
        >
          Il prossimo attimo potrebbe essere il vostro.
        </motion.p>
        <Link
          href="/contatti"
          className="inline-block border border-[#C7B299]/50 px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#C7B299] transition-all duration-300 hover:bg-[#C7B299]/10"
        >
          Costruiamo il vostro matrimonio
        </Link>
      </section>
    </main>
  );
}

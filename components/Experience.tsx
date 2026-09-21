"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Ascolto",
    body: "Partiamo da voi: i vostri gusti, la vostra storia, il ritmo che volete dare alla giornata.",
  },
  {
    n: "02",
    title: "Proposta",
    body: "Costruiamo un'esperienza su misura: lineup, scaletta, mood, transizioni e momenti speciali.",
  },
  {
    n: "03",
    title: "Prova",
    body: "Sopralluogo tecnico, soundcheck e fine-tuning di ogni dettaglio prima del grande giorno.",
  },
  {
    n: "04",
    title: "Performance",
    body: "Arriviamo con tutta la nostra energia. Voi godete. Noi creiamo l'atmosfera perfetta.",
  },
];

export default function Experience() {
  return (
    <section id="come-lavoriamo" className="relative bg-[#161616] px-6 py-28 md:py-40">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="mx-auto mb-20 max-w-5xl"
      >
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">
          Come lavoriamo
        </p>
        <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">
          Il nostro processo
        </h2>
        <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
      </motion.div>

      {/* Steps */}
      <div className="mx-auto max-w-5xl">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 }}
            className="group flex items-start gap-8 border-b border-[#C7B299]/10 py-9 last:border-0 md:gap-16"
          >
            {/* Number */}
            <span className="w-10 shrink-0 font-display text-xs font-light tracking-widest text-[#C7B299]/30 transition-colors duration-300 group-hover:text-[#C7B299]/70">
              {s.n}
            </span>
            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-16">
              <p className="min-w-32 font-display text-xl font-light text-[#F8E9D8] md:text-2xl">
                {s.title}
              </p>
              <p className="font-sans text-sm leading-7 tracking-wide text-[#F8E9D8]/45">
                {s.body}
              </p>
            </div>
            {/* Hover arrow */}
            <span className="hidden shrink-0 translate-x-0 font-sans text-xs tracking-widest text-[#C7B299]/0 transition-all duration-300 group-hover:text-[#C7B299]/50 md:block">
              →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

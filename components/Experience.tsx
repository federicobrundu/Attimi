"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Ascolto",
    body: "Primo incontro per capire la vostra visione: stile, budget, location, numero di ospiti e ogni preferenza personale.",
  },
  {
    n: "02",
    title: "Progettazione",
    body: "Sviluppiamo un concept completo: musica, setup tecnologico, piano fotografico e progetto floreale in un'unica proposta.",
  },
  {
    n: "03",
    title: "Coordinamento",
    body: "Gestiamo fornitori, sopralluoghi, permessi e timing. Voi non dovete preoccuparvi di niente: ci pensiamo noi.",
  },
  {
    n: "04",
    title: "Il Grande Giorno",
    body: "Il nostro team è presente dalla cerimonia al last dance. Ogni dettaglio eseguito in perfetta sincronia.",
  },
];

export default function Experience() {
  return (
    <section id="come-lavoriamo" className="relative bg-[#161616] px-6 py-28 md:py-40">
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
            <span className="w-10 shrink-0 font-display text-xs font-light tracking-widest text-[#C7B299]/30 transition-colors duration-300 group-hover:text-[#C7B299]/70">
              {s.n}
            </span>
            <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-16">
              <p className="min-w-36 font-display text-xl font-light text-[#F8E9D8] md:text-2xl">
                {s.title}
              </p>
              <p className="font-sans text-sm leading-7 tracking-wide text-[#F8E9D8]/45">
                {s.body}
              </p>
            </div>
            <span className="hidden shrink-0 font-sans text-xs tracking-widest text-[#C7B299]/0 transition-all duration-300 group-hover:text-[#C7B299]/50 md:block">
              →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

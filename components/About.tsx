"use client";

import { motion } from "framer-motion";

const values = [
  {
    label: "Un solo interlocutore",
    desc: "Musica, tecnologia, fotografia e fiori coordinati da un'unica regia. Nessun caos, solo armonia.",
  },
  {
    label: "Cura maniacale del dettaglio",
    desc: "Dal primo incontro al giorno del matrimonio, ogni elemento è pensato, scelto e perfezionato.",
  },
  {
    label: "Esperienze su misura",
    desc: "Nessun pacchetto standard. Ogni matrimonio è un progetto unico costruito attorno a voi.",
  },
];

export default function About() {
  return (
    <section id="chi-siamo" className="relative bg-[#111010] px-6 py-28 md:py-40">
      <div className="mx-auto mb-20 h-px max-w-5xl bg-[#C7B299]/15" />

      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-24">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">
            Chi siamo
          </p>
          <h2 className="font-display text-4xl font-light leading-snug text-[#F8E9D8] md:text-5xl">
            Un&rsquo;agenzia wedding
            <br />
            <em className="text-[#C7B299]">a servizio completo.</em>
          </h2>
          <div className="mt-8 h-px w-12 bg-[#C7B299]/30" />
        </motion.div>

        {/* Right — body + values */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.15 }}
          className="flex flex-col justify-center gap-10"
        >
          <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/55">
            ATTIMI nasce dall&rsquo;unione di professionisti del wedding con competenze
            in musica, tecnologia, fotografia e floral design. Crediamo che il
            matrimonio perfetto non si costruisca sommando fornitori, ma orchestrando
            ogni elemento con una visione unica e coerente.
          </p>

          <ul className="flex flex-col gap-7">
            {values.map((v, i) => (
              <motion.li
                key={v.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.25 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1.5 h-px w-5 shrink-0 bg-[#C7B299]/50" />
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F8E9D8]">
                    {v.label}
                  </p>
                  <p className="mt-1 font-sans text-[11px] leading-relaxed tracking-wide text-[#F8E9D8]/45">
                    {v.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

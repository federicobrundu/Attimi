"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import InternalHero from "@/components/InternalHero";

const values = [
  { n: "01", label: "Unicità", body: "Ogni matrimonio è un progetto irripetibile. Non utilizziamo template: costruiamo ogni esperienza da zero, attorno a voi." },
  { n: "02", label: "Integrazione", body: "Musica, tecnologia, fotografia e fiori parlano una sola lingua. La nostra. Un'unica regia per un risultato coerente e senza lacune." },
  { n: "03", label: "Eleganza", body: "Non esiste dettaglio troppo piccolo. Dalla scelta del fiore all'angolazione della prima foto, tutto è pensato per essere perfetto." },
  { n: "04", label: "Presenza", body: "Il giorno del matrimonio siamo lì. Non coordiniamo da remoto: il nostro team è presente, preciso e discreto." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#111010]">
      <InternalHero
        label="Chi siamo"
        title="La nostra storia"
        image="/images/hero-wedding.jpg"
        vh={70}

      />

      {/* Mission */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">Missione</p>
            <h2 className="font-display text-4xl font-light leading-snug text-[#F8E9D8] md:text-5xl">
              Un&rsquo;agenzia
              <br />
              <em className="text-[#C7B299]">a servizio completo.</em>
            </h2>
            <div className="mt-8 h-px w-12 bg-[#C7B299]/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.15 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/55">
              ATTIMI nasce dalla visione che un matrimonio perfetto non si costruisce
              sommando fornitori indipendenti, ma orchestrando ogni elemento con una
              regia unica, coerente ed emozionale.
            </p>
            <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/55">
              Siamo un team multidisciplinare: musicisti, ingegneri del suono,
              sviluppatori web, fotografi cinematografici e floral designer.
              Tutti sotto un unico cappello: ATTIMI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy image break */}
      <section className="relative h-64 overflow-hidden md:h-96">
        <Image
          src={asset("/images/portfolio-1.jpg")}
          alt="Filosofia ATTIMI"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="font-display text-3xl italic text-[#C7B299] drop-shadow-lg md:text-4xl px-6"
          >
            Ogni attimo merita di essere perfetto.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#161616] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-16"
          >
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50">I nostri valori</p>
            <h2 className="font-display text-4xl font-light text-[#F8E9D8] md:text-5xl">Cosa ci guida</h2>
            <div className="mt-5 h-px w-12 bg-[#C7B299]/30" />
          </motion.div>
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.08 }}
              className="flex items-start gap-8 border-b border-[#C7B299]/10 py-8 last:border-0 md:gap-16"
            >
              <span className="w-10 shrink-0 font-display text-xs tracking-widest text-[#C7B299]/30">{v.n}</span>
              <div className="flex flex-1 flex-col gap-2 md:flex-row md:gap-16">
                <p className="min-w-32 font-display text-xl font-light text-[#F8E9D8] md:text-2xl">{v.label}</p>
                <p className="font-sans text-sm leading-7 tracking-wide text-[#F8E9D8]/45">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-8 font-display text-2xl font-light italic text-[#C7B299]"
        >
          Pronto a costruire qualcosa di straordinario?
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
        >
          <Link
            href="/contatti"
            className="inline-block bg-[#C7B299] px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#111010] transition-opacity duration-300 hover:opacity-80"
          >
            Inizia da qui
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

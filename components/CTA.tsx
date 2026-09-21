"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

export default function CTA() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden bg-[#111010] px-6 py-28 md:py-40"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.05]">
        <Image
          src={asset("/images/background-texture.jpg")}
          alt=""
          fill
          aria-hidden
          className="object-cover object-center"
        />
      </div>

      {/* Warm glow orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7B299]/6 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-5 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/50"
        >
          Inizia da qui
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="font-display text-4xl font-light leading-snug text-[#F8E9D8] md:text-5xl"
        >
          Ogni grande storia
          <br />
          <em className="text-[#C7B299]">merita la giusta colonna sonora.</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.25 }}
          className="mx-auto my-9 h-px w-12 origin-center bg-[#C7B299]/30"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.3 }}
          className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/50"
        >
          Raccontaci il tuo evento. Costruiremo insieme un&rsquo;esperienza
          su misura, pensata per voi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.45 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="mailto:info@attimiexperience.it"
            className="inline-block bg-[#C7B299] px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#111010] transition-opacity duration-300 hover:opacity-80"
          >
            Richiedi una proposta
          </a>
          <a
            href="https://wa.me/39XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#C7B299]/40 px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#C7B299] transition-all duration-300 hover:bg-[#C7B299]/10"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

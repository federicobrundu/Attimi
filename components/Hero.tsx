"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import type { Transition } from "framer-motion";

const t = (delay = 0): Transition => ({
  duration: 0.8,
  ease: "easeOut" as const,
  delay,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#111010]">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/hero.jpg")}
          alt="ATTIMI — Wedding Experience"
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-[#111010]/40 to-[#111010]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111010]/60 via-transparent to-[#111010]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={t(0)}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C7B299]/50"
          style={{ boxShadow: "0 0 40px rgba(199,178,153,0.12)" }}
        >
          <span className="font-display text-2xl font-semibold tracking-[0.3em] text-[#C7B299]">
            A
          </span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.1)}
          className="font-display text-6xl font-bold tracking-[0.35em] text-[#F8E9D8] drop-shadow-lg md:text-8xl"
        >
          ATTIMI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={t(0.2)}
          className="mt-1 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/80"
        >
          wedding experience
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={t(0.3)}
          className="my-7 h-px w-14 origin-center bg-[#C7B299]/40"
        />

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.4)}
          className="font-display text-xl font-light uppercase tracking-[0.2em] text-[#F8E9D8]/90 md:text-2xl lg:text-3xl"
        >
          Il tuo matrimonio,
          <br />
          curato in ogni dettaglio.
        </motion.p>

        {/* Italic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.55)}
          className="mt-7 font-display text-2xl italic text-[#C7B299] md:text-3xl"
          style={{ textShadow: "0 2px 20px rgba(199,178,153,0.3)" }}
        >
          Costruiamo esperienze che restano.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.7)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contatti"
            className="inline-block bg-[#C7B299] px-9 py-3.5 font-sans text-[11px] uppercase tracking-[0.3em] text-[#111010] transition-opacity duration-300 hover:opacity-80"
          >
            Inizia da qui
          </a>
          <a
            href="#servizi"
            className="inline-block border border-[#C7B299]/50 px-9 py-3.5 font-sans text-[11px] uppercase tracking-[0.3em] text-[#C7B299] transition-all duration-300 hover:bg-[#C7B299]/10"
          >
            I nostri servizi
          </a>
        </motion.div>
      </div>

      {/* Location footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t(0.9)}
        className="absolute bottom-9 z-10 font-sans text-[10px] uppercase tracking-[0.4em] text-[#F8E9D8]/35"
      >
        Roma &nbsp;|&nbsp; Italia &amp; Destination Weddings
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={t(1.1)}
        className="absolute bottom-9 right-8 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C7B299]/40">
          scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-[#C7B299]/40 to-transparent" />
      </motion.div>
    </section>
  );
}

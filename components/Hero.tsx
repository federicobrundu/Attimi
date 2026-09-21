"use client";

import { motion, type Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: "easeOut" as const,
    delay,
  } satisfies Transition,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#111010] px-6 text-center">
      {/* Atmospheric gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#111010]"
      />

      {/* Bokeh glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7B299]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-[#C7B299]/8 blur-3xl"
      />

      {/* Logo mark */}
      <motion.div {...fadeUp(0)} className="relative mb-8">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#C7B299]/40">
          <span className="font-display text-2xl font-semibold tracking-[0.25em] text-[#C7B299]">
            A
          </span>
        </div>
        <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/70">
          wedding
        </p>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        {...fadeUp(0.1)}
        className="font-display text-5xl font-bold tracking-[0.3em] text-[#F8E9D8] md:text-7xl lg:text-8xl"
      >
        ATTIMI
      </motion.h1>

      {/* Divider */}
      <motion.div
        {...fadeUp(0.2)}
        className="my-6 h-px w-16 bg-[#C7B299]/50"
      />

      {/* Headline */}
      <motion.p
        {...fadeUp(0.3)}
        className="font-display text-xl font-light uppercase tracking-widest text-[#F8E9D8]/90 md:text-2xl lg:text-3xl"
      >
        Più di un evento.
        <br />
        Un&rsquo;esperienza da vivere.
      </motion.p>

      {/* Tagline — script style via italic */}
      <motion.p
        {...fadeUp(0.45)}
        className="mt-8 font-display text-2xl italic text-[#C7B299] md:text-3xl"
      >
        Diamo ritmo alle emozioni.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.6)} className="mt-10">
        <a
          href="#servizi"
          className="inline-block border border-[#C7B299]/60 px-8 py-3 text-xs uppercase tracking-[0.3em] text-[#C7B299] transition-colors duration-300 hover:bg-[#C7B299]/10"
        >
          Scopri l&rsquo;esperienza
        </a>
      </motion.div>

      {/* Location line */}
      <motion.p
        {...fadeUp(0.75)}
        className="absolute bottom-10 font-sans text-[10px] uppercase tracking-[0.35em] text-[#F8E9D8]/40"
      >
        Roma &nbsp;|&nbsp; Italia &amp; Destination Weddings
      </motion.p>
    </section>
  );
}

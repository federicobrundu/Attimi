"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

interface InternalHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  image: string;
  /** Explicit vh value as number, e.g. 55 = 55vh. Defaults to 55. */
  vh?: number;
}

export default function InternalHero({
  title,
  subtitle,
  label,
  image,
  vh = 55,
}: InternalHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#111010]"
      style={{ height: `${vh}vh` }}
    >
      {/* Full-bleed image */}
      <Image
        src={asset(image)}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        style={{ opacity: 0.45 }}
      />

      {/* Bottom-to-top fade — subtle, stops at 40% */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #111010 0%, rgba(17,16,16,0.5) 35%, transparent 65%)",
        }}
      />
      {/* Top fade for navbar bleed */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,16,16,0.4) 0%, transparent 30%)",
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="mb-4 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C7B299]/60"
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.1 }}
          className="font-display text-5xl font-light text-[#F8E9D8] md:text-7xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
          className="mt-6 h-px w-12 origin-center bg-[#C7B299]/40"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.45 }}
            className="mt-6 max-w-xl font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/50"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

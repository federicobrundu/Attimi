"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19V6l12-3v13M9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        />
      </svg>
    ),
    title: "Live Music",
    subtitle: "Una proposta live che fa la differenza.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
        />
      </svg>
    ),
    title: "DJ Set",
    subtitle: "La colonna sonora del tuo evento.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
        />
      </svg>
    ),
    title: "Entertainment",
    subtitle: "Energia, coinvolgimento e momenti unici.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="h-7 w-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Show",
    subtitle: "Atmosfere spettacolari curate nel dettaglio.",
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="relative bg-[#111010] px-6 py-24 md:py-32"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/60">
          I nostri servizi
        </p>
        <h2 className="font-display text-3xl font-light uppercase tracking-widest text-[#F8E9D8] md:text-4xl">
          L&rsquo;esperienza
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-[#C7B299]/40" />
      </motion.div>

      {/* Service cards grid */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            className="group flex flex-col items-center gap-4 text-center"
          >
            {/* Icon ring */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C7B299]/30 text-[#C7B299] transition-colors duration-300 group-hover:border-[#C7B299]/70 group-hover:bg-[#C7B299]/5">
              {service.icon}
            </div>

            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#F8E9D8]">
                {service.title}
              </p>
              <p className="mt-2 font-sans text-[10px] leading-relaxed tracking-wider text-[#F8E9D8]/50">
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

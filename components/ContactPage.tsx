"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { asset } from "@/lib/asset";
import InternalHero from "@/components/InternalHero";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", data: "", messaggio: "", servizi: [] as string[] });

  const servizi = ["Musica & DJ Set", "Servizi IT", "Foto & Video", "Fiori & Décor"];

  const toggleServizio = (s: string) => {
    setForm((prev) => ({
      ...prev,
      servizi: prev.servizi.includes(s) ? prev.servizi.filter((x) => x !== s) : [...prev.servizi, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-[#111010]">
      <InternalHero
        label="Inizia da qui"
        title="Costruiamo insieme<br /><em class='text-[#C7B299]'>il vostro matrimonio.</em>"
        image="/images/hero-wedding.jpg"
        vh={50}
      />

      {/* Form + info */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            {sent ? (
              <div className="flex flex-col gap-6 py-12 text-center">
                <p className="font-display text-3xl font-light italic text-[#C7B299]">Grazie!</p>
                <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/55">
                  Abbiamo ricevuto la vostra richiesta. Vi contatteremo entro 24 ore per iniziare a costruire insieme il vostro giorno perfetto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/50">
                  Raccontateci di voi
                </p>

                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Nome e Cognome *</label>
                  <input
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="border-b border-[#C7B299]/20 bg-transparent pb-2 font-sans text-sm text-[#F8E9D8] outline-none placeholder:text-[#F8E9D8]/20 focus:border-[#C7B299]/50 transition-colors duration-200"
                    placeholder="Federico Rossi"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-b border-[#C7B299]/20 bg-transparent pb-2 font-sans text-sm text-[#F8E9D8] outline-none placeholder:text-[#F8E9D8]/20 focus:border-[#C7B299]/50 transition-colors duration-200"
                    placeholder="voi@email.it"
                  />
                </div>

                {/* Data */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Data del matrimonio</label>
                  <input
                    type="date"
                    value={form.data}
                    onChange={(e) => setForm({ ...form, data: e.target.value })}
                    className="border-b border-[#C7B299]/20 bg-transparent pb-2 font-sans text-sm text-[#F8E9D8]/70 outline-none focus:border-[#C7B299]/50 transition-colors duration-200"
                  />
                </div>

                {/* Servizi */}
                <div className="flex flex-col gap-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Servizi di interesse</label>
                  <div className="flex flex-wrap gap-3">
                    {servizi.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleServizio(s)}
                        className={`border px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                          form.servizi.includes(s)
                            ? "border-[#C7B299] bg-[#C7B299]/10 text-[#C7B299]"
                            : "border-[#C7B299]/20 text-[#F8E9D8]/40 hover:border-[#C7B299]/40"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Messaggio */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Il vostro sogno</label>
                  <textarea
                    rows={4}
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    className="border-b border-[#C7B299]/20 bg-transparent pb-2 font-sans text-sm text-[#F8E9D8] outline-none placeholder:text-[#F8E9D8]/20 focus:border-[#C7B299]/50 transition-colors duration-200 resize-none"
                    placeholder="Raccontateci la vostra visione…"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#C7B299] px-10 py-4 font-sans text-[11px] uppercase tracking-[0.3em] text-[#111010] transition-opacity duration-300 hover:opacity-80"
                >
                  Invia la richiesta
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.15 }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/50">Contattateci</p>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:info@attimiexperience.it"
                  className="group flex items-start gap-4"
                >
                  <span className="mt-1 h-px w-4 shrink-0 bg-[#C7B299]/40 transition-all duration-300 group-hover:w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Email</p>
                    <p className="mt-1 font-sans text-sm tracking-wide text-[#F8E9D8]/70 transition-colors duration-200 group-hover:text-[#C7B299]">
                      info@attimiexperience.it
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/39XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="mt-1 h-px w-4 shrink-0 bg-[#C7B299]/40 transition-all duration-300 group-hover:w-8" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">WhatsApp</p>
                    <p className="mt-1 font-sans text-sm tracking-wide text-[#F8E9D8]/70 transition-colors duration-200 group-hover:text-[#C7B299]">
                      Scrivici direttamente
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-px w-4 shrink-0 bg-[#C7B299]/40" />
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#F8E9D8]/40">Sede</p>
                    <p className="mt-1 font-sans text-sm tracking-wide text-[#F8E9D8]/70">
                      Roma, Italia
                      <br />
                      <span className="text-[#F8E9D8]/40">Destination Weddings in tutta Europa</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#C7B299]/10" />

            <div>
              <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.4em] text-[#C7B299]/50">Tempi di risposta</p>
              <p className="font-sans text-sm leading-8 tracking-wide text-[#F8E9D8]/45">
                Rispondiamo entro 24 ore a ogni richiesta. Per eventi urgenti, utilizzate WhatsApp per una risposta immediata.
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden">
              <Image
                src={asset("/images/hero-wedding.jpg")}
                alt="ATTIMI Wedding"
                fill
                className="object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111010]/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-base italic text-[#C7B299]/80">
                Il vostro giorno perfetto inizia qui.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

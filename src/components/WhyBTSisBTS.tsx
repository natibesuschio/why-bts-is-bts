"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/principles";

export default function whatMakesBTSBTS() {
  return (
    <section id="why-bts" className="relative py-32 sm:py-40 px-6">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--color-accent)]/60 text-xs tracking-[0.3em] uppercase font-mono mb-6">The Answer</p>
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient leading-[1.1]">
            What makes BTS so special?
          </h2>
          <p className="mt-8 text-[var(--color-muted)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Six principles that explain how seven people from Seoul became the most significant cultural force of their generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              className="group relative border border-white/[0.06] bg-white/[0.01] hover:border-[var(--color-accent)]/15 transition-all duration-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-6 sm:p-8">
                <div className="mb-4">
                  <span className="text-[var(--color-accent)]/30 text-[10px] font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-white/90 group-hover:text-gradient transition-all duration-500">
                  {principle.title}
                </h3>

                <p className="mt-3 text-[var(--color-accent)]/60 text-sm italic">{principle.description}</p>

                <p className="mt-5 text-[var(--color-muted)]/60 text-sm leading-relaxed">{principle.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

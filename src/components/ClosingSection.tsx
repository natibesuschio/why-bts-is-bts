"use client";

import { motion } from "framer-motion";
import { closingReflection } from "@/data/principles";

export default function ClosingSection() {
  return (
    <section className="relative py-32 sm:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[var(--color-accent)]/[0.03] to-[#09090b]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent mx-auto mb-12" />

          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-white/90 leading-tight">
            {closingReflection.title}
          </h2>

          <motion.p
            className="mt-10 text-[var(--color-muted)] text-base sm:text-lg leading-[1.9] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {closingReflection.text}
          </motion.p>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className="text-[var(--color-muted)]/30 text-sm font-mono tracking-wide">7</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        className="relative mt-32 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-12 h-px bg-white/[0.06] mx-auto mb-8" />
        <p className="text-[var(--color-muted)]/30 text-xs font-mono tracking-widest uppercase">
          Made with love, for ARMY
        </p>
        <p className="mt-2 text-[var(--color-muted)]/20 text-[10px] font-mono">
          This is a fan project. All rights belong to their respective owners.
        </p>
      </motion.footer>
    </section>
  );
}

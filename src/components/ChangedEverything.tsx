"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function ChangedEverything({ title, description }: Props) {
  return (
    <motion.div
      className="relative my-16 sm:my-20"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden border border-[var(--color-accent)]/15 bg-gradient-to-br from-[var(--color-accent)]/[0.05] via-transparent to-[var(--color-accent)]/[0.02]">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--color-accent)]/30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--color-accent)]/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--color-accent)]/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--color-accent)]/30" />

        {/* Glow */}
        <div className="absolute inset-0 bg-radial-glow opacity-50" />

        <div className="relative p-8 sm:p-12 md:p-16">
          <motion.p
            className="text-[var(--color-accent)]/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            This Changed Everything
          </motion.p>

          <motion.h3
            className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 leading-tight max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mt-6 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

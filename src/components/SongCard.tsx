"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Song } from "@/data/eras";

export default function SongCard({ song, index }: { song: Song; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
        <div
          className={`relative border transition-all duration-500 ${
            isOpen
              ? "border-[var(--color-accent)]/20 bg-[var(--color-accent)]/[0.03]"
              : "border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.02]"
          }`}
        >
          <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h4 className="text-white/90 text-lg font-medium">{song.title}</h4>
                <span className="text-[var(--color-muted)]/40 text-xs font-mono">{song.year}</span>
              </div>
              <p className="mt-1 text-[var(--color-muted)]/50 text-xs font-mono tracking-wide">{song.album}</p>
              {!isOpen && (
                <p className="mt-3 text-[var(--color-muted)]/60 text-sm line-clamp-3 leading-relaxed">
                  {song.meaning}
                </p>
              )}
            </div>

            <div
              className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                isOpen
                  ? "border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                  : "border-white/10 text-white/30 group-hover:border-white/20 group-hover:text-white/50"
              }`}
            >
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-6 space-y-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                  <div>
                    <p className="text-[var(--color-accent)]/60 text-[10px] tracking-[0.2em] uppercase font-mono mb-2">
                      What this song meant
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{song.meaning}</p>
                  </div>

                  <div>
                    <p className="text-[var(--color-accent)]/60 text-[10px] tracking-[0.2em] uppercase font-mono mb-2">
                      Why it mattered
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{song.whyItMattered}</p>
                  </div>

                  <div>
                    <p className="text-[var(--color-accent)]/60 text-[10px] tracking-[0.2em] uppercase font-mono mb-2">
                      How it fits into BTS&apos;s evolution
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">{song.evolution}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  );
}

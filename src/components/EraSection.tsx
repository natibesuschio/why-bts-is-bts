"use client";

import { motion } from "framer-motion";
import type { Era } from "@/data/eras";
import SongCard from "./SongCard";
import ChangedEverything from "./ChangedEverything";
import EraImage from "./EraImage";

export default function EraSection({ era, index }: { era: Era; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section id={era.id} className="relative py-20 sm:py-28">
      {/* Era number watermark */}
      <div className="absolute top-8 right-4 sm:right-8 pointer-events-none select-none">
        <span className="text-[120px] sm:text-[180px] font-bold text-white/[0.02] font-[var(--font-display)] leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial layout: image + header side by side on desktop */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}>
          {/* Image column */}
          <motion.div
            className="lg:[direction:ltr]"
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <EraImage
              src={era.image}
              alt={era.imageAlt}
              overlay="dark"
              className="w-full aspect-[4/3] lg:aspect-[3/4]"
            />
          </motion.div>

          {/* Text column */}
          <div className="lg:[direction:ltr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-accent)]/50 text-xs font-mono tracking-widest">{era.period}</span>
                <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)]/20" />
              </div>

              <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-white/90 leading-[1.1]">
                {era.name}
              </h2>

              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-[10px] tracking-[0.15em] uppercase font-mono border border-white/[0.08] text-[var(--color-muted)]/60 bg-white/[0.02]">
                  {era.mood}
                </span>
              </div>

              <motion.p
                className="mt-6 text-white/60 text-lg font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {era.description}
              </motion.p>
            </motion.div>

            {/* Narrative */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <div className="pl-5 border-l border-white/[0.06]">
                <p className="text-[var(--color-muted)]/70 text-sm leading-[1.8]">{era.narrative}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Songs */}
        <div className="mt-16">
          <motion.p
            className="text-[var(--color-muted)]/40 text-[10px] tracking-[0.3em] uppercase font-mono mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Tracks
          </motion.p>

          <div className="space-y-3">
            {era.songs.map((song, songIndex) => (
              <SongCard key={song.title} song={song} index={songIndex} />
            ))}
          </div>
        </div>

        {/* Changed Everything */}
        {era.changedEverything && (
          <ChangedEverything
            title={era.changedEverything.title}
            description={era.changedEverything.description}
            image={era.changedEverything.image}
          />
        )}
      </div>

      {/* Bottom separator */}
      <motion.div
        className="mt-16 mx-auto w-px h-16 bg-gradient-to-b from-white/[0.08] to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "top" }}
      />
    </section>
  );
}

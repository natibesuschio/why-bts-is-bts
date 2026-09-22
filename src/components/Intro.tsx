"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 18 },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Intro() {
  return (
    <section id="intro" className="relative py-32 sm:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-block mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent mx-auto" />
          </div>

          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 leading-tight">
            This is not just a discography.
          </h2>

          <p className="mt-8 text-[var(--color-muted)] text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            This is the evolution of identity, pain, ambition, artistry, and meaning. A decade-long journey through
            sound, story, and self-discovery — told era by era, song by song.
          </p>

          <p className="mt-6 text-[var(--color-muted)]/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Scroll through the timeline below. Click into songs. Read the stories behind the music. Understand why
            seven people from Seoul became the most significant cultural force of their generation.
          </p>
        </motion.div>

        {/* Stats cards — stagger from parent, no individual whileInView */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { number: "8", label: "Eras", sublabel: "of artistic evolution" },
            { number: "250+", label: "Songs", sublabel: "deconstructed" },
            { number: "13+", label: "Years", sublabel: "of cultural impact" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="relative group p-8 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-4xl sm:text-5xl font-bold text-gradient font-[var(--font-display)]">{stat.number}</p>
              <p className="mt-2 text-white/80 text-sm tracking-wide uppercase font-mono">{stat.label}</p>
              <p className="mt-1 text-[var(--color-muted)]/50 text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative line */}
      <motion.div
        className="mt-32 mx-auto w-px h-24 bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: "top" }}
      />
    </section>
  );
}

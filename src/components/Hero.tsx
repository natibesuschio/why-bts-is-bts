"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToIntro = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Background image — very subtle, cinematic */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=70"
          alt=""
          aria-hidden="true"
          loading="eager"
          className="w-full h-full object-cover object-center scale-105"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.18, scale: 1.03 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        {/* Heavy overlay to keep it extremely subtle */}
        <div className="absolute inset-0 bg-[#09090b]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/60 via-transparent to-[#09090b]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" }}
          animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.95, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Horizontal lines decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 5}%` }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >

          <h1 className="font-[var(--font-display)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
            <motion.span
              className="block text-gradient"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            >
              What makes BTS
            </motion.span>
            <motion.span
              className="block mt-2 text-white/90"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              so special?
            </motion.span>
          </h1>

          <motion.div
            className="mt-10 sm:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="text-[var(--color-muted)] text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic">
              Not just a group. A story, a philosophy, a cultural force.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 sm:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              onClick={scrollToIntro}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm tracking-[0.2em] uppercase font-mono text-white/80 hover:text-white transition-all duration-500"
            >
              <span className="absolute inset-0 border border-white/10 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500" />
              <span className="absolute inset-0 bg-white/[0.02] group-hover:bg-[var(--color-accent)]/[0.05] transition-colors duration-500" />
              <span className="relative">Start the journey</span>
              <motion.svg
                className="relative w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}

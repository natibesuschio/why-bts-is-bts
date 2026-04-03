"use client";

import { motion } from "framer-motion";

interface EraImageProps {
  src: string;
  alt: string;
  overlay?: "dark" | "darker" | "subtle";
  className?: string;
}

export default function EraImage({ src, alt, overlay = "dark", className = "" }: EraImageProps) {
  const overlayClass = {
    subtle: "bg-black/30",
    dark: "bg-black/50",
    darker: "bg-black/65",
  }[overlay];

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {/* Accent border glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/5 z-10 pointer-events-none" />

      {/* Image with hover zoom */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Overlays */}
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/30 to-transparent" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(9,9,11,0.55) 100%)" }}
      />
    </motion.div>
  );
}

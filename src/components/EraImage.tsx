"use client";

import { motion } from "framer-motion";

interface EraImageProps {
  src: string;
  alt: string;
  overlay?: "dark" | "darker" | "subtle";
  className?: string;
  priority?: boolean;
}

export default function EraImage({
  src,
  alt,
  overlay = "dark",
  className = "",
  priority = false,
}: EraImageProps) {
  const overlayOpacity = {
    subtle: "bg-black/30",
    dark: "bg-black/50",
    darker: "bg-black/65",
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Glow border */}
      <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/5 z-10 pointer-events-none" />

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Gradient overlays */}
      <div className={`absolute inset-0 ${overlayOpacity[overlay]}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 to-transparent" />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(9,9,11,0.6) 100%)",
        }}
      />
    </motion.div>
  );
}

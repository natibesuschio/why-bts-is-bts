"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ImageDividerProps {
  src: string;
  alt: string;
  height?: string;
}

export default function ImageDivider({
  src,
  alt,
  height = "h-[30vh] sm:h-[40vh]",
}: ImageDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
      />

      {/* Heavy dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b]" />

      {/* Subtle accent glow at center */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

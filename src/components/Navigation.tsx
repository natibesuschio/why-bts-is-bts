"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eras } from "@/data/eras";

export default function Navigation() {
  const [activeEra, setActiveEra] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.8);

      const eraElements = eras.map((era) => ({
        id: era.id,
        element: document.getElementById(era.id),
      }));

      for (let i = eraElements.length - 1; i >= 0; i--) {
        const el = eraElements[i].element;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveEra(eraElements[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEra = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop sidebar nav */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => scrollToEra(era.id)}
                className="group flex items-center gap-3"
              >
                <span
                  className={`text-[10px] font-mono tracking-wider uppercase transition-all duration-300 ${
                    activeEra === era.id
                      ? "text-[var(--color-accent)] opacity-100"
                      : "text-white/0 group-hover:text-white/40 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {era.year}
                </span>
                <div
                  className={`transition-all duration-300 ${
                    activeEra === era.id
                      ? "w-8 h-[2px] bg-[var(--color-accent)]"
                      : "w-4 h-[1px] bg-white/20 group-hover:w-6 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}

            <div className="mt-4 w-4 h-px bg-white/10" />

            <button
              onClick={() => scrollToSection("why-bts")}
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] font-mono tracking-wider uppercase text-white/0 group-hover:text-white/40 transition-all duration-300 opacity-0 group-hover:opacity-100">
                Why
              </span>
              <div className="w-4 h-[1px] bg-white/20 group-hover:w-6 group-hover:bg-white/40 transition-all duration-300" />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile top nav */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 right-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#09090b]/90 backdrop-blur-md border-b border-white/[0.06]">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-mono tracking-wider text-white/50 uppercase">
                  Why BTS is BTS
                </span>
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="text-white/60 hover:text-white/90 transition-colors p-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              <AnimatePresence>
                {isMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-1">
                      {eras.map((era) => (
                        <button
                          key={era.id}
                          onClick={() => scrollToEra(era.id)}
                          className={`block w-full text-left py-2 px-3 text-sm transition-colors ${
                            activeEra === era.id
                              ? "text-[var(--color-accent)] bg-[var(--color-accent)]/[0.05]"
                              : "text-white/50 hover:text-white/80"
                          }`}
                        >
                          <span className="font-mono text-[10px] text-white/30 mr-3">
                            {era.year}
                          </span>
                          {era.name}
                        </button>
                      ))}
                      <div className="h-px bg-white/[0.06] my-2" />
                      <button
                        onClick={() => scrollToSection("why-bts")}
                        className="block w-full text-left py-2 px-3 text-sm text-white/50 hover:text-white/80 transition-colors"
                      >
                        Why BTS is BTS
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

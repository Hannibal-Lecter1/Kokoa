"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  const scrollToNext = () =>
    document.getElementById("the-perfect-bite")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Premium dark chocolate pouring over fresh raspberries"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-kokoa-dark/75 via-kokoa-dark/55 to-kokoa-dark/85" />

      {/* Subtle parallax decoration */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, #E2375C 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.span
          className="inline-block font-sans text-xs md:text-sm tracking-[0.35em] uppercase text-kokoa-berry mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Ecuadorian Chocolate · Bean to Cup · 100% Upcycled Cacao
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Conscious{" "}
          <span className="italic text-kokoa-berry">Indulgence.</span>
          <br />
          Crafted at the Source.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="font-sans text-base md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          Experience the perfect bite. 100% upcycled Ecuadorian cacao enrobing
          vibrant, fresh-frozen fruit — farmed and finished entirely in Guayaquil.
        </motion.p>

        {/* CTA */}
        <motion.button
          onClick={scrollToNext}
          className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-white border border-kokoa-berry px-10 py-4 hover:bg-kokoa-berry transition-all duration-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Discover the Journey
        </motion.button>
      </div>

      {/* Animated scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-kokoa-berry transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="font-sans text-xs tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Flavor color chips — bottom right decoration */}
      <motion.div
        className="absolute bottom-10 right-6 hidden lg:flex flex-col gap-2 items-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-white/30 mb-1">
          Flavours
        </span>
        {[
          { label: "Raspberries",   color: "#E2375C" },
          { label: "Blueberries",   color: "#6B4FBB" },
          { label: "Passion Fruit", color: "#C2185B" },
          { label: "Banana",        color: "#8D6E63" },
          { label: "Strawberries",  color: "#C62828" },
        ].map((f) => (
          <div key={f.label} className="flex items-center gap-2">
            <span className="font-sans text-xs text-white/40">{f.label}</span>
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: f.color }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

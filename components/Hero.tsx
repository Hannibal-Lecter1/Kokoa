"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () =>
    document.getElementById("the-range")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full bg-kokoa-dark flex items-center overflow-hidden">

      {/* Background texture — subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, #E2375C22 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, #D59F8030 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center py-32 lg:py-0 min-h-screen">

        {/* Left — copy */}
        <div className="order-2 lg:order-1">
          <motion.span
            className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-berry block mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ecuadorian Chocolate · Bean to Cup · 150g
          </motion.span>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-7"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38 }}
          >
            Frozen fruit.
            <br />
            <span className="italic text-kokoa-berry">Ecuadorian</span>
            <br />
            chocolate.
          </motion.h1>

          <motion.p
            className="font-sans text-white/65 text-lg leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
          >
            Whole frozen fruit. Two layers of premium chocolate made
            from bean to cup in Guayaquil, Ecuador.
            No shortcuts. No fillers. Just fruit and real chocolate.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="font-sans text-xs tracking-[0.22em] uppercase text-white border border-kokoa-berry px-9 py-4 hover:bg-kokoa-berry transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See the range
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("partner")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-xs tracking-[0.22em] uppercase text-white/50 px-6 py-4 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Partner with us →
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-5 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            {["Preservative-free", "No artificial colours", "Gluten-free", "Bean to cup"].map((badge) => (
              <span
                key={badge}
                className="font-sans text-xs text-white/35 tracking-wide border border-white/10 rounded-full px-3 py-1"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — hero product image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/products/raspberries-milk.png"
            alt="Kokoa Raspberries — Frozen Raspberries Coated with Premium White & Milk Chocolate"
            className="w-72 md:w-96 lg:w-[420px] xl:w-[480px] object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-kokoa-berry transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}

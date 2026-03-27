"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const products = [
  { src: "/products/petel.png",   alt: "Raspberries White & Milk Chocolate" },
  { src: "/products/pettel.png",  alt: "Raspberries Dark Chocolate" },
  { src: "/products/blue.png",    alt: "Blueberries Dark Chocolate" },
  { src: "/products/passion.png", alt: "Passion Fruit Milk Chocolate" },
  { src: "/products/banana.png",  alt: "Banana White Chocolate" },
  { src: "/products/tot.png",     alt: "Strawberries Dark Chocolate" },
];

function HeroProductVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-[340px] md:w-[460px] lg:w-[560px] xl:w-[630px] h-[400px] md:h-[520px] lg:h-[620px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {/* Wrapper handles fade + scale in/out */}
        <motion.div
          key={index}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Inner img handles float loop independently */}
          <motion.img
            src={products[index].src}
            alt={products[index].alt}
            className="w-full h-full object-contain drop-shadow-2xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ background: i === index ? "#E2375C" : "rgba(255,255,255,0.25)" }}
            aria-label={`Show flavour ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToNext = () =>
    document.getElementById("the-range")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full bg-kokoa-dark flex items-center overflow-hidden">

      {/* Background — scattered tubs lifestyle photo */}
      <img
        src="/lifestyle/scattered.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-700"
        onLoad={(e) => (e.currentTarget.style.opacity = "0.45")}
      />
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-kokoa-dark/70" />

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
            className="flex flex-wrap gap-3 mt-10"
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

        {/* Right — hero product */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroProductVisual />
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

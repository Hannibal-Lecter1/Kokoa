"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { frozenFlavors } from "@/lib/products";

const heroProducts = frozenFlavors.map((f) => ({ src: f.image, alt: `${f.name} — ${f.chocolate}` }));

function HeroProductVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroProducts.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-[340px] md:w-[460px] lg:w-[560px] xl:w-[630px] h-[400px] md:h-[520px] lg:h-[620px]">
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -16, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        {heroProducts.map((p, i) => (
          <motion.img
            key={p.src}
            src={p.src}
            alt={p.alt}
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            style={{ pointerEvents: i === index ? "auto" : "none" }}
            animate={
              i === index
                ? { opacity: 1, scale: 1,    y: 0,  filter: "blur(0px)" }
                : { opacity: 0, scale: 0.94, y: 18, filter: "blur(4px)" }
            }
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        ))}
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-500"
            style={{ background: i === index ? "#E8284F" : "rgba(74,45,36,0.25)" }}
            aria-label={`Show flavour ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function HeroBackground() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      img.style.opacity = "0.40";
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src="/lifestyle/scattered.jpeg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: 0, transition: "opacity 0.7s ease" }}
      onLoad={(e) => { e.currentTarget.style.opacity = "0.40"; }}
    />
  );
}

export default function Hero() {
  const scrollToNext = () =>
    document.getElementById("the-range")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen w-full bg-kokoa-paper flex items-center overflow-hidden">

      <HeroBackground />
      <div className="absolute inset-0 bg-kokoa-paper/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center py-32 lg:py-0 min-h-screen">

        {/* Left — copy */}
        <div className="order-2 lg:order-1">
          <motion.span
            className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-berry block mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Double-Coated · Ecuadorian Chocolate · 6 oz
          </motion.span>

          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-kokoa-dark leading-[1.08] mb-7"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38 }}
          >
            Real Frozen Fruit.
            <br />
            <span className="italic text-kokoa-berry">Double-Coated</span>
            <br />
            in Ecuadorian
            <br />
            Chocolate.
          </motion.h1>

          <motion.p
            className="font-sans text-kokoa-dark/55 text-lg leading-relaxed max-w-md mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
          >
            Real fruit inside. Two layers of premium chocolate outside.
            Crafted at the source in Ecuador.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="font-sans text-xs tracking-[0.22em] uppercase text-kokoa-dark border border-kokoa-berry px-9 py-4 hover:bg-kokoa-berry hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See the range
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("partner")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-xs tracking-[0.22em] uppercase text-kokoa-dark/40 px-6 py-4 hover:text-kokoa-berry transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Partner with us →
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            {["Made with real fruit", "No artificial colors or flavors", "Double-coated", "Crafted in Ecuador"].map((badge) => (
              <span
                key={badge}
                className="font-sans text-xs text-kokoa-dark/40 tracking-wide border border-kokoa-dark/10 rounded-full px-3 py-1"
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

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-kokoa-dark/25 hover:text-kokoa-berry transition-colors duration-300"
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

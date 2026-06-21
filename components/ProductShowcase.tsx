"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { frozenFlavors } from "@/lib/products";

const taglines: Record<string, string> = {
  "strawberry":  "Whole frozen strawberry inside. Two layers of smooth Ecuadorian chocolate outside.",
  "rasp-milk":   "Bright, tangy whole raspberry — enrobed in a creamy white and milk chocolate shell.",
  "rasp-dark":   "The same juicy raspberry, finished with a bold Ecuadorian 70% dark chocolate.",
  "blue":        "Plump whole blueberries enrobed in smooth white and velvety milk chocolate.",
  "banana":      "Sweet frozen banana slice — a rich white inner layer, bold dark chocolate outside.",
  "pina-colada": "Tropical pineapple coated in vegan white chocolate with a finish of coconut flakes.",
};

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(frozenFlavors[0].id);
  const current = frozenFlavors.find((f) => f.id === activeId)!;

  return (
    <section id="the-range" className="bg-kokoa-paper py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-berry block mb-4">
            The Frozen Fruit Range
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-kokoa-dark">
            Real fruit.{" "}
            <span className="italic text-kokoa-berry">Double-coated.</span>
          </h2>
          <p className="font-sans text-kokoa-dark/55 text-lg mt-4 max-w-lg leading-relaxed">
            Whole frozen fruit. Two layers of premium Ecuadorian chocolate. Nothing artificial.
          </p>

          {/* Selling-point strip */}
          <div className="flex flex-wrap gap-3 mt-7">
            {["Real frozen fruit", "Double-coated", "Ecuadorian chocolate", "Crafted in Ecuador"].map((pt) => (
              <span key={pt} className="font-sans text-xs text-kokoa-dark/50 border border-kokoa-dark/10 rounded-full px-4 py-1.5">
                {pt}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Interactive display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Product image */}
          <div className="flex justify-center min-h-[320px] items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.showcaseImage ?? current.image}
                alt={`Kokoa ${current.name} — ${current.chocolate}`}
                className="w-72 md:w-80 lg:w-[26rem] xl:w-[30rem] object-contain drop-shadow-xl"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1,   y: 0  }}
                exit={{   opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Info + selector */}
          <div>
            <div className="flex flex-wrap gap-3 mb-10">
              {frozenFlavors.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  className={`font-sans text-sm px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    activeId === f.id
                      ? "text-white border-transparent shadow-md"
                      : "text-kokoa-dark/60 border-kokoa-dark/15 hover:border-kokoa-dark/30 bg-white"
                  }`}
                  style={activeId === f.id ? { backgroundColor: f.accentColor } : {}}
                >
                  {f.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{   opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: current.accentColor }} />
                <h3 className="font-serif text-4xl md:text-5xl text-kokoa-dark mb-2">
                  {current.name}
                </h3>
                <p className="font-sans text-xs tracking-[0.25em] uppercase mb-6"
                   style={{ color: current.accentColor }}>
                  {current.chocolate}
                </p>
                <p className="font-sans text-kokoa-dark/65 text-lg leading-relaxed mb-8 max-w-md">
                  {taglines[current.id] ?? current.fruit}
                </p>

                <div className="flex flex-wrap gap-6">
                  {[
                    { label: "Format",      value: "6 oz (170g) · US Retail" },
                    { label: "Chocolate",   value: "Crafted in Ecuador" },
                    { label: "Allergens",   value: "Milk, soy" },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/35 mb-1">
                        {spec.label}
                      </p>
                      <p className="font-sans text-sm text-kokoa-dark font-medium">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mini-card grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {frozenFlavors.map((f, i) => (
            <motion.button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              className={`rounded-xl p-4 border text-left transition-all duration-300 ${
                activeId === f.id
                  ? "border-kokoa-dark/20 bg-white shadow-md"
                  : "border-kokoa-dark/8 bg-white/50 hover:bg-white hover:border-kokoa-dark/15"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-24 object-contain mb-3"
              />
              <p className="font-serif text-sm text-kokoa-dark leading-tight mb-0.5">{f.name}</p>
              <p className="font-sans text-xs text-kokoa-dark/40 leading-tight">{f.chocolate}</p>
              <div className="w-2.5 h-2.5 rounded-full mt-3" style={{ backgroundColor: f.accentColor }} />
            </motion.button>
          ))}
        </motion.div>

        {/* EU formats placeholder */}
        <motion.div
          className="mt-10 border border-dashed border-kokoa-dark/15 rounded-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-kokoa-dark/35 mb-2">European Markets</p>
          <p className="font-sans text-kokoa-dark/50 text-sm">
            European formats available — contact us for specifications and distribution details.
          </p>
          <a
            href="#partner"
            className="inline-block mt-4 font-sans text-xs tracking-[0.2em] uppercase text-kokoa-berry border border-kokoa-berry px-6 py-2 hover:bg-kokoa-berry hover:text-white transition-all duration-300"
          >
            Request EU Specs →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

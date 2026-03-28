"use client";

import { motion } from "framer-motion";
import { Layers3, Droplets, Leaf } from "lucide-react";

const pillars = [
  {
    Icon:        Layers3,
    title:       "The Bean",
    description: "The cacao seeds are fermented, sun-dried, roasted, and conched entirely in Guayaquil. The chocolate in every Kokoa tub never leaves Ecuador until it's finished.",
    stat:        "100%",
    statLabel:   "Made in Ecuador",
  },
  {
    Icon:        Droplets,
    title:       "The Pulp",
    description: "The sweet white mucilage around each seed — usually discarded — is pressed into juice and reduced into a natural sweetening syrup used in our recipes instead of refined sugar.",
    stat:        "0",
    statLabel:   "Refined sugar added",
  },
  {
    Icon:        Leaf,
    title:       "The Husk",
    description: "The pod shell — 70–80% of the fruit by weight, typically left to rot — is dried and milled into a fibre-rich flour. Nothing from the cacao plant ends up as waste.",
    stat:        "10M+",
    statLabel:   "Tonnes wasted globally per year — we're changing that",
  },
];

export default function Upcycle() {
  return (
    <section id="upcycling" className="bg-white py-28 px-6 overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-sage block mb-4">
            The whole fruit
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-kokoa-dark leading-tight">
            Nothing wasted.
            <br />
            <span className="italic text-kokoa-sage">Everything used.</span>
          </h2>
          <p className="font-sans text-kokoa-dark/55 text-lg mt-5 max-w-xl leading-relaxed">
            Most chocolate uses only the seeds — around 20% of the fruit.
            We use all of it.
          </p>
        </motion.div>

        {/* 3-pillar grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map(({ Icon, stat, statLabel, title, description }, i) => (
            <motion.div
              key={title}
              className="bg-[#F7FBF2] border border-kokoa-sage/15 rounded-2xl p-8"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              <div className="w-12 h-12 bg-kokoa-berry rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-serif text-5xl text-kokoa-dark font-bold leading-none mb-1">
                {stat}
              </p>
              <p className="font-sans text-kokoa-dark/35 text-xs tracking-widest uppercase mb-7">
                {statLabel}
              </p>
              <h3 className="font-serif text-2xl text-kokoa-dark mb-3">{title}</h3>
              <p className="font-sans text-kokoa-dark/60 leading-relaxed text-sm">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout stat */}
        <motion.div
          className="bg-kokoa-sage/8 border border-kokoa-sage/20 rounded-2xl px-8 py-10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif text-6xl md:text-7xl text-kokoa-sage font-bold mb-3">3.5B</p>
          <p className="font-sans text-kokoa-dark/50 text-sm tracking-wide leading-relaxed">
            Trees' worth of CO₂ emissions could be avoided every year
            <br />
            if the global cacao industry used the whole fruit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

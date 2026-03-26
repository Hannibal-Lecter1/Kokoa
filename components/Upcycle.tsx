"use client";

import { motion } from "framer-motion";
import { Layers3, Droplets, Leaf } from "lucide-react";

const pillars = [
  {
    Icon:       Layers3,
    stat:       "100%",
    statLabel:  "Local Processing",
    title:      "The Bean",
    description:
      "Arriba Nacional seeds are fermented in hand-crafted wooden boxes, sun-dried, then roasted and conched entirely within Ecuador. Every step from farm to final temper stays in Guayaquil, keeping the highest margins of value in the country of origin.",
  },
  {
    Icon:       Droplets,
    stat:       "0",
    statLabel:  "Artificial Sweeteners",
    title:      "The Pulp",
    description:
      "The sweet, tropical mucilage surrounding the seeds — reminiscent of lychee and white peach — is cold-pressed into juice and reduced into a natural syrup. This replaces refined cane sugar in our formulations, delivering authentic cacao sweetness with zero artificial inputs.",
  },
  {
    Icon:       Leaf,
    stat:       "10M+",
    statLabel:  "Tons Saved Annually (industry)",
    title:      "The Husk",
    description:
      "The fibrous cascara pod — which constitutes 70–80% of the fruit by weight and is traditionally left to rot — is dried, milled, and pulverized into a nutrient-dense flour rich in dietary fiber, lignin, and bioactive antioxidants. Waste becomes value.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Upcycle() {
  return (
    <section id="upcycling" className="bg-kokoa-sage py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-white/50 block mb-5">
            Our Ecological Promise
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Nothing Wasted.
            <br />
            <em className="not-italic italic">Everything Gained.</em>
          </h2>
          <p className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We upcycle 100% of the cacao fruit to protect our planet, reduce
            carbon emissions, and elevate your palate.
          </p>
        </motion.div>

        {/* Impact stat banner */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-10 md:px-16 py-10 text-center max-w-xl w-full">
            <p className="font-serif text-7xl md:text-8xl text-white font-bold leading-none mb-3">
              3.5B
            </p>
            <p className="font-sans text-white/60 text-sm tracking-[0.2em] uppercase leading-relaxed">
              Trees worth of CO₂ saved annually
              <br />
              if the global cacao industry utilized the entire fruit
            </p>
          </div>
        </motion.div>

        {/* 3-pillar grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map(({ Icon, stat, statLabel, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 flex flex-col"
            >
              {/* Icon badge */}
              <div className="w-14 h-14 bg-kokoa-berry rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Stat */}
              <p className="font-serif text-5xl text-white font-bold leading-none mb-1">
                {stat}
              </p>
              <p className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase mb-7">
                {statLabel}
              </p>

              {/* Content */}
              <h3 className="font-serif text-2xl text-white mb-4">{title}</h3>
              <p className="font-sans text-white/65 leading-relaxed text-sm flex-1">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom declaration */}
        <motion.p
          className="font-sans text-center text-white/30 text-xs tracking-[0.25em] uppercase mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Preservative-Free · No Artificial Colors · Gluten-Free · 100% Upcycled Cacao
        </motion.p>
      </div>
    </section>
  );
}

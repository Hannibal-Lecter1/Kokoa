"use client";

import { motion } from "framer-motion";
import { Sprout, Droplets, MapPin } from "lucide-react";

const pillars = [
  {
    Icon:        MapPin,
    title:       "Crafted at the Source",
    description: "From the cacao farm to the finished product — everything happens in Ecuador. The chocolate in every Kokoa tub is made where the cacao grows.",
    stat:        "Ecuador",
    statLabel:   "Produced at origin",
  },
  {
    Icon:        Droplets,
    title:       "The Cacao Fruit",
    description: "Most chocolate uses only the cacao seeds. The cacao pod contains much more — including a juicy white pulp that surrounds each seed. Working toward fuller use of the cacao fruit is part of the KOKOA story.",
    stat:        "Full Pod",
    statLabel:   "Working toward fuller use",
  },
  {
    Icon:        Sprout,
    title:       "Real Ingredients",
    description: "No artificial colors or flavors. Made with real fruit. The ingredients list is short because the product is honest.",
    stat:        "Real",
    statLabel:   "No artificial colors or flavors",
  },
];

export default function Upcycle() {
  return (
    <section id="our-story" className="bg-kokoa-paper py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-sage block mb-4">
            The KOKOA Story
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-kokoa-dark leading-tight">
            From Bean to Fruit
            <br />
            <span className="italic text-kokoa-sage">to Table.</span>
          </h2>
          <p className="font-sans text-kokoa-dark/55 text-lg mt-5 max-w-xl leading-relaxed">
            KOKOA starts with real frozen fruit and real Ecuadorian chocolate.
            We are also working toward making fuller use of the cacao fruit — a journey that is part of everything we do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
              <p className="font-serif text-4xl text-kokoa-dark font-bold leading-none mb-1">
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
      </div>
    </section>
  );
}

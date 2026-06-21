"use client";

import { motion } from "framer-motion";
import { beverages } from "@/lib/products";

const badges = ["No Sugar Added", "Electrolytes", "Prebiotic Fiber", "No Artificial Ingredients"];

export default function BeverageSection() {
  return (
    <section id="beverages" className="bg-kokoa-dark py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans text-xs tracking-[0.45em] uppercase text-kokoa-husk block mb-5">
            Beyond the Cacao Bean
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Discover the{" "}
            <span className="italic text-kokoa-husk">Refreshing Side</span>
            <br />
            of the Cacao Fruit
          </h2>
          <p className="font-sans text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            The tropical pulp surrounding the cacao bean is naturally fruity and refreshing.
            We transform it into a new generation of cacao superfruit beverages.
          </p>

          {/* Badge strip */}
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="font-sans text-xs text-white/50 border border-white/15 rounded-full px-4 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottle grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {beverages.map((bev, i) => (
            <motion.div
              key={bev.id}
              className="rounded-2xl p-8 flex flex-col items-center text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.img
                src={bev.image}
                alt={`Kokoa Cacao Fruit Nectar — ${bev.name}`}
                className="h-64 w-auto object-contain mb-8 drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 + i * 0.7, ease: "easeInOut" }}
              />
              <div
                className="w-8 h-0.5 rounded-full mb-4"
                style={{ backgroundColor: bev.accentColor }}
              />
              <h3 className="font-serif text-2xl text-white mb-3">{bev.name}</h3>
              <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">
                {bev.descriptor}
              </p>
              <p className="font-sans text-xs text-white/30 tracking-widest uppercase">
                10 FL OZ · 296 ml · Ecuador Origin
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-white/35 text-xs tracking-wide mb-5">
            Cacao Superfruit Nectar · Tropical Hydration from the Cacao Fruit
          </p>
          <a
            href="#partner"
            className="inline-block font-sans text-xs tracking-[0.22em] uppercase text-kokoa-husk border border-kokoa-husk/50 px-8 py-3.5 hover:bg-kokoa-husk hover:text-kokoa-dark transition-all duration-300"
          >
            Inquire About Beverages →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

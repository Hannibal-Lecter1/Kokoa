"use client";

import { motion } from "framer-motion";

const PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80";

const layers = [
  {
    number: "01",
    title: "The Vibrant Core",
    subtitle: "Fresh-Frozen Fruit",
    description:
      "At the heart of every Kokoa bite lies pristine whole fruit — raspberries, blueberries, passion fruit — flash-frozen at peak ripeness. The cold, intensely flavored core creates a dramatic textural contrast against the surrounding warmth of premium chocolate, releasing an explosion of natural juice at the first bite.",
    accent: "#E2375C",
  },
  {
    number: "02",
    title: "The Creamy Insulation",
    subtitle: "Premium White Chocolate",
    description:
      "An architectural layer of velvety white chocolate — crafted from Ecuadorian cacao butter — wraps the frozen fruit core. This insulating shell moderates the temperature differential, provides a delicate milky sweetness, and prevents the outer dark layer from cracking under thermal stress. Engineering and indulgence, perfectly unified.",
    accent: "#D59F80",
  },
  {
    number: "03",
    title: "The Dark Finish",
    subtitle: "Arriba Nacional Chocolate",
    description:
      "The outer shell is forged from Arriba Nacional beans — Ecuador's ancient, fine-flavor cacao variety, celebrated globally for its complex floral aroma, herbaceous finish, and remarkable absence of bitterness. Roasted, conched, and tempered locally in Guayaquil, this chocolate is the culmination of five thousand years of agronomic mastery.",
    accent: "#3E2723",
  },
];

const flavors = [
  { name: "Raspberries",       chocolate: "White & Milk",  color: "#E2375C" },
  { name: "Blueberries",       chocolate: "White & Milk",  color: "#6B4FBB" },
  { name: "Passion Fruit",     chocolate: "White & Milk",  color: "#C2185B" },
  { name: "Banana",            chocolate: "White & Dark",  color: "#8D6E63" },
  { name: "Strawberries",      chocolate: "White & Milk",  color: "#C62828" },
  { name: "Raspberries Dark",  chocolate: "White & Dark",  color: "#6D1B1B" },
];

export default function ProductShowcase() {
  return (
    <section id="the-perfect-bite" className="bg-kokoa-cream">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.span
          className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-sage block mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          The Architecture of Indulgence
        </motion.span>
        <motion.h2
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-kokoa-dark leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Every Layer,{" "}
          <span className="italic text-kokoa-berry">a Story.</span>
        </motion.h2>
      </div>

      {/* Flavor palette strip */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {flavors.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-2 bg-white/60 border border-kokoa-dark/10 rounded-full px-4 py-2 shadow-sm"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: f.color }}
              />
              <span className="font-sans text-xs text-kokoa-dark font-medium">
                {f.name}
              </span>
              <span className="font-sans text-xs text-kokoa-dark/40">
                · {f.chocolate}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sticky split-screen */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Sticky image — desktop only */}
          <div className="hidden lg:block w-1/2 sticky top-24 self-start">
            <motion.div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-kokoa-dark shadow-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PRODUCT_IMAGE}
                alt="Cross-section of Kokoa chocolate-covered raspberry"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-kokoa-dark/80 via-transparent to-transparent" />

              {/* Anatomy legend */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-sans text-white/50 text-xs tracking-[0.3em] uppercase mb-2">
                  Cross-section view
                </p>
                <p className="font-serif text-white text-xl">
                  The Anatomy of a Kokoa Bite
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {[
                    { dot: "#E2375C", label: "Fresh-frozen fruit core" },
                    { dot: "#F8F3EB", label: "White chocolate insulation" },
                    { dot: "#3E2723", label: "Arriba Nacional outer shell" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.dot }}
                      />
                      <span className="font-sans text-xs text-white/70">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrollable layer cards */}
          <div className="w-full lg:w-1/2 space-y-2">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                className="py-14 border-b border-kokoa-dark/10 last:border-none"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
              >
                <div className="flex items-start gap-6">
                  {/* Number accent line */}
                  <div
                    className="w-1 flex-shrink-0 rounded-full mt-2"
                    style={{ backgroundColor: layer.accent, height: "3rem" }}
                  />
                  <div>
                    <span className="font-sans text-xs tracking-[0.4em] text-kokoa-berry uppercase">
                      {layer.number}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-kokoa-dark mt-2 mb-1 leading-tight">
                      {layer.title}
                    </h3>
                    <p className="font-sans text-xs tracking-[0.25em] text-kokoa-sage uppercase mb-6">
                      {layer.subtitle}
                    </p>
                    <p className="font-sans text-kokoa-dark/65 leading-relaxed text-lg">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

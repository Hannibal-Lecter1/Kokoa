"use client";

import { motion } from "framer-motion";

const products = [
  { src: "/products/petel.png",   alt: "Raspberries White & Milk",  label: "Raspberries",       sub: "White & Milk Choc" },
  { src: "/products/pettel.png",  alt: "Raspberries Dark",          label: "Raspberries",       sub: "Dark Chocolate" },
  { src: "/products/blue.png",    alt: "Blueberries",               label: "Blueberries",       sub: "Dark Chocolate" },
  { src: "/products/passion.png", alt: "Passion Fruit",             label: "Passion Fruit",     sub: "Milk Chocolate" },
  { src: "/products/banana.png",  alt: "Banana",                    label: "Banana",            sub: "White Chocolate" },
  { src: "/products/tot.png",     alt: "Strawberries",              label: "Strawberries",      sub: "Dark Chocolate" },
];

export default function ShelfDisplay() {
  return (
    <section className="relative bg-[#0D0D0D] overflow-hidden py-20 px-6">
      {/* Ambient fridge glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#4A5D23]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-kokoa-berry/10 blur-[100px] rounded-full" />
      </div>

      {/* Section header */}
      <motion.div
        className="relative z-10 text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-kokoa-husk mb-3">
          Find us in the frozen aisle
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-white">
          Six flavours. One obsession.
        </h2>
      </motion.div>

      {/* Fridge cabinet */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Glass door frame */}
        <div
          className="relative rounded-2xl overflow-hidden border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "inset 0 0 60px 0 rgba(255,255,255,0.03), 0 0 80px 0 rgba(74,93,35,0.15)",
          }}
        >
          {/* Top shelf bar */}
          <div className="h-2 bg-gradient-to-r from-white/5 via-white/15 to-white/5 border-b border-white/10" />

          {/* Shelf interior */}
          <div className="px-8 pt-10 pb-6">
            {/* Products row */}
            <div className="flex items-end justify-center gap-4 md:gap-6">
              {products.map((p, i) => (
                <motion.div
                  key={p.src}
                  className="flex flex-col items-center gap-3 flex-1 min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                >
                  {/* Product tub */}
                  <div className="relative w-full flex justify-center">
                    {/* Drop shadow on floor */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-3 rounded-full blur-md opacity-50"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                    />
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="relative w-full max-w-[110px] h-auto object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Label */}
                  <div className="text-center leading-tight">
                    <p className="font-serif text-white text-xs font-semibold truncate w-full">
                      {p.label}
                    </p>
                    <p className="font-sans text-kokoa-husk text-[10px] truncate w-full">
                      {p.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Shelf plank */}
            <div
              className="mt-6 h-[6px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 80%, transparent)",
                boxShadow: "0 3px 12px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* Fridge floor */}
          <div className="h-10 bg-gradient-to-b from-white/[0.02] to-transparent border-t border-white/5" />

          {/* Glass reflection streak */}
          <div
            className="pointer-events-none absolute top-0 left-[15%] w-[8px] h-full opacity-[0.07]"
            style={{
              background:
                "linear-gradient(90deg, transparent, white, transparent)",
            }}
          />
        </div>

        {/* Fridge feet */}
        <div className="flex justify-between px-12 mt-1">
          {[0, 1].map((f) => (
            <div
              key={f}
              className="w-6 h-3 rounded-b-sm"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <motion.p
        className="relative z-10 text-center font-sans text-sm text-white/40 mt-10 tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Frozen at source · Ecuadorian Arriba Nacional Chocolate · Available nationwide
      </motion.p>
    </section>
  );
}

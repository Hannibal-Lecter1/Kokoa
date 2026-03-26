"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    slug:       "raspberries-milk",
    name:       "Raspberries",
    chocolate:  "White & Milk Chocolate",
    lid:        "#E2375C",
    image:      "/products/raspberries-milk.png",
    tagline:    "Bright, tangy raspberries inside a creamy white and milk chocolate shell.",
    weight:     "150g",
  },
  {
    slug:       "raspberries-dark",
    name:       "Raspberries Dark",
    chocolate:  "White & Dark Chocolate",
    lid:        "#8B2252",
    image:      "/products/raspberries-dark.png",
    tagline:    "The same juicy raspberry, finished with a bold Ecuadorian dark chocolate.",
    weight:     "150g",
  },
  {
    slug:       "blueberries",
    name:       "Blueberries",
    chocolate:  "White & Milk Chocolate",
    lid:        "#6B4FA8",
    image:      "/products/blueberries.png",
    tagline:    "Plump frozen blueberries enrobed in smooth white and velvety milk chocolate.",
    weight:     "150g",
  },
  {
    slug:       "passion-fruit",
    name:       "Passion Fruit",
    chocolate:  "White & Milk Chocolate",
    lid:        "#7C3FA0",
    image:      "/products/passion-fruit.png",
    tagline:    "Tropical passion fruit, tart and fragrant, coated in premium Ecuadorian milk chocolate.",
    weight:     "150g",
  },
  {
    slug:       "banana",
    name:       "Banana",
    chocolate:  "White & Dark Chocolate",
    lid:        "#A07840",
    image:      "/products/banana.png",
    tagline:    "Sweet frozen banana with a rich white layer and a deep dark chocolate finish.",
    weight:     "150g",
  },
];

// Per-product fallback tub rendered entirely in CSS/SVG
function ProductFallback({ product }: { product: typeof products[0] }) {
  return (
    <div className="w-56 md:w-64 flex flex-col items-center gap-3 select-none">
      {/* Floating lid */}
      <motion.div
        className="w-44 h-10 rounded-full shadow-lg flex items-center justify-center"
        style={{ backgroundColor: product.lid }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <span className="font-sans text-white text-[10px] tracking-[0.25em] uppercase font-semibold">
          KOKOA
        </span>
      </motion.div>

      {/* Tub body */}
      <div className="w-40 md:w-44 rounded-b-2xl rounded-t-lg bg-white border border-gray-100 shadow-xl overflow-hidden">
        {/* Coloured top band matching lid */}
        <div className="h-2" style={{ backgroundColor: product.lid }} />
        <div className="px-4 py-5 flex flex-col items-center text-center gap-1">
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400">
            Ecuadorian Chocolate · Bean to Cup
          </span>
          <span
            className="font-serif text-lg font-bold mt-1"
            style={{ color: product.lid }}
          >
            {product.name}
          </span>
          <span className="font-sans text-[10px] text-gray-500 leading-tight">
            {product.chocolate}
          </span>
          <span className="font-sans text-[10px] text-gray-400 mt-2">
            Net Weight: {product.weight}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductImage({ product }: { product: typeof products[0] }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <ProductFallback product={product} />;

  return (
    <img
      src={product.image}
      alt={`Kokoa ${product.name} — ${product.chocolate}`}
      className="w-64 md:w-72 lg:w-80 xl:w-96 object-contain drop-shadow-xl"
      onError={() => setFailed(true)}
    />
  );
}

function MiniCardImage({ product }: { product: typeof products[0] }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="w-full h-24 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: product.lid + "22" }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: product.lid }}
        />
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-24 object-contain mb-3"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductShowcase() {
  const [active, setActive] = useState(products[0].slug);
  const current = products.find((p) => p.slug === active)!;

  return (
    <section id="the-range" className="bg-kokoa-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-sage block mb-4">
            The Range
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-kokoa-dark">
            Five fruits.{" "}
            <span className="italic">One obsession.</span>
          </h2>
          <p className="font-sans text-kokoa-dark/55 text-lg mt-4 max-w-lg leading-relaxed">
            150g of whole frozen fruit, coated in two layers of premium chocolate
            made entirely in Ecuador.
          </p>
        </motion.div>

        {/* Interactive product display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — product image */}
          <div className="flex justify-center min-h-[320px] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1,   y: 0  }}
                exit={{   opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProductImage product={current} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — info + selector */}
          <div>
            {/* Flavour selector pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {products.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => setActive(p.slug)}
                  className={`font-sans text-sm px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    active === p.slug
                      ? "text-white border-transparent shadow-md"
                      : "text-kokoa-dark/60 border-kokoa-dark/15 hover:border-kokoa-dark/30 bg-white"
                  }`}
                  style={active === p.slug ? { backgroundColor: p.lid, borderColor: p.lid } : {}}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Active product info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{   opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-1 rounded-full mb-6" style={{ backgroundColor: current.lid }} />

                <h3 className="font-serif text-4xl md:text-5xl text-kokoa-dark mb-2">
                  {current.name}
                </h3>
                <p className="font-sans text-xs tracking-[0.25em] uppercase mb-6"
                   style={{ color: current.lid }}>
                  {current.chocolate}
                </p>
                <p className="font-sans text-kokoa-dark/65 text-lg leading-relaxed mb-8 max-w-md">
                  {current.tagline}
                </p>

                <div className="flex flex-wrap gap-6">
                  {[
                    { label: "Net weight",    value: current.weight },
                    { label: "Chocolate",     value: "Bean to cup, Ecuador" },
                    { label: "Preservatives", value: "None" },
                    { label: "Allergens",     value: "Milk, soy" },
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

        {/* Bottom mini card grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {products.map((p, i) => (
            <motion.button
              key={p.slug}
              onClick={() => setActive(p.slug)}
              className={`rounded-xl p-4 border text-left transition-all duration-300 ${
                active === p.slug
                  ? "border-kokoa-dark/20 bg-white shadow-md"
                  : "border-kokoa-dark/8 bg-white/50 hover:bg-white hover:border-kokoa-dark/15"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <MiniCardImage product={p} />
              <p className="font-serif text-sm text-kokoa-dark leading-tight mb-0.5">
                {p.name}
              </p>
              <p className="font-sans text-xs text-kokoa-dark/40 leading-tight">
                {p.chocolate}
              </p>
              <div className="w-2.5 h-2.5 rounded-full mt-3" style={{ backgroundColor: p.lid }} />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

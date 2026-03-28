"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number:      "01",
    tag:         "The origin",
    title:       "5,000 years of cacao",
    subtitle:    "Ecuador",
    description:
      "Cacao was first domesticated in Ecuador — not Mesoamerica. The Mayo-Chinchipe people were cultivating it over 5,000 years ago. Ecuador is the original home of chocolate, and that heritage is in every Kokoa tub.",
    bg: "#3E2723",
    text: "#F8F3EB",
  },
  {
    number:      "02",
    tag:         "The bean",
    title:       "Arriba Nacional",
    subtitle:    "Fine-flavour cacao",
    description:
      "Ecuador grows Arriba Nacional — one of the world's only fine-flavour cacao varieties. It's floral, complex, and not bitter. The world's best chocolatiers source it specifically. We grow it, process it, and coat your fruit in it.",
    bg: "#4A5D23",
    text: "#F8F3EB",
  },
  {
    number:      "03",
    tag:         "The process",
    title:       "Bean to cup in Guayaquil",
    subtitle:    "No export. No middlemen.",
    description:
      "Fermenting, roasting, conching, tempering, enrobing — it all happens in Guayaquil. We don't ship raw beans to Europe to be turned into chocolate. We make the chocolate here, where the cacao grows. The value stays in Ecuador.",
    bg: "#5C3317",
    text: "#F8F3EB",
  },
  {
    number:      "04",
    tag:         "The product",
    title:       "Whole fruit. Real chocolate.",
    subtitle:    "150g per tub",
    description:
      "The fruit goes in frozen. Two layers of chocolate go on outside. That's it. No artificial colours, no preservatives, no flavourings. The ingredients list is short because the product is honest.",
    bg: "#E2375C",
    text: "#ffffff",
  },
];

export default function Origin() {
  return (
    <section id="origin" className="bg-kokoa-paper py-20 px-6 md:px-12">
      {/* Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-dark/40 block mb-3">
          Ecuadorian roots
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kokoa-dark leading-tight">
          Why Ecuador
          <span className="italic text-kokoa-dark/50"> matters.</span>
        </h2>
      </motion.div>

      {/* 2×2 card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundColor: card.bg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span
                  className="font-sans text-xs tracking-[0.3em] uppercase opacity-50"
                  style={{ color: card.text }}
                >
                  {card.tag}
                </span>
                <span
                  className="font-serif text-5xl font-bold opacity-15"
                  style={{ color: card.text }}
                >
                  {card.number}
                </span>
              </div>
              <h3
                className="font-serif text-3xl md:text-4xl leading-tight mb-2"
                style={{ color: card.text }}
              >
                {card.title}
              </h3>
              <p
                className="font-sans text-xs tracking-[0.2em] uppercase mb-6 opacity-50"
                style={{ color: card.text }}
              >
                {card.subtitle}
              </p>
              <p
                className="font-sans leading-relaxed text-sm opacity-70"
                style={{ color: card.text }}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

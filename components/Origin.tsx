"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    number:      "01",
    title:       "The Volcanic Soil",
    subtitle:    "Guayas River Region, Ecuador",
    description:
      "Forged over millennia by volcanic activity, the mineral-rich soils of Ecuador's Guayas River basin provide the ideal substrate for the Arriba Nacional cacao tree. Magnesium supports photosynthesis, potassium regulates water retention, and calcium strengthens root systems — together creating a terroir unlike any other on Earth.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    tag: "Terroir",
  },
  {
    number:      "02",
    title:       "The Arriba Nacional Bean",
    subtitle:    "5,000 Years of Heritage",
    description:
      "Recent archaeological discoveries in the Mayo-Chinchipe region confirm cacao was first domesticated in Ecuador over 5,000 years ago — pre-dating Mesoamerican use. The Arriba Nacional variety is a genetically distinct, fine-flavor bean prized by the world's best chocolatiers for its complex floral aroma, herbaceous finishing notes, and remarkable lack of bitterness.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    tag: "Heritage",
  },
  {
    number:      "03",
    title:       "The Local Farmers",
    subtitle:    "Direct Trade & Community Empowerment",
    description:
      "Kokoa actively rejects the colonial-era bulk-export model. By partnering directly with local farming cooperatives in Ecuador, we ensure farmers receive full and fair value for their entire harvest — not merely the beans. This direct-trade approach empowers communities, preserves genetic biodiversity, and builds generational prosperity within Ecuador.",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
    tag: "Community",
  },
  {
    number:      "04",
    title:       "Bean to Cup in Guayaquil",
    subtitle:    "Local Manufacturing. Global Impact.",
    description:
      "Every stage of production — from fermentation in hand-crafted wooden boxes and open-air sun-drying to precision roasting, conching, and final enrobing — occurs entirely in Guayaquil, Ecuador. By manufacturing locally, Kokoa keeps the highest value-added margins in the country of origin, drastically cuts shipping emissions, and guarantees unparalleled quality at every step.",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=80",
    tag: "Bean to Cup",
  },
];

export default function Origin() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move the cards container left as the user scrolls down through the tall section.
  // With 4 cards of ~38vw each, we need to translate ~3 card-widths to the left.
  // "-75%" of the flex container's own width ≈ 3 cards, landing on card 4.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      id="origin"
      ref={containerRef}
      className="relative bg-kokoa-husk"
      style={{ height: "450vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Section header */}
        <div className="px-6 md:px-12 mb-10 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-dark/45 block mb-3">
              Our Roots
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kokoa-dark leading-tight">
              From Ecuador.{" "}
              <span className="italic text-kokoa-dark/60">For the World.</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal slider */}
        <div className="overflow-hidden flex-shrink-0">
          <motion.div
            className="flex gap-5 px-6 md:px-12"
            style={{ x }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80vw] md:w-[46vw] lg:w-[38vw] bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 md:h-64 overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-xs tracking-[0.25em] uppercase bg-kokoa-dark/80 text-white px-3 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="font-sans text-xs tracking-[0.4em] text-kokoa-berry uppercase">
                    {card.number}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-kokoa-dark mt-2 mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs tracking-[0.2em] text-kokoa-sage uppercase mb-5">
                    {card.subtitle}
                  </p>
                  <p className="font-sans text-kokoa-dark/65 leading-relaxed text-sm flex-1">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Spacer card — ensures last card doesn't sit flush at the edge */}
            <div className="flex-shrink-0 w-6 md:w-12" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="px-6 md:px-12 mt-8 flex items-center gap-4">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-kokoa-dark/35">
            Scroll to explore
          </p>
          <div className="flex gap-2">
            {cards.map((_, i) => (
              <motion.div
                key={i}
                className="h-0.5 bg-kokoa-dark/20 rounded-full overflow-hidden"
                style={{ width: "40px" }}
              >
                <motion.div
                  className="h-full bg-kokoa-dark rounded-full origin-left"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [i / cards.length, (i + 1) / cards.length],
                      [0, 1]
                    ),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

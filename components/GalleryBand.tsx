"use client";

import { motion } from "framer-motion";

/**
 * Side-by-side lifestyle photo gallery — sits between main sections.
 * Images maintain their natural aspect ratios; no cropping or stretching.
 */
export function GalleryDuo() {
  const photos = [
    {
      src: "/lifestyle/lids-pink.jpeg",
      alt: "All six Kokoa flavours — lid flat-lay on pink",
    },
    {
      src: "/lifestyle/stacked-red.jpeg",
      alt: "Kokoa tubs stacked — made in Guayaquil, Ecuador",
    },
  ];

  return (
    <section className="bg-kokoa-dark py-3 px-3">
      <div className="grid grid-cols-2 gap-3 max-w-7xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto block"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

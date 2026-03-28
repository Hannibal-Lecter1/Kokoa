"use client";

import { motion } from "framer-motion";

/**
 * Three lifestyle photos at uniform height, side-by-side.
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
    {
      src: "/lifestyle/scattered.jpeg",
      alt: "Kokoa tubs scattered on a dark surface",
    },
  ];

  return (
    <section className="bg-white py-3 px-3 border-y border-black/5">
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="overflow-hidden rounded-xl"
            style={{ height: "420px" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover block"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

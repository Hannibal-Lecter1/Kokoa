"use client";

import { motion } from "framer-motion";

/**
 * Three lifestyle photos at uniform height, side-by-side.
 */
export function GalleryDuo() {
  const photos = [
    {
      src: "/lifestyle/splash-strawberry.webp",
      alt: "Kokoa Strawberries — double-coated fruit bites",
    },
    {
      src: "/lifestyle/splash-blueberry.webp",
      alt: "Kokoa Blueberries — double-coated fruit bites",
    },
    {
      src: "/lifestyle/splash-banana.webp",
      alt: "Kokoa Bananas — double-coated fruit bites",
    },
  ];

  return (
    <section className="bg-kokoa-paper py-3 px-3">
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

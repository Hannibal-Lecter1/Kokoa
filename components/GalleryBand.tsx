"use client";

import { motion } from "framer-motion";

/**
 * Full-width lifestyle photo bands that sit between main sections.
 * Each band is a parallax-style image strip with a subtle overlay.
 */

interface BandProps {
  src: string;
  alt: string;
  height?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

function PhotoBand({
  src,
  alt,
  height = "h-64 md:h-80 lg:h-96",
  overlayColor = "#3E2723",
  overlayOpacity = 0.35,
  children,
}: BandProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <motion.img
        src={src}
        alt={alt}
        aria-hidden={!alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        style={{ opacity: 0, transition: "opacity 0.6s ease" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          {children}
        </div>
      )}
    </div>
  );
}

/** Band shown between ProductShowcase and Upcycle — lids flat-lay on pink */
export function BandLids() {
  return (
    <PhotoBand
      src="/lifestyle/lids-pink.jpg"
      alt="All six Kokoa flavours — lid flat-lay"
      height="h-56 md:h-72 lg:h-80"
      overlayColor="#1a0a08"
      overlayOpacity={0.2}
    >
      <motion.p
        className="font-serif text-white text-3xl md:text-5xl text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Six flavours. One chocolate.
      </motion.p>
    </PhotoBand>
  );
}

/** Band shown between Upcycle and Origin — stacked tubs on red */
export function BandStacked() {
  return (
    <PhotoBand
      src="/lifestyle/stacked-red.jpg"
      alt="Kokoa tubs stacked — Guayaquil, Ecuador"
      height="h-64 md:h-80 lg:h-96"
      overlayColor="#1a0a08"
      overlayOpacity={0.25}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-sans text-white/60 text-xs tracking-[0.35em] uppercase mb-3">
          Made in Guayaquil, Ecuador
        </p>
        <p className="font-serif text-white text-3xl md:text-5xl drop-shadow-lg">
          Bean to cup.
        </p>
      </motion.div>
    </PhotoBand>
  );
}

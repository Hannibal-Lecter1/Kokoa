"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ShowBanner({ contactHref = "#partner" }: { contactHref?: string }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative z-50 bg-kokoa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-center">
        <p className="font-sans text-xs md:text-sm tracking-wide">
          <span className="font-semibold">SUMMER FANCY FOOD SHOW 2026</span>
          <span className="mx-2 opacity-50">·</span>
          <span>Booth 3810</span>
          <span className="mx-2 opacity-50">·</span>
          <a
            href={contactHref}
            className="underline underline-offset-2 hover:text-kokoa-husk transition-colors duration-200"
          >
            Book a meeting →
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

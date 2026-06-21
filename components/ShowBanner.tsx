"use client";

import { useState } from "react";
import { X, Ticket } from "lucide-react";

export default function ShowBanner({ contactHref = "#partner" }: { contactHref?: string }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative bg-kokoa-dark border-t-2 border-kokoa-husk text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
        <Ticket className="hidden sm:block w-4 h-4 text-kokoa-husk flex-shrink-0" />
        <p className="font-sans text-xs md:text-sm tracking-wide text-center">
          <span className="font-semibold tracking-[0.12em] uppercase">Summer Fancy Food Show 2026</span>
          <span className="mx-2 opacity-40">·</span>
          <span className="text-kokoa-husk font-semibold">Booth 3810</span>
        </p>
        <a
          href={contactHref}
          className="hidden sm:inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.12em] uppercase border border-kokoa-husk text-kokoa-husk px-4 py-1.5 rounded-full hover:bg-kokoa-husk hover:text-kokoa-dark transition-all duration-200 flex-shrink-0"
        >
          Book a Meeting →
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

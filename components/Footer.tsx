"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Music2, ArrowRight, CheckCircle2, MapPin, Mail } from "lucide-react";

const BENEFITS = [
  "Premium frozen confectionery — fast-growing category",
  "B2B wholesale inquiries welcome globally",
  "Full sustainability certification documentation",
  "International distribution partnerships",
  "Private-label and co-manufacturing options",
];

export default function Footer() {
  const [form, setForm]           = useState({ company: "", name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [focused, setFocused]     = useState<string | null>(null);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const session_id = sessionStorage.getItem("_k_sid") ?? undefined;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, session_id }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at kevin@kokoafruits.com");
      }
    } catch {
      setError("Could not send. Please email us directly at kevin@kokoafruits.com");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (name: string) =>
    `w-full bg-black/3 border rounded-lg px-5 py-4 text-kokoa-dark font-sans text-sm
     focus:outline-none transition-all duration-300 placeholder:text-kokoa-dark/25 ${
       focused === name
         ? "border-kokoa-berry bg-white"
         : "border-black/10 hover:border-black/20"
     }`;

  return (
    <footer id="partner" className="bg-kokoa-paper text-kokoa-dark border-t border-black/6">

      {/* ── B2B section ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-berry block mb-5">
              B2B Partnerships
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-kokoa-dark leading-tight mb-8">
              Bring Kokoa to
              <br />
              <span className="italic text-kokoa-berry">Your Shelves.</span>
            </h2>
            <p className="font-sans text-kokoa-dark/55 leading-relaxed text-lg mb-10 max-w-md">
              We are actively seeking premium retail partners, specialty grocery
              distributors, and food-service buyers who share our commitment to
              conscious indulgence and ecological responsibility.
            </p>

            <ul className="space-y-4 mb-12">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-kokoa-berry flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-kokoa-dark/65">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-kokoa-dark/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="font-sans text-sm space-y-0.5">
                  <p>Head Office · LeKokoa Ltd.</p>
                  <p>Demosthenous 10, Yianni-Maria Court Office</p>
                  <p>6058 Larnaca, Cyprus</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-kokoa-dark/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm">
                  Congelados Ecuatorianos Aquacongela S.A. · Guayaquil, Ecuador
                </span>
              </div>
              <div className="flex items-center gap-3 text-kokoa-dark/40">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:kevin@kokoafruits.com" className="hover:text-kokoa-berry transition-colors duration-300">
                  kevin@kokoafruits.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                className="bg-kokoa-sage/20 border border-kokoa-sage/40 rounded-2xl p-14 text-center h-full flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle2 className="w-12 h-12 text-kokoa-sage" />
                <p className="font-serif text-4xl text-kokoa-dark">Thank You.</p>
                <p className="font-sans text-kokoa-dark/50 max-w-xs text-center leading-relaxed">
                  We've received your inquiry and will be in touch within 48 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Company */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={set("company")}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("company")}
                    placeholder="Your company or organisation"
                  />
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("name")}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("email")}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={set("message")}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={inputClass("message") + " resize-none"}
                    placeholder="Describe your distribution network, market, and interest in Kokoa..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-kokoa-berry text-white font-sans text-sm tracking-[0.2em] uppercase py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-kokoa-berry/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: sending ? 1 : 1.015 }}
                  whileTap={{ scale: sending ? 1 : 0.985 }}
                >
                  {sending ? "Sending…" : "Send Inquiry"}
                  {!sending && <ArrowRight className="w-4 h-4" />}
                </motion.button>

                {error && (
                  <p className="font-sans text-xs text-kokoa-berry/80 text-center">{error}</p>
                )}

                <p className="font-sans text-xs text-kokoa-dark/25 text-center">
                  No e-commerce available. Kokoa is a B2B showcase platform only.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────── */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Mascot logo */}
          <div className="flex-shrink-0">
            <img
              src="/brand/mascot-clean.png"
              alt="Kokoa"
              className="h-32 w-auto object-contain"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                t.nextElementSibling?.removeAttribute("style");
              }}
            />
            <span
              className="font-serif text-2xl tracking-[0.3em] text-kokoa-dark"
              style={{ display: "none" }}
            >
              KOKOA
            </span>
          </div>

          {/* Central blurb */}
          <p className="font-sans text-xs text-kokoa-dark/30 text-center leading-relaxed">
            Manufactured by Congelados Ecuatorianos Aquacongela S.A. · Guayaquil, Ecuador
            <br />
            100% Upcycled Cacao · Preservative-Free · Gluten-Free · No Artificial Colors
          </p>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Kokoa on Instagram"
              className="text-kokoa-dark/35 hover:text-kokoa-berry transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Kokoa on TikTok"
              className="text-kokoa-dark/35 hover:text-kokoa-berry transition-colors duration-300"
            >
              <Music2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pb-6 text-center">
          <p className="font-sans text-xs text-kokoa-dark/25">
            © {new Date().getFullYear()} Kokoa · Bean-to-Cup · Ecuador · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

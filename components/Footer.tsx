"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Music2, ArrowRight, CheckCircle2, MapPin, Mail, Globe } from "lucide-react";

const BENEFITS = [
  "Premium frozen confectionery — fast-growing category",
  "B2B wholesale inquiries welcome globally",
  "Full documentation available upon request",
  "International distribution partnerships",
  "Private-label and co-manufacturing options",
];

const BUSINESS_TYPES = ["Retailer", "Distributor", "Broker", "Foodservice", "Other"];
const PRODUCT_OPTIONS = ["Frozen Fruit Range", "Cacao Superfruit Nectar", "Both"];

type FormState = {
  company: string; name: string; email: string;
  country: string; businessType: string; productsOfInterest: string; message: string;
};

export default function Footer() {
  const [form, setForm] = useState<FormState>({
    company: "", name: "", email: "",
    country: "", businessType: "", productsOfInterest: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [focused, setFocused]     = useState<string | null>(null);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
        setError("Something went wrong. Please email us at hello@kokoafruits.com");
      }
    } catch {
      setError("Could not send. Please email us at hello@kokoafruits.com");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (name: string) =>
    `w-full bg-black/3 border rounded-lg px-5 py-4 text-kokoa-dark font-sans text-sm
     focus:outline-none transition-all duration-300 placeholder:text-kokoa-dark/25 ${
       focused === name ? "border-kokoa-berry bg-white" : "border-black/10 hover:border-black/20"
     }`;

  return (
    <footer id="partner" className="bg-kokoa-paper text-kokoa-dark border-t border-black/6">

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
              Bring LeKokoa to
              <br />
              <span className="italic text-kokoa-berry">Your Shelves.</span>
            </h2>
            <p className="font-sans text-kokoa-dark/55 leading-relaxed text-lg mb-10 max-w-md">
              We are actively seeking premium retail partners, specialty grocery
              distributors, and food-service buyers who share our commitment to
              quality and responsible sourcing.
            </p>

            <ul className="space-y-4 mb-12">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-kokoa-berry flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-kokoa-dark/65">{item}</span>
                </li>
              ))}
            </ul>

            {/* Three company entities */}
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-kokoa-dark/40">
                <Globe className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="font-sans text-sm space-y-0.5">
                  <p className="font-semibold text-kokoa-dark/55 text-xs tracking-widest uppercase mb-1">US Sales &amp; Distribution</p>
                  <p>LeKokoa (NA) LLC</p>
                  <p>Fort Lauderdale, Florida, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-kokoa-dark/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="font-sans text-sm space-y-0.5">
                  <p className="font-semibold text-kokoa-dark/55 text-xs tracking-widest uppercase mb-1">Manufacturing</p>
                  <p>Guayaquil, Ecuador</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-kokoa-dark/40">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="font-sans text-sm space-y-0.5">
                  <p className="font-semibold text-kokoa-dark/55 text-xs tracking-widest uppercase mb-1">International Head Office</p>
                  <p>LeKokoa Ltd.</p>
                  <p>Demosthenous 10, Yianni-Maria Court Office</p>
                  <p>6058 Larnaca, Cyprus</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-kokoa-dark/40">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@kokoafruits.com" className="font-sans text-sm hover:text-kokoa-berry transition-colors duration-300">
                  hello@kokoafruits.com
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
                className="bg-kokoa-sage/20 border border-kokoa-sage/40 rounded-2xl p-14 text-center flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle2 className="w-12 h-12 text-kokoa-sage" />
                <p className="font-serif text-4xl text-kokoa-dark">Thank You.</p>
                <p className="font-sans text-kokoa-dark/50 max-w-xs text-center leading-relaxed">
                  We&apos;ve received your inquiry and will be in touch within 48 business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Company Name *</label>
                  <input type="text" required value={form.company} onChange={set("company")}
                    onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                    className={inputClass("company")} placeholder="Your company or organisation" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Contact Name *</label>
                    <input type="text" required value={form.name} onChange={set("name")}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      className={inputClass("name")} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={set("email")}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      className={inputClass("email")} placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Country *</label>
                    <input type="text" required value={form.country} onChange={set("country")}
                      onFocus={() => setFocused("country")} onBlur={() => setFocused(null)}
                      className={inputClass("country")} placeholder="Your country" />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Business Type *</label>
                    <select required value={form.businessType} onChange={set("businessType")}
                      onFocus={() => setFocused("businessType")} onBlur={() => setFocused(null)}
                      className={inputClass("businessType") + " cursor-pointer"}>
                      <option value="">Select type…</option>
                      {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Products of Interest *</label>
                  <select required value={form.productsOfInterest} onChange={set("productsOfInterest")}
                    onFocus={() => setFocused("productsOfInterest")} onBlur={() => setFocused(null)}
                    className={inputClass("productsOfInterest") + " cursor-pointer"}>
                    <option value="">Select…</option>
                    {PRODUCT_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 block mb-2">Tell Us More *</label>
                  <textarea rows={5} required value={form.message} onChange={set("message")}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    className={inputClass("message") + " resize-none"}
                    placeholder="Describe your distribution network, market, and interest in LeKokoa products…" />
                </div>

                <motion.button
                  type="submit" disabled={sending}
                  className="w-full bg-kokoa-berry text-white font-sans text-sm tracking-[0.2em] uppercase py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-kokoa-berry/85 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: sending ? 1 : 1.015 }}
                  whileTap={{ scale: sending ? 1 : 0.985 }}
                >
                  {sending ? "Sending…" : "Send Inquiry"}
                  {!sending && <ArrowRight className="w-4 h-4" />}
                </motion.button>

                {error && <p className="font-sans text-xs text-kokoa-berry/80 text-center">{error}</p>}

                <p className="font-sans text-xs text-kokoa-dark/25 text-center">
                  No e-commerce available. LeKokoa is a B2B showcase platform only.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex-shrink-0">
            <img src="/brand/mascot-clean.png" alt="LeKokoa" className="h-32 w-auto object-contain"
              onError={(e) => { const t = e.currentTarget; t.style.display = "none"; t.nextElementSibling?.removeAttribute("style"); }} />
            <span className="font-serif text-2xl tracking-[0.3em] text-kokoa-dark" style={{ display: "none" }}>KOKOA</span>
          </div>

          <p className="font-sans text-xs text-kokoa-dark/30 text-center leading-relaxed">
            Made in Guayaquil, Ecuador
            <br />
            Made with Real Fruit · No Artificial Colors or Flavors · Crafted in Ecuador
          </p>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="LeKokoa on Instagram" className="text-kokoa-dark/35 hover:text-kokoa-berry transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LeKokoa on TikTok" className="text-kokoa-dark/35 hover:text-kokoa-berry transition-colors duration-300">
              <Music2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pb-6 text-center">
          <p className="font-sans text-xs text-kokoa-dark/25">
            © {new Date().getFullYear()} LeKokoa · Crafted in Ecuador · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

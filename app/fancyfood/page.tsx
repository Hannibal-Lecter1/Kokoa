"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { frozenFlavors, beverages } from "@/lib/products";

const BUSINESS_TYPES = ["Retailer", "Distributor", "Broker", "Foodservice", "Other"];
const PRODUCT_OPTIONS = ["Frozen Fruit Range", "Cacao Superfruit Nectar", "Both"];

type FormState = {
  name: string; company: string; email: string;
  country: string; businessType: string; productsOfInterest: string; message: string;
};

function ContactForm({ type, submitLabel }: { type: string; submitLabel: string }) {
  const [form, setForm] = useState<FormState>({
    name: "", company: "", email: "",
    country: "", businessType: "", productsOfInterest: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState<string | null>(null);

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
        body: JSON.stringify({ ...form, type, session_id }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email hello@kokoafruits.com");
      }
    } catch {
      setError("Could not send. Please email hello@kokoafruits.com");
    } finally {
      setSending(false);
    }
  };

  const inp = `w-full border rounded-lg px-4 py-3 text-sm font-sans text-kokoa-dark placeholder:text-kokoa-dark/30
    focus:outline-none focus:border-kokoa-berry transition-colors duration-200 border-black/10 bg-white`;

  if (submitted) {
    return (
      <div className="bg-kokoa-sage/15 border border-kokoa-sage/30 rounded-2xl p-10 text-center flex flex-col items-center gap-3">
        <CheckCircle2 className="w-10 h-10 text-kokoa-sage" />
        <p className="font-serif text-2xl text-kokoa-dark">Thank You.</p>
        <p className="font-sans text-sm text-kokoa-dark/50 leading-relaxed">
          We&apos;ll be in touch within 48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" required placeholder="Full name *" value={form.name} onChange={set("name")} className={inp} />
        <input type="text" required placeholder="Company *" value={form.company} onChange={set("company")} className={inp} />
      </div>
      <input type="email" required placeholder="Email *" value={form.email} onChange={set("email")} className={inp} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" required placeholder="Country *" value={form.country} onChange={set("country")} className={inp} />
        <select required value={form.businessType} onChange={set("businessType")} className={inp + " cursor-pointer"}>
          <option value="">Business type *</option>
          {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <select required value={form.productsOfInterest} onChange={set("productsOfInterest")} className={inp + " cursor-pointer"}>
        <option value="">Products of interest *</option>
        {PRODUCT_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>
      <textarea rows={4} required placeholder="Your message *" value={form.message} onChange={set("message")}
        className={inp + " resize-none"} />

      <button type="submit" disabled={sending}
        className="w-full bg-kokoa-berry text-white font-sans text-sm tracking-[0.18em] uppercase py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-kokoa-berry/85 transition-all duration-300 disabled:opacity-60">
        {sending ? "Sending…" : submitLabel}
        {!sending && <ArrowRight className="w-4 h-4" />}
      </button>

      {error && <p className="font-sans text-xs text-kokoa-berry/80 text-center">{error}</p>}
    </form>
  );
}

export default function FancyFoodPage() {
  return (
    <div className="bg-kokoa-paper min-h-screen font-sans">

      {/* ── Hero banner ─────────────────────────── */}
      <div className="bg-kokoa-dark text-white px-6 py-10 text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-kokoa-husk mb-3">
          Summer Fancy Food Show 2026
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-2">
          Meet <span className="italic text-kokoa-husk">LeKokoa</span>
        </h1>
        <p className="font-sans text-white/60 text-lg mb-6">Booth 3810</p>
        <a href="https://calendly.com/kevin-kokoafruits/30min" target="_blank" rel="noopener noreferrer"
          className="inline-block font-sans text-xs tracking-[0.2em] uppercase bg-kokoa-berry text-white px-8 py-3.5 rounded-lg hover:bg-kokoa-berry/85 transition-all duration-300">
          Book a Meeting →
        </a>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">

        {/* ── Frozen Fruit Range ─────────────────── */}
        <section>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-berry mb-3">The Range</p>
          <h2 className="font-serif text-3xl text-kokoa-dark mb-2">Real Frozen Fruit. Double-Coated.</h2>
          <p className="font-sans text-kokoa-dark/55 text-sm leading-relaxed mb-8">
            Whole frozen fruit. Two layers of premium Ecuadorian chocolate. 6 oz / 170g · US Retail.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {frozenFlavors.map((f) => (
              <div key={f.id} className="bg-white rounded-xl p-4 border border-black/5 flex flex-col items-center text-center">
                <img src={f.image} alt={f.name} className="w-full h-28 object-contain mb-3" />
                <p className="font-serif text-sm text-kokoa-dark mb-0.5">{f.name}</p>
                <p className="font-sans text-xs text-kokoa-dark/40 leading-tight">{f.chocolate}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Beverage Range ─────────────────────── */}
        <section className="bg-kokoa-dark rounded-2xl p-8 text-white">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-husk mb-3">Beyond the Cacao Bean</p>
          <h2 className="font-serif text-3xl text-white mb-2">Cacao Superfruit Nectar</h2>
          <p className="font-sans text-white/55 text-sm leading-relaxed mb-8">
            Made from the tropical pulp surrounding the cacao bean. 10 FL OZ · No Sugar Added · Electrolytes · Prebiotic Fiber.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {beverages.map((bev) => (
              <div key={bev.id} className="flex flex-col items-center text-center">
                <img src={bev.image} alt={bev.name} className="h-32 w-auto object-contain mb-3 drop-shadow-xl" />
                <p className="font-serif text-sm text-white">{bev.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Packaging formats ──────────────────── */}
        <section>
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-dark/40 mb-3">Packaging Formats</p>
          <h2 className="font-serif text-2xl text-kokoa-dark mb-6">Available Formats</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-black/5">
              <p className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 mb-1">US Retail</p>
              <p className="font-sans text-sm text-kokoa-dark">6 oz (170g) cup · Frozen Fruit Range</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-black/5">
              <p className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/40 mb-1">Beverage</p>
              <p className="font-sans text-sm text-kokoa-dark">10 FL OZ (296ml) bottle · Cacao Superfruit Nectar</p>
            </div>
            <div className="border border-dashed border-kokoa-dark/15 rounded-xl p-5 text-center">
              <p className="font-sans text-xs text-kokoa-dark/40">
                European formats available — contact us for specifications
              </p>
            </div>
          </div>
        </section>

        {/* ── Distribution Inquiry ───────────────── */}
        <section id="contact">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-kokoa-sage mb-3">Distribution</p>
          <h2 className="font-serif text-2xl text-kokoa-dark mb-6">Distribution Inquiry</h2>
          <ContactForm type="distribution" submitLabel="Send Inquiry" />
        </section>

        {/* ── Contact + Booth ────────────────────── */}
        <section className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-kokoa-dark/50">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@kokoafruits.com" className="font-sans text-sm hover:text-kokoa-berry transition-colors">
              hello@kokoafruits.com
            </a>
          </div>
          <div className="flex items-start justify-center gap-2 text-kokoa-dark/50">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div className="font-sans text-sm text-left">
              <p>LeKokoa (NA) LLC · Fort Lauderdale, Florida, USA</p>
              <p>Manufacturing · Guayaquil, Ecuador</p>
            </div>
          </div>
          <div className="bg-kokoa-dark text-white rounded-2xl py-8 px-6 mt-6">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-kokoa-husk mb-2">Find us at</p>
            <p className="font-serif text-3xl text-white">Booth 3810</p>
            <p className="font-sans text-white/50 text-sm mt-1">Summer Fancy Food Show 2026</p>
          </div>
        </section>

        <p className="text-center font-sans text-xs text-kokoa-dark/25 pb-8">
          © {new Date().getFullYear()} LeKokoa · Crafted in Ecuador
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

type Visit = {
  id: number;
  ip: string;
  country: string;
  started_at: number;
  duration_sec: number | null;
  form_submitted: number;
  returning_visitor: number;
  visit_count: number;
};

type Summary = {
  total_visits: number;
  unique_ips: number;
  total_form_submits: number;
  avg_duration_sec: number | null;
  conversion_pct: number;
};

function fmt(ts: number) {
  return new Date(ts * 1000).toLocaleString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

function dur(sec: number | null) {
  if (sec === null || sec === undefined) return "—";
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}m ${s}s`;
}

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
      <p className="font-sans text-xs tracking-[0.2em] uppercase text-kokoa-dark/40 mb-2">{label}</p>
      <p className="font-serif text-4xl text-kokoa-dark">{value}</p>
      {sub && <p className="font-sans text-xs text-kokoa-dark/35 mt-1">{sub}</p>}
    </div>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed]     = useState(false);
  const [error, setError]       = useState("");
  const [visits, setVisits]     = useState<Visit[]>([]);
  const [summary, setSummary]   = useState<Summary | null>(null);
  const [loading, setLoading]   = useState(false);

  const load = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/analytics/data", {
        headers: { "x-analytics-key": pw },
      });
      if (res.status === 401) { setError("Wrong password"); setLoading(false); return; }
      const data = await res.json();
      setVisits(data.visits ?? []);
      setSummary(data.summary ?? null);
      setAuthed(true);
    } catch {
      setError("Could not load data");
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = () => load(password);

  if (!authed) {
    return (
      <div className="min-h-screen bg-kokoa-paper flex items-center justify-center px-4">
        <motion.div
          className="bg-white rounded-2xl p-10 shadow-sm border border-black/5 w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-serif text-3xl text-kokoa-dark mb-1">Analytics</p>
          <p className="font-sans text-xs text-kokoa-dark/40 mb-8">Kokoa · Admin</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && load(password)}
            className="w-full border border-black/10 rounded-lg px-4 py-3 text-sm font-sans text-kokoa-dark mb-3 focus:outline-none focus:border-kokoa-berry"
            autoFocus
          />
          {error && <p className="text-kokoa-berry text-xs mb-3">{error}</p>}
          <button
            onClick={() => load(password)}
            disabled={loading}
            className="w-full bg-kokoa-berry text-white font-sans text-xs tracking-[0.2em] uppercase py-3 rounded-lg hover:bg-kokoa-berry/85 transition-colors disabled:opacity-50"
          >
            {loading ? "Loading…" : "Enter"}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kokoa-paper px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-kokoa-dark/40 mb-1">Kokoa · Admin</p>
            <h1 className="font-serif text-4xl text-kokoa-dark">Analytics</h1>
          </div>
          <button
            onClick={refresh}
            className="font-sans text-xs tracking-widest uppercase text-kokoa-dark/50 border border-black/10 px-4 py-2 rounded-lg hover:border-kokoa-berry hover:text-kokoa-berry transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Summary */}
        {summary && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            <StatCard label="Total Visits"       value={summary.total_visits} />
            <StatCard label="Unique Visitors"    value={summary.unique_ips} />
            <StatCard label="Form Submissions"   value={summary.total_form_submits ?? 0} />
            <StatCard label="Avg Duration"       value={dur(summary.avg_duration_sec)} />
            <StatCard label="Conversion"         value={`${summary.conversion_pct ?? 0}%`} sub="visits → form submit" />
          </div>
        )}

        {/* Visits table */}
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/5">
                  {["Date & Time", "IP", "Country", "Duration", "Form?", "Returning?", "All-time Visits"].map(h => (
                    <th key={h} className="text-left font-sans text-[10px] tracking-[0.2em] uppercase text-kokoa-dark/35 px-5 py-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visits.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-16 text-kokoa-dark/30 font-sans text-sm">
                      No visits recorded yet.
                    </td>
                  </tr>
                )}
                {visits.map((v, i) => (
                  <tr key={v.id} className={`border-b border-black/4 hover:bg-kokoa-paper/60 transition-colors ${i % 2 === 0 ? "" : "bg-black/[0.01]"}`}>
                    <td className="px-5 py-3.5 font-sans text-xs text-kokoa-dark/60 whitespace-nowrap">{fmt(v.started_at)}</td>
                    <td className="px-5 py-3.5 font-sans text-xs text-kokoa-dark font-mono">{v.ip}</td>
                    <td className="px-5 py-3.5 font-sans text-xs text-kokoa-dark">{v.country}</td>
                    <td className="px-5 py-3.5 font-sans text-xs text-kokoa-dark/70">{dur(v.duration_sec)}</td>
                    <td className="px-5 py-3.5">
                      {v.form_submitted
                        ? <span className="inline-block bg-kokoa-sage/15 text-kokoa-sage font-sans text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full">Yes</span>
                        : <span className="text-kokoa-dark/25 font-sans text-xs">—</span>}
                    </td>
                    <td className="px-5 py-3.5">
                      {v.returning_visitor
                        ? <span className="inline-block bg-kokoa-berry/10 text-kokoa-berry font-sans text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full">Returning</span>
                        : <span className="text-kokoa-dark/25 font-sans text-xs">New</span>}
                    </td>
                    <td className="px-5 py-3.5 font-sans text-xs text-kokoa-dark/70 text-center">{v.visit_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="font-sans text-xs text-kokoa-dark/25 text-center mt-8">
          Showing last {visits.length} visits · Kokoa Analytics
        </p>
      </div>
    </div>
  );
}

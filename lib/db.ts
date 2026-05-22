// Temporary in-memory analytics store (data resets on restart)
// Replace with persistent DB once Railway PostgreSQL is configured

export type Visitor = {
  ip: string;
  country: string;
  first_seen: number;
  visit_count: number;
};

export type Visit = {
  id: number;
  session_id: string;
  ip: string;
  country: string;
  started_at: number;
  duration_sec: number | null;
  form_submitted: number;
};

const visitors = new Map<string, Visitor>();
const visits   = new Map<string, Visit>();
let   nextId   = 1;

export function upsertVisitor(ip: string, country: string, now: number) {
  const existing = visitors.get(ip);
  if (existing) {
    existing.visit_count += 1;
  } else {
    visitors.set(ip, { ip, country, first_seen: now, visit_count: 1 });
  }
}

export function insertVisit(session_id: string, ip: string, country: string, now: number) {
  if (visits.has(session_id)) return;
  visits.set(session_id, {
    id: nextId++, session_id, ip, country,
    started_at: now, duration_sec: null, form_submitted: 0,
  });
}

export function updateVisit(session_id: string, duration_sec?: number, form_submitted?: boolean) {
  const v = visits.get(session_id);
  if (!v) return;
  if (duration_sec  !== undefined) v.duration_sec   = duration_sec;
  if (form_submitted)              v.form_submitted  = 1;
}

export function getAnalyticsData() {
  const allVisits = Array.from(visits.values())
    .sort((a, b) => b.started_at - a.started_at)
    .slice(0, 500)
    .map(v => {
      const vis = visitors.get(v.ip);
      return {
        ...v,
        returning_visitor: vis && vis.first_seen < v.started_at ? 1 : 0,
        visit_count: vis?.visit_count ?? 1,
      };
    });

  const total_visits       = visits.size;
  const unique_ips         = visitors.size;
  const total_form_submits = Array.from(visits.values()).filter(v => v.form_submitted).length;
  const durations          = Array.from(visits.values()).map(v => v.duration_sec).filter((d): d is number => d !== null);
  const avg_duration_sec   = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : null;
  const conversion_pct     = total_visits ? Math.round(1000 * total_form_submits / total_visits) / 10 : 0;

  return {
    visits: allVisits,
    summary: { total_visits, unique_ips, total_form_submits, avg_duration_sec, conversion_pct },
  };
}

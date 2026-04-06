"use client";

import { useEffect } from "react";

export default function AnalyticsTracker() {
  useEffect(() => {
    // Generate or reuse session ID
    let sessionId = sessionStorage.getItem("_k_sid");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("_k_sid", sessionId);
    }

    const startTime = Date.now();

    // Register the visit
    fetch("/api/analytics/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId }),
    }).catch(() => {});

    // Heartbeat every 30s
    const heartbeat = setInterval(() => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      fetch("/api/analytics/visit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, duration_sec: duration }),
      }).catch(() => {});
    }, 30_000);

    // Final update on unload via sendBeacon
    const onUnload = () => {
      const duration = Math.floor((Date.now() - startTime) / 1000);
      navigator.sendBeacon(
        "/api/analytics/visit",
        new Blob(
          [JSON.stringify({ session_id: sessionId, duration_sec: duration })],
          { type: "application/json" }
        )
      );
    };

    window.addEventListener("beforeunload", onUnload);

    return () => {
      clearInterval(heartbeat);
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);

  return null;
}

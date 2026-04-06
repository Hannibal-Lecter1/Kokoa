import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (_db) return _db;

  const dir = path.join(process.cwd(), "data");
  fs.mkdirSync(dir, { recursive: true });

  _db = new Database(path.join(dir, "analytics.db"));
  _db.pragma("journal_mode = WAL");

  _db.exec(`
    CREATE TABLE IF NOT EXISTS visitors (
      ip          TEXT PRIMARY KEY,
      country     TEXT NOT NULL DEFAULT 'Unknown',
      first_seen  INTEGER NOT NULL,
      visit_count INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS visits (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id     TEXT    NOT NULL UNIQUE,
      ip             TEXT    NOT NULL,
      country        TEXT    NOT NULL DEFAULT 'Unknown',
      started_at     INTEGER NOT NULL,
      duration_sec   INTEGER,
      form_submitted INTEGER NOT NULL DEFAULT 0,
      FOREIGN KEY (ip) REFERENCES visitors(ip)
    );

    CREATE INDEX IF NOT EXISTS idx_visits_ip         ON visits(ip);
    CREATE INDEX IF NOT EXISTS idx_visits_started_at ON visits(started_at);
  `);

  return _db;
}

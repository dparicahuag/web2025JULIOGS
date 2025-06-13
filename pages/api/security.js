// pages/api/security.js
import fs from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "security.log");

function ensureLogDirExists() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function logToFile(data) {
  ensureLogDirExists();
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${JSON.stringify(data)}\n`;
  fs.appendFileSync(LOG_FILE, line, "utf8");
}

export default async function handler(req, res) {
  const { report } = req.query;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    let reportData = req.body;

    // Algunos navegadores envían el reporte como {"csp-report": {...}}
    if (reportData && reportData["csp-report"]) {
      reportData = reportData["csp-report"];
    }

    logToFile({
      type: report || "unknown",
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      report: reportData,
    });

    res.status(204).end(); // No Content
  } catch (error) {
    console.error("Security report error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}




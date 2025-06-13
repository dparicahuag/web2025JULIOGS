import crypto from "crypto";
import fs from "fs";
import path from "path";
import os from "os";
import Busboy from "busboy";
import { log } from "../../../utils/common";

// Lista blanca de MIME types permitidos
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const buffers = [];
    let fileName = "";
    let fileSize = 0;
    let mimeType = "";
    const hasErrors = [];

    const d = new Date();
    const subdir = `${d.getMonth()}-${d.getFullYear()}/`;
    const baseDir = path.resolve("./public/uploads");
    const uploadDir = path.join(baseDir, subdir);

    // Verifica permisos
    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir);
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const busboy = new Busboy({ headers: req.headers });

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      mimeType = mimetype;

      if (!ALLOWED_MIME_TYPES.includes(mimetype)) {
        hasErrors.push("Tipo de archivo no permitido.");
        file.resume(); // ignorar
        return;
      }

      const ext = path.extname(filename).toLowerCase();
      const invalidExts = [".php", ".js", ".exe", ".sh", ".bat", ".py", ".ts"];
      if (invalidExts.includes(ext)) {
        hasErrors.push("Extensión de archivo no permitida.");
        file.resume();
        return;
      }

      const safeName = crypto.randomBytes(16).toString("hex") + ext;
      fileName = safeName;

      file.on("data", (data) => {
        fileSize += data.length;
        if (fileSize > MAX_FILE_SIZE) {
          hasErrors.push("Archivo demasiado grande (máx 10MB).");
          file.resume();
        } else {
          buffers.push(data);
        }
      });
    });

    busboy.on("finish", () => {
      if (hasErrors.length > 0) {
        return res.status(400).json({ result: "error", errors: hasErrors });
      }

      try {
        const imagePath = path.join(uploadDir, fileName);
        fs.writeFileSync(imagePath, Buffer.concat(buffers));
        res.status(200).json({ result: "OK", image: subdir + fileName });
      } catch (err) {
        res.status(500).json({ error: "Error al guardar el archivo" });
      }
    });

    req.pipe(busboy);
  } catch (err) {
    log(err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
  
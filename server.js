const fs = require("fs");
const { createServer } = require("http");
const next = require("next");

const hostname = process.env.HOSTNAME ?? "localhost";
const port = process.env.PORT ?? 3000;
const prod = process.env.NODE_ENV === "production";
const app = next({ dev: !prod, hostname, port });
const handle = app.getRequestHandler();
const baseUrl = process.env.BASE_URL ?? "http://localhost";

const getParamsFromURI = (uri) => {
  const url = new URL(uri, baseUrl);
  return url.searchParams;
};

app.prepare().then(() => {
  createServer((req, res) => {
    let url = req.url;
    const query = getParamsFromURI(url);

    // Bloquear siempre el acceso a sitemap.xml, sitemap-0.xml y robots.txt
    if (
      url === "/sitemap.xml" ||
      url === "/robots.txt" ||
      url === "/sitemap-0.xml"
    ) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("Acceso denegado");
      return;
    }

    //  Permitir server.xml en producción y desarrollo
    if (url === "/server.xml") {
      const filePath = __dirname + "/public/server.xml";
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Archivo no encontrado");
          return;
        }
        res.writeHead(200, { "Content-Type": "application/xml" });
        res.end(data);
      });
      return;
    }

    // Imagen dinámica next/image
    if (url.includes("_next/image") && query?.get("url")) {
      url = query.get("url");
    }

    // Archivos de subida
    if (url.includes("uploads/")) {
      const __path = url.includes("public/")
        ? url
        : "/public/" + url;
      fs.readFile(__dirname + __path, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
      return;
    }

    // Resto de rutas
    handle(req, res);
  }).listen(port, (err) => {
    if (err) {
      console.error("Error al iniciar el servidor:", err);
      throw err;
    }
    console.log(`Servidor listo en http://localhost:${port}`);
  });
});
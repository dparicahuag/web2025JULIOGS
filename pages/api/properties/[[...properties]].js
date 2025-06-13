import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";

const adapter = new PrismaAdapter({ modelName: "Property" });
const resourceName = "properties";

// Orígenes autorizados (solo frontend válido)
const allowedOrigins = [
   "http://localhost:3000", // Puedes descomentar si quieres permitir desarrollo
  "https://www.ganasafi.com.bo", // Producción
];

const handler = async (req, res) => {
  const origin = req.headers.origin || req.headers.referer || "";

  // ❌ Bloquear si el origen no es válido
  if (!allowedOrigins.some((o) => origin.startsWith(o))) {
    return res.status(403).json({ error: "Unauthorized origin" });
  }

  // ❌ (Opcional) Limitar métodos permitidos
  // Por ejemplo, permitir solo GET:
  // if (req.method !== "GET") {
  //   return res.status(405).json({ error: "Method Not Allowed" });
  // }

  return NextCrud({
    resourceName,
    adapter,
  })(req, res);
};

export default handler;


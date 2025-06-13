// pages/api/products/[[...products]].js
import { PrismaAdapter } from "@premieroctet/next-crud";
import NextCrud from "@premieroctet/next-crud";

const allowedOrigins = [
  "http://localhost:3000", // Descomenta si quieres permitir desarrollo
  "https://www.ganasafi.com.bo",
];

const handler = async (req, res) => {
  const origin = req.headers.origin || req.headers.referer || "";

  // Bloquear si el origen no está autorizado
  if (!allowedOrigins.some((o) => origin.startsWith(o))) {
    return res.status(403).json({ error: "Unauthorized origin" });
  }

  // ✅ Si quieres restringir métodos, puedes hacerlo aquí
  // Por ejemplo, solo permitir GET:
  // if (req.method !== "GET") {
  //   return res.status(405).json({ error: "Method Not Allowed" });
  // }

  return NextCrud({
    resourceName: "products",
    adapter: new PrismaAdapter({
      modelName: "product",
    }),
  })(req, res);
};

export default handler;

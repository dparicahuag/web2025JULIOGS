// pages/api/contactos/[[...contactos]].js
import { PrismaAdapter } from "@premieroctet/next-crud";
import NextCrud from "@premieroctet/next-crud";
import { verifySession } from "../../../lib/auth/verifySession";

const handler = async (req, res) => {
  // Validar sesión SIEMPRE, en todos los entornos y métodos
  const result = await verifySession(req);

  if (result.error) {
    return res.status(401).json({ error: result.error });
  }

  // Opcional: pasar el usuario a la request
  // req.user = result.user;

  return NextCrud({
    resourceName: "contactos",
    adapter: new PrismaAdapter({
      modelName: "contact",
    }),
  })(req, res);
};

export default handler;


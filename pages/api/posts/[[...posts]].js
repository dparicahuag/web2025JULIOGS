// pages/api/posts/[[...posts]].js
import { PrismaAdapter } from "@premieroctet/next-crud";
import NextCrud from "@premieroctet/next-crud";

const handler = async (req, res) => {
  // Permitir solo GET (para mostrar publicidad, contenido público)
  if (req.method !== "GET") {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  return NextCrud({
    resourceName: "posts",
    adapter: new PrismaAdapter({
      modelName: "post",
    }),
  })(req, res);
};

export default handler;


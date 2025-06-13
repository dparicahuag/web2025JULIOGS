import { PrismaClient } from "@prisma/client";
import {
  log,
  encrypt,
  decrypt,
} from "../../../utils/common";

const prisma = new PrismaClient();

// 🔐 Función de login segura
const login = async (email, password) => {
  if (
    !email ||
    !password ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.includes("@")
  ) {
    return { error: "Credenciales inválidas" };
  }

  try {
    log("/api/users/login: buscando usuario por email " + email);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      // 🔒 No revelar si el usuario existe o no
      return { error: "Usuario o contraseña incorrectos" };
    }

    const inputPassword = decrypt(password);
    const storedPassword = decrypt(user.password);

    if (inputPassword !== storedPassword) {
      return { error: "Usuario o contraseña incorrectos" };
    }

    const accessToken = encrypt(JSON.stringify({ uuid: user.uuid, email: user.email }));

    const response = {
      id: user.id,
      uuid: user.uuid,
      name: user.name,
      email: user.email,
      accessToken,
    };

    log(["Login exitoso:", response]);
    return { result: "OK", user: response };
  } catch (err) {
    log("Error al autenticar:", err);
    return { error: "Error interno del servidor" };
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { email, password } = req.body;

    const { result, user, error } = await login(email, password);

    if (error) {
      return res.status(401).json({ error });
    }

    // 🛡️ Crear sesión segura
    await prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: user.accessToken,
      },
    });

    return res.status(200).json({ result, payload: user });
  } catch (err) {
    log("Error inesperado:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}


// lib/auth/verifySession.js
import { PrismaClient } from "@prisma/client";
import {
  getCookie,
  COOKIE_PATH,
  decryptObject,
  log,
} from "../../utils/common";

const prisma = new PrismaClient();

export async function verifySession(req) {
  const cookieHeader = req.cookies?.[COOKIE_PATH];
  if (!cookieHeader) {
    return { error: "Session cookie not found" };
  }

  let uuid, accessToken;
  try {
    const cookies = decryptObject(cookieHeader);
    uuid = cookies?.uuid;
    accessToken = cookies?.accessToken;
  } catch (e) {
    log("Error decrypting session cookie:", e);
    return { error: "Invalid session cookie" };
  }

  if (!uuid || !accessToken) {
    return { error: "Missing session data" };
  }

  const user = await prisma.user.findUnique({
    where: { uuid },
  });

  if (!user || !user.id) {
    return { error: "User not found" };
  }

  const session = await prisma.session.findUnique({
    where: { sessionToken: accessToken },
  });

  if (!session || session.userId !== user.id) {
    return { error: "Session is invalid or expired" };
  }

  // Opcional: control de expiración de sesión aquí

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    accessToken,
  };
}

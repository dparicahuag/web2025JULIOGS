import { PrismaClient } from '@prisma/client';
import { getCookie, COOKIE_PATH } from '../common';

const prisma = new PrismaClient();

/**
 * Middleware de protección estricta de rutas API.
 * Aplica en producción y desarrollo, para cualquier método HTTP.
 * 
 * @param {Function} handler - Tu función API (req, res).
 */
export function withAuth(handler) {
  return async (req, res) => {
    const { method } = req;

    // Autenticación siempre requerida, sin excepciones
    const ch = req.cookies?.[COOKIE_PATH];
    if (!ch) {
      return res.status(401).json({ error: 'Sesión no encontrada.' });
    }

    const uuid = getCookie('uuid', ch);
    const accessToken = getCookie('accessToken', ch);

    if (!uuid || !accessToken) {
      return res.status(401).json({ error: 'Token de sesión inválido.' });
    }

    const user = await prisma.user.findUnique({ where: { uuid } });
    const session = await prisma.session.findUnique({
      where: { sessionToken: accessToken },
    });

    if (!user || !session || session.userId !== user.id) {
      return res.status(403).json({ error: 'No autorizado.' });
    }

    req.user = user;

    return handler(req, res);
  };
}


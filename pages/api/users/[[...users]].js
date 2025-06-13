import { PrismaClient } from '@prisma/client';
import { withAuth } from '../../../utils/api/withAuth'; // Asegúrate de que esta ruta es correcta

const prisma = new PrismaClient();

// Lista de orígenes permitidos (solo frontend autorizado)
const allowedOrigins = [
  // "http://localhost:3000", // Si quieres permitir desarrollo
  "https://www.ganasafi.com.bo",
];

async function handler(req, res) {
  const origin = req.headers.origin || req.headers.referer || "";

  // 🔒 Verifica que el origen esté autorizado
  if (!allowedOrigins.some(o => origin.startsWith(o))) {
    return res.status(403).json({ error: "Unauthorized origin" });
  }

  const { method, query, body } = req;

  try {
    switch (method) {
      case 'GET': {
        const userId = query?.users ? parseInt(query.users, 10) : null;

        if (userId) {
          if (isNaN(userId)) {
            return res.status(400).json({ error: 'ID de usuario no válido.' });
          }

          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
              id: true,
              uuid: true,
              name: true,
              email: true,
              emailVerified: true,
              image: true,
              createdAt: true
            },
          });

          if (!user) return res.status(404).json({ error: 'Usuario no encontrado.' });

          return res.status(200).json(user);
        }

        const users = await prisma.user.findMany({
          select: {
            id: true,
            uuid: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            createdAt: true
          },
        });

        return res.status(200).json(users);
      }

      case 'POST': {
        const { name, email, password, image } = body;

        if (!email || typeof email !== 'string' || !email.includes('@')) {
          return res.status(400).json({ error: 'Email inválido.' });
        }

        const newUser = await prisma.user.create({
          data: {
            name: name ?? null,
            email,
            password: password ?? null,
            image: image ?? null
          },
          select: {
            id: true,
            uuid: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            createdAt: true
          },
        });

        return res.status(201).json(newUser);
      }

      case 'PUT': {
        const userId = parseInt(query.users, 10);
        if (isNaN(userId)) {
          return res.status(400).json({ error: 'ID de usuario no válido.' });
        }

        const { name, email, image } = body;

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: { name, email, image },
          select: {
            id: true,
            uuid: true,
            name: true,
            email: true,
            emailVerified: true,
            image: true,
            createdAt: true
          },
        });

        return res.status(200).json(updatedUser);
      }

      case 'DELETE': {
        const userId = parseInt(query.users, 10);
        if (isNaN(userId)) {
          return res.status(400).json({ error: 'ID de usuario no válido.' });
        }

        await prisma.user.delete({ where: { id: userId } });
        return res.status(204).end();
      }

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).json({ error: `Método ${method} no permitido.` });
    }
  } catch (error) {
    console.error('[API ERROR]', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}

// 🔐 Protección con session/token más verificación de origen frontend
export default withAuth(handler, { allowGet: false });




// lib/middleware/withAuth.js

export default function withAuth(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

    if (!token || token !== process.env.AUTH_TOKEN) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return handler(req, res);
  };
}

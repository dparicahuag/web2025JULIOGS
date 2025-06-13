import nodemailer from "nodemailer";
require("dotenv").config();

const user = process.env.mail_user;
const pass = process.env.mail_pass;
const host = process.env.mail_smtp_host;
const port = process.env.mail_smtp_port;

export default async function handler(req, res) {
  // ✅ Solo permitir método POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // ✅ Solo permitir desde frontend autorizado
  const allowedOrigins = [
    "http://localhost:3000",        // Desarrollo
    "https://www.ganasafi.com.bo",      // Producción
  ];

  const origin = req.headers.origin || req.headers.referer || "";

  if (!allowedOrigins.some(o => origin.startsWith(o))) {
    return res.status(403).json({ error: "Unauthorized origin" });
  }

  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    port,
    host,
    auth: { user, pass },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: user,
    to: user,
    subject: `Ganasafi Contacto From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>Nombre: ${req.body.name}</div>
           <div>Apellido: ${req.body.apellido}</div>
           <div>Telf: ${req.body.telefono}</div>
           <div>Ciudad: ${req.body.selectedCiudad}</div>
           <div>Quiero invertir en: ${req.body.selectedBob ?? req.body.selectedUsd}</div>
           <div>Mensaje: ${req.body.message}</div>
           <p>Sent from: ${req.body.email}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ result: "OK" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Error sending email" });
  }
}


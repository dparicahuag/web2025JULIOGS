import * as common from "./utils/common.js";
import { NextResponse } from "next/server";

const __cookie_nonce = common.hash("nonces");
let __cookies = {};
const port = process.env.PORT ?? 3000;
const base_url = process.env.BASE_URL + ":" + port;

function setCookie(k, v) {
  try {
    const key = common.hashCookies ? common.hash(k) : k;
    __cookies[key] = v;
  } catch (error) {
    console.error({ error });
  }
}

function loadCookies(str) {
  if (typeof str !== "string" || !str) return;
  try {
    const obj = common.decryptObject(str);
    __cookies = typeof obj === "object" ? obj : {};
  } catch (error) {
    console.error("Cookie decrypt error:", error);
    __cookies = {};
  }
}

export function getCookie(k = null) {
  try {
    const key = common.hashCookies ? common.hash(k) : k;
    return k ? __cookies[key] ?? null : __cookies;
  } catch (error) {
    console.error({ error });
    return null;
  }
}

function csp(req, res) {
  const styleNonce = common.nonceGenerator();
  const scriptsNonce = common.nonceGenerator();
  const defaultNonce = common.nonceGenerator();
  const fontNonce = common.nonceGenerator();

  setCookie("styleNonce", styleNonce);
  setCookie("scriptsNonce", scriptsNonce);
  setCookie("defaultNonce", defaultNonce);
  setCookie("fontNonce", fontNonce);

  const cookies = common.encryptObject(__cookies);
  res.cookies.set(__cookie_nonce, cookies, { httpOnly: true });

  const cspDirectives = `
    default-src 'self';
    script-src 'self' 'nonce-${scriptsNonce}' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'nonce-${styleNonce}' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    connect-src 'self';
    report-uri ${base_url}/api/security?report=csp;
  `.replace(/\s+/g, " ").trim();

  res.headers.set("Content-Security-Policy", cspDirectives);

  res.headers.append(
    "Report-To",
    JSON.stringify([
      {
        group: "csp-endpoint",
        max_age: "10886400",
        endpoints: [{ url: `${base_url}/api/security?report=csp` }],
        include_subdomains: true,
      },
    ])
  );

  res.headers.append(
    "Reporting-Endpoints",
    `default="${base_url}/api/security"`
  );
}

export function middleware(req) {
  const res = NextResponse.next();

  try {
    const rawCookie = req.cookies.get(__cookie_nonce)?.value;
    if (rawCookie) loadCookies(rawCookie);
  } catch (err) {
    console.error("Cookie parse error:", err);
  }

  const path = req.nextUrl.pathname;

  // 🔒 Evitar intentos de path traversal
  if (decodeURIComponent(path).includes("..")) {
    console.warn("Intento de path traversal:", path);
    return new NextResponse("Acceso denegado", { status: 403 });
  }

  // 🔒 Validación en _next/image
  if (path.startsWith("/_next/image")) {
    const imageUrl = req.nextUrl.searchParams.get("url") ?? "";
    if (decodeURIComponent(imageUrl).includes("..")) {
      console.warn("Ruta de imagen sospechosa:", imageUrl);
      return new NextResponse("URL de imagen no permitida", { status: 403 });
    }
  }

  csp(req, res);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)",
    "/api/posts/:path*",
    "/api/products/:path*",
    "/api/properties/:path*",
    "/api/users/:path*",
    "/api/contactos/:path*",
    "/api/security",
  ],
};

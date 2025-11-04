// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const referer = req.headers.get("referer") || req.headers.get("origin") || "";
  const ua = req.headers.get("user-agent") || "";

  // Log requests so we can trace unexpected 404s (temporary)
  // Only log details for suspicious or missing routes to reduce noise.
  if (path.includes("admin") || path.includes("curator") || path.includes(".tsx") || path === "/favicon.ico/route") {
    // eslint-disable-next-line no-console
    console.log(`[middleware] path=${path} referer=${referer} ua=${ua}`);
  }

  // Keep redirect for direct visits to `/`, but allow navigation when
  // the request came from the Intro page (so the Start Explore Link can
  // navigate to `/` without being redirected back).
  const refererHeader = req.headers.get("referer") || "";
  const cameFromIntro = refererHeader.includes("/intro");

  if (path === "/" && !cameFromIntro) {
    return NextResponse.redirect(new URL("/intro", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};

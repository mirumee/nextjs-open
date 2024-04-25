import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { nextUrl: { pathname}, geo, headers } = request;

  const requestHeaders = new Headers(headers);
  const nextResponse = NextResponse.next()
  const responseHeaders = new Headers(nextResponse.headers);

  if (pathname === '/middleware/geo') {
    return new NextResponse(JSON.stringify({ geo: JSON.stringify(geo) }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  if (pathname === '/middleware/redirect') {
    const redirectUrl = new URL("/middleware/redirect-destination", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname === '/middleware/rewrite') {
    const rewriteUrl = new URL("/middleware/rewrite-destination", request.nextUrl.origin);
    return NextResponse.rewrite(rewriteUrl);
  }

  if (pathname === "/api/middleware") {
    return new NextResponse(JSON.stringify({ hello: "from middleware.ts" }), {
      status: 200,
      headers: {
        "content-type": "application/json"
      },
    });
  }

  if (pathname === "/render/isr" && !request.headers.get("x-prerender-revalidate")) {
    responseHeaders.set(
      "cache-control",
      "max-age=10, stale-while-revalidate=999",
    );
  }

  if (pathname.startsWith("/api/revalidate-tag")) {
    responseHeaders.set(
      "cache-control",
      "private, no-cache, no-store, max-age=0, must-revalidate",
    );
  }

  if (pathname === "/middleware/cookie") {
    nextResponse.cookies.set("fromMiddleware", "withLove", {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
    return nextResponse;
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
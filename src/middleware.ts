import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { nextUrl: { pathname}, geo, headers } = request;

  const requestHeaders = new Headers(headers);
  console.log(geo)

  if (pathname === '/middleware/geo') {
    return new NextResponse(JSON.stringify({ hello: JSON.stringify(geo) }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": "test-middleware-geo=success"
      },
    });
  }

  if (pathname === '/middleware/redirect') {
    const redirectUrl = new URL("/middleware/redirect-destination", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl, {
      headers: { "set-cookie": "test-middleware-redirect=success" },
    });
  }

  if (pathname === '/middleware/rewrite') {
    const rewriteUrl = new URL("/middleware/rewrite-destination", request.nextUrl.origin);
    return NextResponse.rewrite(rewriteUrl, {
      headers: { "set-cookie": "test-middleware-rewrite=success" },
    });
  }

  if (pathname === "/api/middleware") {
    return new NextResponse(JSON.stringify({ hello: "from middleware.ts" }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "set-cookie": "test-middleware-api=success"
      },
    });
  }

  const response = NextResponse.next();
  if (pathname === "/middleware/cookie") {
    
    response.cookies.set("fromMiddleware", "withLove", {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });
    return response;
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const isAdminRoute = [
  "/billing(.*)",
  "/settings(.*)",
  "/lists/client(.*)",
  "/email(.*)",
];
const isProtectedRoute = [
  "/lists(.*)",
  // '/settings(.*)',
  // '/billing(.*)',
];
// This function can be marked `async` if using `await` inside
export function proxy(req: NextRequest) {
  if (isProtectedRoute.includes(req.url)) {
  }
  if (isAdminRoute.includes(req.url)) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
    "/((?!api/webhooks|_next/static|_next/image|favicon.ico).*)",
    "/(lists|email|settings|billing)(.*)",
  ],
};

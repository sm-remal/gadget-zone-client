// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/login', request.url))
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/about/:path*', '/contact/:path*'],
// }

import { NextResponse } from "next/server";

// Server-side token check
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ধরো login হলে token cookie set থাকে
  const token = request.cookies.get("token")?.value;

  if (token) {
    // Logged in → allow
    return NextResponse.next();
  }

  // Logged out → redirect to login with original route
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);

  return NextResponse.redirect(loginUrl);
}

// Protected routes (all paths you want to protect)
export const config = {
  matcher: [
    "/dashboard/:path*", // example protected pages
  ],
};

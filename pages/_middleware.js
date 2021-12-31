import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token exists on Login
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // allow the request if it is true...
  /*
  1. It's a request for next auth session & provider fetching
  2. Token exists 
  */
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they don't have token and are requsting a procted route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}

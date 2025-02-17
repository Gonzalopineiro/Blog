import { auth } from "./auth"
import { NextResponse } from "next/server"

export const config = {
  matcher: ["/admin/:path*"]
}

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")

  if (isOnAdmin && !isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  return NextResponse.next()
})
import { auth } from "./auth"

export const config = {
  matcher: ["/admin/:path*"]
}

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnAdmin = req.nextUrl.pathname.startsWith("/admin")

  if (isOnAdmin) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", req.nextUrl))
    }
    // Add additional admin role check if needed in the future
  }

  return null
})
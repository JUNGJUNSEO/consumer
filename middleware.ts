import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";


export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
  });

  const { user } = session;

  if (req.nextUrl.pathname.startsWith('/write')) {
    if (!user) {
      return NextResponse.rewrite(new URL('/', req.url))
    }
  }

  if (req.nextUrl.pathname.startsWith('/join')) {
    if (user) {
      return NextResponse.rewrite(new URL('/', req.url))
    }
  }
}
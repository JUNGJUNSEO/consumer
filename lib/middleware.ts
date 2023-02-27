import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import { sessionOptions } from "./withSession";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);


  if (!session.user?.loggedIn && req.url.startsWith('/write')) {
    return NextResponse.redirect('/404');
  }

  return res;
};


import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/withSession";

const logoutRoute = (req: NextApiRequest, res: NextApiResponse ) => {
  req.session.destroy()

  if (req.url.includes('/write')){
    res.redirect('/');
  } else{
    res.redirect('/');
    // res.status(200).json({ success: true });
  }
}


export default withSessionRoute(logoutRoute);
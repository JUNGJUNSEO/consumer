import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/withSession";

const logoutRoute = async(req: NextApiRequest, res: NextApiResponse ) => {
  req.session.destroy()
  
  if (req.url.includes('/new-post')){
    res.redirect('/');
  }

  return res.status(200).json({ success: true });
}


export default withSessionRoute(logoutRoute);
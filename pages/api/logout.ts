import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/withSession";

const logoutRoute = async(req: NextApiRequest, res: NextApiResponse ) => {

  if (req.method !== 'POST') {
    return res.status(405).json({message: "POST method only"})
  }

  req.session.destroy()

  const url = req.headers.referer
  if (url.includes('/new-post')) {
    return res.redirect('/')
  }

  return res.status(200).json({ success: true });
}


export default withSessionRoute(logoutRoute);
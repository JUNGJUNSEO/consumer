import { withSessionRoute } from "@/lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
    const user = req.session.user;
    console.log(user)
    if (!user) {
      return res.json({id: '', loggedIn: false});
    }
    return res.json(user);
  });
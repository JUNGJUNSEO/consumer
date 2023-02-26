import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/user";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "@/lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse ){
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { username, password } = req.body;
    await dbConnect();

    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({
        message: "일치하는 아이디가 없습니다. 다시 한 번 확인해 주세요.",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
      return res.status(401).json({
        message: "비밀번호가 틀립니다. 다시 한 번 확인해 주세요.",
      });
    }
  
    // 세션 정보를 설정합니다.
    req.session.user = {
      id: user.username, 
      loggedIn: true
    };

    await req.session.save();
    return res.status(200).json({ success: true });

  } catch (error) {

    return res.status(500).json({ message: "인터넷 서버 에러" });
  }
}




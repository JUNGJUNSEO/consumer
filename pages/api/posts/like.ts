import dbConnect from "@/lib/dbConnect";
import Post from "@/lib/models/post";
import User from "@/lib/models/user";
import { withSessionRoute } from "@/lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "접근 할 수 없습니다." })
    }

    if (!req.session.user) {
        return res.status(400).json({ message: "로그인을 먼저 해주세요." })
    }

    const { postTitle, userId } = req.body;

    if (!postTitle || !userId) {
        return res.status(400).json({ message: "Invalid Request" });
    }

    try{
        await dbConnect();

        const user = await User.findOne({ username: userId });
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const post = await Post.findOne({ title: postTitle, owner: user._id })
        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }

        const {id} = req.session.user
    
        if (post.likes.includes(id)) {
            const updatedLikes = post.likes.filter((item: string) => item !== id);
            post.likes = updatedLikes;
            await post.save()
            return res.status(200).json({ status: "minus",  message: "You already liked this post" });
        }
        
        post.likes.push(id)
        await post.save()

        return res.status(200).json({ status: "plus", message: "좋아요 성공" })
    } catch(error) {
        console.log(error)
        return res.status(500).json({ message: "인터넷 서버 에러" })
    }

}



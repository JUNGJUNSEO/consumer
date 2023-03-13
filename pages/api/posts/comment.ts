import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/user";
import Post from "@/lib/models/post";
import Comment from "@/lib/models/comment";
import { withSessionRoute } from "@/lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";


export default withSessionRoute(createCommentHandler)

async function createCommentHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "접근 할 수 없습니다." })
    }

    const sessionUser = req.session.user;
    if (!sessionUser) {
        return res.status(400).json({ message: "로그인 먼저." })
    }

    const { postTitle, userId, text } = req.body;
    if (!postTitle || !userId || !text) {
        return res.status(400).json({ message: "Invalid Request" });
    }

    try{
        await dbConnect()

        const user = await User.findOne({ username: userId });
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const post = await Post.findOne({ title: postTitle, owner: user._id })
        if (!post) {
            return res.status(404).json({ message: "Post Not Found" });
        }

        const {id: writerUsername} = req.session.user
        const writer = await User.findOne({ username: writerUsername })

        const newComment = await Comment.create( {
            writer: writer._id,
            post: post._id,
            text
      
        })
     
        post.comments.push(newComment._id)
        writer.comments.push(newComment._id)

        await Promise.all([post.save(), writer.save()]);

        const commentData = {
            writer: writer.username,
            avatarUrl: writer.avatarUrl,
            text,
            createdAt: new Date(),
        };
        
        return res.status(200).json({
            message: "댓글이 등록되었습니다.",
            ...commentData,
            });

    }catch(error){
        console.log(error)
        return res.status(500).json({ message: "인터넷 서버 에러" })
    }

}
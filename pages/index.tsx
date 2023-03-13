import PostCardGrid from "@/components/common/PostCardGrid";
import dbConnect from "@/lib/dbConnect";
import Post, { IPost } from "@/lib/models/post";
import { sessionOptions } from "@/lib/withSession";
import { getIronSession } from "iron-session";
import { GetServerSideProps, NextPage} from "next";

export type PostCardProps = {
  posts : IPost[]
}

const Homepage: NextPage<PostCardProps> = ({ posts }) => {
  return (
    <>
      <PostCardGrid posts={posts}/>
    </>
      
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {

  try {

    // const session = await getIronSession(context.req, context.res, sessionOptions)
    // const user = session.user ? session.user || { id: '', loggedIn: false }

    await dbConnect()
    const posts = await Post.find({}).populate('owner')


    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),

      },
    };
  } catch (error){
    console.log(error)
    return {
      props: {
        posts: []
      }
    }
  }

}

export default Homepage
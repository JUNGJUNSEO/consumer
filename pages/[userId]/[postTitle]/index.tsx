import PostTemplate from "@/components/post/PostTemplate"
import dbConnect from "@/lib/dbConnect"
import Post from "@/lib/models/post";
import User, { IUser } from "@/lib/models/user"
import { ModelProps } from "@/types/model";
import { GetStaticPaths } from "next"

interface PostPageProps extends ModelProps {
}

interface IPath {
  params: {
      userId: string,
      postTitle: string
  }
}

export default function PostPage({ user, post }: PostPageProps) {

    
  return (
      <PostTemplate user={user} post={post} />
  )
}


export const getStaticPaths: GetStaticPaths = async(res) => {
    try {
        await dbConnect()
    
        const users: IUser[] =  await User.find({}).populate('posts', 'title');
        
        const paths = users.flatMap((user) => {
          if (user.posts) {
            return user.posts.map((post) => ({
              params: { userId: user.username, postTitle: post.title }
            }))
          } else {
            return []
          }
        })
   
        return { paths, fallback: false };

    } catch(error) {
        console.log(error)
        return { paths: [], fallback: false }
    }

}

export const getStaticProps = async({ params }: IPath) => {

    try {
      await dbConnect()

      const { userId, postTitle } = params

      const user = await User.findOne({ username: userId });

      const post = await Post.findOne({ title: postTitle, owner: user._id }).populate({
        path: 'comments',
        populate: {
          path: 'writer',
          model: 'User',
          select: ['username', 'avatarUrl']
        }
      });

      const data = { user, post }
      const newData = JSON.parse(JSON.stringify(data))

      return {
        props: {
          user: newData.user,
          post: newData.post,
        },
      };
    } catch (error){
      console.log(error)
      return {
        notFound: true
      }
    }
}
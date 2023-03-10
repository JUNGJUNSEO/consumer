import PostCardGrid from "@/components/common/PostCardGrid"
import UserLayout from "@/components/user/UserLayout"
import dbConnect from "@/lib/dbConnect"
import { IPost } from "@/lib/models/post"
import User, { IUser } from "@/lib/models/user"
import { GetStaticPaths } from "next"
import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"

interface IPath {
    params: {
        userId: string
    }
}

interface UserPageProps {
    posts: IPost[]
}

const UserPage: NextPageWithLayout<UserPageProps> = ({ posts }) => {

    return (
        <>
            <PostCardGrid posts={posts}/>
        </>
    )

}

export const getStaticPaths: GetStaticPaths = async() => {
    try {
        await dbConnect()
        const users: IUser[] = await User.find({})
        const paths = users.map((user) => ({
            params: {userId: user.username}
        }))

        return { paths, fallback: false };
    } catch(error) {
        console.log(error)
        return { paths: [], fallback: false };
    }
}

export const getStaticProps = async({ params }: IPath) =>{
    try {
        await dbConnect()

        const { userId } = params
        const user = await User.findOne({ username: userId });

        if (!user) {
            return {
                notFound: true,
            };
        }
        
        const posts = await user.populate({
            path: 'posts',
            model: 'Post',
            populate: {
                path: 'owner',
                model: 'User',
                select: ['username', 'name', 'avatarUrl']
            }
        })
   

        return {
            props: {
                posts: JSON.parse(JSON.stringify(posts.posts)),
                user: JSON.parse(JSON.stringify(user))
            }
        }

    } catch(error) {
        return {
            props: {
                posts: [],
                user: ''
            },
            
        }
    } 
}

UserPage.getLayout = function getLayout(page: ReactElement) {

    return (
        <UserLayout user={page.props.user}>
            {page}
        </UserLayout>
    )
}

export default UserPage
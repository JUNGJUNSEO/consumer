import classes from "./PostCardGrid.module.css"
import { PartialPost } from "@/lib/graphql/post"
import PostCard from "./PostCard"
import { IPost } from "@/lib/models/post"

export type PostCardGridProp = {
    posts: IPost[]
}


function PostCardGrid({posts} : PostCardGridProp){

    return (
        <div className={classes.container}>
            {posts.map((post) => {
                return (
                    <PostCard 
                        post = {post}
                        key = {post.id}
                    />
                )
            })}
            
        </div>
    
    )
}


export default PostCardGrid
import classes from "./PostCardGrid.module.css"
import { PartialPost } from "@/lib/graphql/post"
import PostCard from "./PostCard"

export type PostCardGridProp = {
    posts: PartialPost[]
}


function PostCardGrid({posts} : PostCardGridProp){

    return (
        <div className={classes.block}>
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
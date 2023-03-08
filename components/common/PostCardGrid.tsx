import classes from "./PostCardGrid.module.css"
import PostCard from "./PostCard"
import { IPost } from "@/lib/models/post"

export type PostCardGridProp = {
    posts: IPost[]
}


function PostCardGrid({posts} : PostCardGridProp){

    return (
        <div className={classes.container}>
            {posts?.map((post) => {
                return (
                    <PostCard
                        key = {post._id}
                        post = {post}
                        
                    />
                )
            })}
            
        </div>
    
    )
}


export default PostCardGrid
import classes from "./PostTemplate.module.css"
import PostAction from "./PostAction"
import PostBottom from "./PostBottom"
import PostComment from "./PostComment"
import PostHead from "./PostHead"
import ProductsComparisonTable from "./ProductsComparisonTable"
import { ModelProps } from "@/types/model"
import PostDescription from "./PostDesciption"

interface PostTemplateProps extends ModelProps {
}

const PostTemplate:React.FC<PostTemplateProps> = ({user, post}) => {

    // const comments = post.comments.map(comment => ({
    //     writer: comment.writer,
    //     text: comment.text,
    //     createdAt: comment.createdAt
    //   }));

    return (
        <div className={classes.block}>
            <PostAction
                likes={post?.likes.length}
                comments={post?.comments.length}
            />
            <PostHead 
                userId={user?.username} 
                title={post?.title} 
                createdAt={new Date(post?.createdAt).toISOString()} 
                tags={post?.hashtags}
            />
            <ProductsComparisonTable
                files={post?.files}
                texts={post?.texts}
                ownerPick={post?.owner_pick}
            />
            <PostDescription
                files={post?.files}
                texts={post?.texts}
                ownerPick={post?.owner_pick}
                description={post?.reason}
            
            />
            <PostBottom/>
            <PostComment comments={post?.comments}/>
        </div>
    )
}

export default PostTemplate
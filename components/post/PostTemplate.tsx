import classes from "./PostTemplate.module.css"
import PostAction from "./PostAction"
import PostBottom from "./PostBottom"
import PostComment from "./PostComment"
import PostHead from "./PostHead"
import ProductsComparisonTable from "./ProductsComparisonTable"
import { ModelProps } from "@/types/model"

interface PostTemplateProps extends ModelProps {
}

const PostTemplate:React.FC<PostTemplateProps> = ({user, post}) => {

    return (
        <div className={classes.block}>
            <PostAction/>
            <PostHead 
                userId={user.username} 
                title={post.title} 
                createdAt={new Date(post.createdAt).toISOString()} 
                tags={post.hashtags}
            />
            <ProductsComparisonTable
                files={post.files}
                texts={post.texts}
                ownerPick={post.owner_pick}
            />
            <PostBottom/>
            <PostComment/>
        </div>
    )
}

export default PostTemplate
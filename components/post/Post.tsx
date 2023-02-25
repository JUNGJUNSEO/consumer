import classes from "./Post.module.css"
import PostAction from "./PostAction"
import PostBottom from "./PostBottom"
import PostComment from "./PostComment"
import PostHead from "./PostHead"
import ProductsComparisonTable from "./ProductsComparisonTable"

function Post() {

    return (
        <div className={classes.block}>
            <PostAction/>
            <PostHead/>
            <ProductsComparisonTable/>
            <PostBottom/>
            <PostComment/>
        </div>
    )
}

export default Post
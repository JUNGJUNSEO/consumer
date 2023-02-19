import classes from "./Post.module.css"
import PostBottom from "./PostBottom"
import PostHead from "./PostHead"
import ProductsComparisonTable from "./ProductsComparisonTable"

function Post() {

    return (
        <div className={classes.block}>
            <PostHead/>
            <ProductsComparisonTable/>
            <PostBottom/>
        </div>
    )
}

export default Post
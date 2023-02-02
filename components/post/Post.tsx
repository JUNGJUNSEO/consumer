import classes from "./Post.module.css"
import PostHead from "./PostHead"
import Table from "./Table"

function Post() {

    return (
        <div className={classes.block}>
            <PostHead/>
            <Table/>
        </div>
    )
}

export default Post
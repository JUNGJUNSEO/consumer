import TagList from "../common/TagList"
import classes from "./PostHead.module.css"
import { formatDate } from "@/lib/utils"

interface PostHeadProps{
    userId: string
    title: string
    createdAt: string
    tags: string[]
}

const PostHead:React.FC<PostHeadProps> = ({userId, title, createdAt, tags}) => {
    console.log(userId)

    return (
        <div className={classes.block}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.info}>
                    <div>
                        By <a>{userId}</a>
                    </div>
                    <div style={{ borderLeft: "2px solid",  height: "16px", margin: "0 1rem"}} />
                    <span>{formatDate(createdAt)}</span>
                </div>
                <TagList tags = {tags}/>

            </div>
                

        </div>
    )
}

export default PostHead
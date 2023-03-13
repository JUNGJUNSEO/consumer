import TagList from "../common/TagList"
import classes from "./PostHead.module.css"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

interface PostHeadProps{
    userId: string
    title: string
    createdAt: string
    tags: string[]
}

const PostHead:React.FC<PostHeadProps> = ({userId, title, createdAt, tags}) => {

    return (
        
            <div className={classes.container}>
                <h1 className={classes.title}>{title}</h1>
                <div className={classes.info}>
                    <div>
                        By <Link href={`/${userId}`}>{userId}</Link>
                    </div>
                    <div style={{ borderLeft: "2px solid",  height: "16px", margin: "0 1rem"}} />
                    <span>{formatDate(createdAt)}</span>
                </div>
                <TagList tags = {tags}/>

            </div>
                


    )
}

export default PostHead
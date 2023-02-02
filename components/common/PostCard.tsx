import classes from "./PostCard.module.css"
import { MdComment} from "react-icons/md"
import {FaSlackHash} from "react-icons/fa"
import {AiFillHeart} from "react-icons/ai"
import { PartialPost } from "@/lib/graphql/post"
import { useRouter } from "next/router"
import TagList from "./TagList"




export type PostCardProps = {
    post : PartialPost
}

function PostCard({post} : PostCardProps){

    const router = useRouter()

    const showDetailHandler = () => {
        router.push('/' + post.id)
    }

    return (
        <div className={classes.post}>
     
            <div className={classes.image} onClick = {showDetailHandler}>
                <img src={post.post_image} alt="product image"/>
            </div>
       
            <div className={classes.content}>
                <TagList tags = {post.tags}/>
                <div className={classes.title}>
                    <h3><a href="#0">{post.title}</a></h3>
                </div>
            
                <div className={classes.author}>
                    <a href="#0">
                        <img src={post.author_image} alt="product image"/>
                    </a>

                    <div className={classes.info}>
                        <div className={classes.name}><a href="#0" rel="author">by {post.author}</a></div>
                        <div className={classes.meta}>
                            <span>{post.updated_at}</span>
                            <div>
                                <div>
                                    <MdComment/>
                                    <span>{post.comments_count}</span>
                                </div>

                                <div>
                                    <AiFillHeart/>
                                    <span>{post.likes}</span>
                                </div>

                            </div>
                            
                            
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}


export default PostCard
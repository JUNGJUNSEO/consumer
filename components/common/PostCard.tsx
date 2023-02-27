import classes from "./PostCard.module.css"
import { MdComment} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai"
import { useRouter } from "next/router"
import TagList from "./TagList"
import { IPost } from "@/lib/models/post"




export type PostCardProps = {
    post : IPost
}

function PostCard({post} : PostCardProps){

    const router = useRouter()

    const showDetailHandler = () => {
        router.push('/' + post.id)
    }

    return (
        <div className={classes.card}>
     
            <div className={classes.image} style={{backgroundImage: `url(${post.post_image})`}} onClick = {showDetailHandler}/>
       
            <div className={classes.content}>
                <TagList tags = {post.hashtags}/>
                <div className={classes.title}>
                    <h3><a href="#0">{post.title}</a></h3>
                </div>
            
                <div className={classes.author}>
                    <a href="#0">
                        <img src="/images/deer.png" alt="product image"/>
                    </a>

                    <div className={classes.info}>
                        <div className={classes.name}><a href="#0" rel="author">by {post.owner}</a></div>
                        <div className={classes.meta}>
                            <span>{post.createdAt}</span>
                            <div>
                                <div>
                                    <MdComment/>
                                    <span>{post.meta.comments_count}</span>
                                </div>

                                <div>
                                    <AiFillHeart/>
                                    <span>{post.meta.likes}</span>
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
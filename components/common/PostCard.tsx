import styles from "./PostCard.module.css"
import { MdComment} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai"
import { useRouter } from "next/router"
import TagList from "./TagList"
import { IPost } from "@/lib/models/post"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export type PostCardProps = {
    post : IPost
}

function PostCard({post} : PostCardProps){
    const { title, post_image, hashtags, owner, createdAt, likes, comments } = post;
    const { username, avatarUrl, name } = owner

    const router = useRouter()

    const showDetailHandler = () => {
        router.push(`/${username}/${title}`);
    }

    return (
        <div className={styles.postCard}>
            <div 
                className={styles.image} 
                style={{backgroundImage: `url(./images/${post_image})`}} 
                onClick = {showDetailHandler}
            />
       
            <div className={styles.content}>
                {/* <TagList tags = {hashtags}/> */}
                <div className={styles.title}>
                    <h3 onClick = {showDetailHandler}>{title}</h3>
                </div>
            
                <div className={styles.author}>
                    <Link href={"/[userId]"} as={`/${username}`}>
                        {avatarUrl ? (
                            <Image src={`./images/${avatarUrl}`} alt="product image"/>
                        ): (
                            <div className={styles.nameImg}>{name}</div>
                        )}
                    </Link>

                    <div className={styles.info}>
                        <div className={styles.name}>
                            by <Link href={"/[userId]"} as={`/${username}` }>{username}</Link>
                        </div>
                        <div className={styles.meta}>
                            <span>{formatDate(new Date(createdAt).toISOString())}</span>
                            <div>
                                <div>
                                    <MdComment/>
                                    <span>{comments.length}</span>
                                </div>

                                <div>
                                    <AiFillHeart/>
                                    <span>{likes.length}</span>
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
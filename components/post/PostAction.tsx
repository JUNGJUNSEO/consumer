import { RiHeartAddLine } from "react-icons/ri"
import {BiCommentDetail} from "react-icons/bi"
import { AiOutlineShareAlt } from "react-icons/ai"
import styles from "./PostAction.module.css"
import { useRouter } from "next/router"
import { useState } from "react"

interface PostActionProps {
    likes: number
    comments: number
}

const PostAction:React.FC<PostActionProps> = ({ likes, comments }) => {

    const router = useRouter()
    const {postTitle, userId} = router.query
    const [likeCount, setLikeCount] = useState(likes)

    const onClickLikeHandler = async() => {
        const response = await fetch('/api/posts/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ postTitle, userId })
        });
        
        const data = await response.json();

        if (response.ok) {
            if (data.status === 'plus') {
                setLikeCount((pre) => pre + 1);
            } else if (data.status === 'minus') {
                setLikeCount((pre) => pre - 1);
            }
        }
    }

    return (
        <div className={styles.block}>
            <div onClick={onClickLikeHandler}>
                <RiHeartAddLine/>
                <span>{likeCount}</span>
            </div>
            <div>
                <BiCommentDetail/>
                <span>{comments}</span>
            </div>
            <div>
                <AiOutlineShareAlt/>
            </div>


        </div>
    )


}


export default PostAction


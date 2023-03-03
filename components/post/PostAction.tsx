import { RiHeartAddLine } from "react-icons/ri"
import {BiCommentDetail} from "react-icons/bi"
import { AiOutlineShareAlt } from "react-icons/ai"
import styles from "./PostAction.module.css"
import { useRouter } from "next/router"

const PostAction = () => {

    const onClickLikeHandler = async() => {
        const response = await fetch(`/api/posts/like`, {
            method: 'POST'
        })

        if (response.ok) {
            console.log('Like button clicked!');
        }
    }

    return (
        <div className={styles.block}>
            <div onClick={onClickLikeHandler}>
                <RiHeartAddLine/>
                <span>10</span>
            </div>
            <div>
                <BiCommentDetail/>
                <span>10</span>
            </div>
            <div>
                <AiOutlineShareAlt/>
            </div>


        </div>
    )


}


export default PostAction

function async() {
    throw new Error("Function not implemented.")
}

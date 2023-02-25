import { RiHeartAddLine } from "react-icons/ri"
import {BiCommentDetail} from "react-icons/bi"
import { AiOutlineShareAlt } from "react-icons/ai"
import styles from "./PostAction.module.css"

const PostAction = () => {


    return (
        <div className={styles.block}>
            <div>
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
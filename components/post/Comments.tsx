import { formatDate } from "@/lib/utils"
import styles from "./Comments.module.css"
import { PostCommentProps } from "./PostComment"


const Comments:React.FC<PostCommentProps> = ({comments}) => {

    return (
        <div className={styles.container}>
            <ul className={styles.comments}>
                {comments.map((comment, index) => (
                    <>
                        <li className={styles.comment} key={index}>
                            {comment.writer.avatarUrl ? 
                                <img 
                                    className={styles.image}
                                    src={comment.writer.avatarUrl} 
                                    alt={comment.writer.username}
                                /> :
                                <div className={styles.image}>
                                    {comment.writer.username}
                                </div>
                            }
                            
                                <div>
                                    <div className={styles.userInfo}>
                                        <div className={styles.name}>{comment.writer.username}</div>
                                        <span className={styles.date}>{formatDate(comment.createdAt.toString())}</span>
                                    </div>
                                    <p className={styles.text}>
                                        {comment.text}
                                    </p>
                                </div> 
        
                        </li>
                  
                    </>


                ))}
                
            </ul>
            
        </div>

    )
}


export default Comments
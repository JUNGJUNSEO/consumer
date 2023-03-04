import styles from "./Comments.module.css"
import { PostCommentProps } from "./PostComment"


const Comments:React.FC<PostCommentProps> = ({comments}) => {

    return (
        <div className={styles.container}>
            <ul className={styles.comments}>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <img src={comment.writer.avatarUrl} alt={comment.writer.username}/>
                            <div>
                                <div>
                                    <div className={styles.name}>{comment.writer.username}</div>
                                    <span className={styles.date}>{comment.createdAt.toString()}</span>
                                </div>
                                <p className={styles.text}>
                                    {comment.text}
                                </p>
                            </div> 
    
                    </li>

                ))}
                
            </ul>
            
        </div>

    )
}


export default Comments
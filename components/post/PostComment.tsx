import { useEffect, useState } from "react"
import styles from "./PostComment.module.css"

const PostComment = () => {
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    // useEffect(() => {
    //   const getComments = async () => {
    //     const response = await fetch('/api/comments');
    //     const data = await response.json();
    //     setComments(data);
    //   };
    //   getComments();
    // }, []);
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea
                    id="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="댓글을 작성하세요"
                />
                <br />
                <button type="submit">제출</button>
            </form>
            <ul className={styles.comments}>
                {comments.map((comment) => (
                <li key={comment._id} className={styles.comment}>
                    <p className={styles.commentName}>{comment.name}</p>
                    <p className={styles.commentText}>{comment.text}</p>
                    <p className={styles.commentDate}>{comment.createdAt}</p>
                </li>
                ))}
            </ul>
        </div>
      );
}


export default PostComment
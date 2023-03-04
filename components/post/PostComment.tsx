import { useRouter } from "next/router";
import { useState } from "react"
import Comments from "./Comments";
import styles from "./PostComment.module.css"

export interface PostCommentProps{
    comments: {
        writer: {
            username: string;
            avatarUrl: string;
        };
        text: string;
        createdAt: Date;
    }[]
}

const PostComment:React.FC<PostCommentProps> = ({comments}) => {
    const [text, setText] = useState('');
    const [newComments, setNewComments] = useState(comments);
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {postTitle, userId} = router.query
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postTitle,
                userId,
                text: text.trim(),
            })
        })

        if (response.ok) {
            const data = await response.json();

            setNewComments([
                ...newComments,
                {writer: {
                    username: data.writer,
                    avatarUrl: data.avatarUrl
                },
                text: data.text,
                createdAt: data.createdAt,
                }
            ])

            setText("");
        }
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
            <Comments comments={newComments}/>
        </div>
      );
}


export default PostComment
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './PostDescription.module.css'


interface PostDescriptionProps {
    files: string[];
    texts: string[];
    ownerPick: number;
    description: string;
  }
  

const PostDescription:React.FC<PostDescriptionProps> = ({ files, texts, ownerPick, description }) => {

    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img src={`/images/${files[ownerPick-1]}`}/>
                    <AiFillCheckCircle />

                </div>
                <div className={styles.description}>
                    <h4>사용자 선택-{texts[0].split(',')[ownerPick]}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>


        </div>


    )

}


export default PostDescription
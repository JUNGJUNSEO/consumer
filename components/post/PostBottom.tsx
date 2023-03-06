import Link from "next/link"
import styles from "./PostBottom.module.css"

const PostBottom = () => {

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <span className={styles.line}/>
                <Link href={"/#0"}>
                    <img src="https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg" alt="product image"/>
                </Link>
                <span className={styles.line}/>
            </div>
            <div className={styles.name}>
                tree0787
            </div>
            <p className={styles.description}> 
                저는 살림하기 위해 태어난 남자 서정준입니다.
            </p>


        </div>

    )


}


export default PostBottom
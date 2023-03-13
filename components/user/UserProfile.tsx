import Link from "next/link"
import RoundButton from "../ui/Button/RoundButton"
import styles from "./UserProfile.module.css"

function UserProfile() {



    return (
        <div className={styles.block}>
            <div className={styles.container}>
                 <div className={styles.avatar}>
                    <img 
                        src="https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg"
                        alt="avatar-image"
                    />
                 </div>
                 <div className={styles.content}>
                    <h1 className={styles.userName}>
                        서정준
                    </h1>
                    <p className={styles.location}>
                        경기
                    </p>
                    <RoundButton>
                        <Link href={"/"}> 프로필 수정</Link>
                    </RoundButton>

                 </div>


            </div>

        </div>
    )
}


export default UserProfile
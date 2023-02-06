import Link from "next/link"
import styles from "./NavProfile.module.css"

function NavProfile() {


    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <ul className={styles.navBar}>
                    <li>
                        <Link href = "/">
                            <span className={styles.label}>내 포스트</span>
                            <span className={styles.count}>0</span>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/">
                            <span className={styles.label}>좋아요 표시한 포스트</span>
                            <span className={styles.count}>0</span>
                        </Link>
                    </li>
                    <li>
                        <Link href = "/">
                            <span className={styles.label}>최근에 읽은 포스트</span>
                            <span className={styles.count}>0</span>
                        </Link>
                    </li>
            
                </ul>


            </div>

        </div>
    )
}

export default NavProfile
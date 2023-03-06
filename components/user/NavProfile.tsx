import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavProfile.module.css"

interface NavProfileProps {
    userPosts: number
    readPosts: number
    likePosts: number
}

const NavProfile:React.FC<NavProfileProps> = ({userPosts, readPosts, likePosts}) => {
    
    const router = useRouter();

    const isActive = (href: string): boolean => {
        return router.asPath === href
    }
 
    return (
        <>
            <div className={styles.block}>
                <div className={styles.container}>
                    <ul className={styles.navBar}>
                        <li>
                            <Link 
                                href = {`/${router.query.userId}`}
                                className = {isActive(`/${router.query.userId}`) ? `${styles.active}`: `${styles.inActive}` }
                            >
                                <span className={styles.label}>내 포스트</span>
                                <span className={styles.count}>{userPosts}</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href = {`/${router.query.userId}/like`}
                                className = {isActive(`/${router.query.userId}/like`) ? `${styles.active}`: `${styles.inActive}` }
                            >
                                <span className={styles.label}>좋아요 표시한 포스트</span>
                                <span className={styles.count}>{likePosts}</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href = {`/${router.query.userId}/read`}
                                className = {isActive(`/${router.query.userId}/read`) ? `${styles.active}`: `${styles.inActive}` }
                            >
                                <span className={styles.label}>최근에 읽은 포스트</span>
                                <span className={styles.count}>{readPosts}</span>
                            </Link>
                        </li>
                
                    </ul>


                </div>

            </div>
        </>

    )
}

export default NavProfile
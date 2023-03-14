import styles from "./UserMenu.module.css"
import {SlLogout} from"react-icons/sl"
import {CgProfile} from"react-icons/cg"
import {BsCardHeading} from"react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import {GiBackwardTime} from "react-icons/gi"
import { useSWRConfig } from 'swr'
import { useRouter } from "next/router"
import Link from "next/link"
import { ISession } from "@/types/session"


interface UserMenuProps extends ISession{}

const UserMenu:React.FC<UserMenuProps>= ({ user }) => {
    
    const { mutate } = useSWRConfig()
    const router = useRouter()

    const handleLogout = async() => {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Referer': window.location.href
            }
        })
       
        mutate('/api/session')
        if (response.status === 302) {
            router.push('/')
        }
    }

    return (
        <div className={styles.block}>
            <ul className={styles.menuList}>
                <li>
                    <Link href={"/[userId]"} as={`/${user.id}`}>
                        <div className={styles.menuItem}>
                            <CgProfile/>
                            내 프로필
                        </div>

                    </Link>
                </li>
                <hr/>
                <li>
                    <Link href={"/[userId]"} as={`/${user.id}`}>
                        <div className={styles.menuItem}>
                            <BsCardHeading/>
                            내 포스트
                        </div>

                    </Link>
                </li>
                <li>
                    <Link href={"/[userId]/like"} as={`/${user.id}/like`}>
                        <div className={styles.menuItem}>
                            <AiFillHeart/>
                            좋아요 표시한 포스트
                        </div>

                    </Link>

                </li>
                <li>
                    <Link href={"/[userId]/read"} as={`/${user.id}/read`}>
                        <div className={styles.menuItem}>
                            <GiBackwardTime/>
                            최근에 읽은 포스트
                        </div>

                    </Link>
                </li>
                <hr/>
                <li onClick={handleLogout}>
                    <div className={styles.menuItem}>
                        <SlLogout/>
                        로그아웃
                    </div>

                </li>

            </ul>
        </div>
    )
}

export default UserMenu
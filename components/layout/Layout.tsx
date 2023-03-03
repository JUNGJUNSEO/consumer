import { PropsWithChildren, useState } from "react"
import styles from './Layout.module.css'
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import Link from 'next/link';
import Logo from './Logo'
import UserIcon from "./UserIcon"
import RoundButton from "../ui/Button/RoundButton"
import UserMenu from "./UserMenu"
import AuthFormContainer from "@/containers/AuthFormContainer"

interface LayoutProps {
    user: {
        id: string
        loggedIn: boolean
    }
}


const Layout = ({ user, children }: PropsWithChildren<LayoutProps>) => {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
   
    const modalHandler = () => {
        setShowModal((preState) => !preState);
    }

    const menuHandler = () => {
        setShowMenu((preState) => !preState);
    }

    if (showMenu && !user.loggedIn ) {
        menuHandler()
    }

    return (
        <>
            {showModal && !user.loggedIn && (
                <>
                    <Modal onCloseAuthModal={modalHandler} />
                    <AuthFormContainer onCloseAuthModal = {modalHandler}/>
                </>
            )}
            <div className={styles.layout}>
                <Logo/>
                <div className={styles.search}>
                    <SearchInput/>
                </div>
                {user.loggedIn ? (
                    <div className={styles.user}>
                        <div className={styles.newPost}>
                            <RoundButton >
                                <Link href="/new-post">비교 상품 만들기</Link>
                            </RoundButton>
                        </div>

                        <UserIcon onClickMenu={menuHandler}/>
                        {showMenu && <UserMenu/>}
        
                    </div>
                ) : (
                    <RoundButton>
                        <div onClick={modalHandler}>로그인</div>
                    </RoundButton>
                )}
            </div>
            <main className={styles.main}>{children}</main>
        </>
    )
}

export default Layout
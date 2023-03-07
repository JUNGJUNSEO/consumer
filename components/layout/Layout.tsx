import { PropsWithChildren, useEffect, useState } from "react"
import styles from './Layout.module.css'
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import Link from 'next/link';
import Logo from './Logo'
import UserIcon from "./UserIcon"
import RoundButton from "../ui/Button/RoundButton"
import UserMenu from "./UserMenu"
import AuthFormContainer from "@/containers/AuthFormContainer"
import useSWR from 'swr'


const Layout = ({ children }: PropsWithChildren) => {
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showShadow, setShowShadow] = useState(false);
    const fetcher = (url:string) => fetch(url).then((res) => res.json());
    const { data: user, error, isLoading } = useSWR('/api/session', fetcher)

  
    const modalHandler = () => {
        setShowModal((preState) => !preState);
    }

    const menuHandler = () => {
        setShowMenu((preState) => !preState);
    }

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowShadow(scrollTop > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


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
            <div className={showShadow ? `${styles.shadow} ${styles.layout}` :  styles.layout}>
                <Logo/>
                <div className={styles.search}>
                    <SearchInput/>
                </div>
                <div className={styles.user}>
                    {!isLoading && user.loggedIn ? (
                        <>
                            <div className={styles.newPost}>
                                <RoundButton >
                                    <Link href="/new-post">비교 상품 만들기</Link>
                                </RoundButton>
                            </div>

                            <UserIcon onClickMenu={menuHandler}/>
                            {showMenu && <UserMenu/>}
                        
                        </>

        
                    ) : (
                        <>
                            <Link 
                                className={styles.joinButton} 
                                href={"/join"}
                            >
                                회원 가입
                            </Link>
                            <RoundButton>
                            <div onClick={modalHandler}>로그인</div>
                            </RoundButton>

                        </>
                    )}
                </div>
            </div>
            <main className={styles.main}>{children}</main>
        </>
    )
}

export default Layout
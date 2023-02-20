import { useRouter } from "next/router"
import { PropsWithChildren } from "react"
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


function Layout(props: PropsWithChildren<LayoutProps>) {
   
    let router = useRouter()
    const closeAuthModalHandler = () => {
        router.back()
    }

    return (
        <>
            {router.query.modal && (
                <>
                    <Modal onCloseAuthModal={closeAuthModalHandler} />
                    {(router.query.modal === "login" || router.query.modal ==="join") && 
                        <AuthFormContainer onCloseAuthModal = {closeAuthModalHandler}/>
                    }
                </>
            )}
            <div className={styles.layout}>
                
                <Logo/>
                <div className={styles.search}>
                    <Link href={`${router.pathname}?modal=search`}  scroll={false}>
                        <SearchInput/>
                    </Link>
                </div>
                {props.user.loggedIn ? (
                    <div className={styles.user}>
                        <RoundButton>
                            <Link href="/write">
                                비교 상품 만들기
                            </Link>
                        </RoundButton>
                        <UserIcon/>
                        <UserMenu/>
        
                    </div>
                ) : (
                    <RoundButton>
                        <Link href={`${router.pathname}?modal=login`} as="/login" scroll={false}>
                            로그인
                        </Link>
                    </RoundButton>
                )}
                
            </div>
            <main className={styles.main}>{props.children}</main>
        </>
        
 
    )
}





export default Layout
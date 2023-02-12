import { useRouter } from "next/router"
import { Fragment, PropsWithChildren } from "react"
import classes from './Layout.module.css'
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import Link from 'next/link';
import Logo from './Logo'
import UserIcon from "./UserIcon"
import RoundButton from "../ui/Button/RoundButton"
import UserMenu from "./UserMenu"
import AuthFormContainer from "@/containers/AuthFormContainer"

function Layout({children} : PropsWithChildren) {

    let router = useRouter()
    console.log(router.basePath)
    const closeAuthModalHandler = () => {
        router.back()
    }
    const user = false

    return (
        <Fragment>
            {router.query.modal && (
                <>
                    <Modal onCloseAuthModal={closeAuthModalHandler} />
                    {(router.query.modal === "login" || router.query.modal ==="join") && 
                        <AuthFormContainer onCloseAuthModal = {closeAuthModalHandler}/>
                    }
                </>
                
             
            )}
            <div className={classes.layout}>
                
                <Logo/>
                <div className={classes.search}>
                    <Link href={`${router.pathname}?modal=search`}  scroll={false}>
                        <SearchInput/>
                    </Link>
                </div>
                {user ? (
                    <div className={classes.user}>
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
            <main>{children}</main>
        </Fragment>
        
 
    )
}

export default Layout
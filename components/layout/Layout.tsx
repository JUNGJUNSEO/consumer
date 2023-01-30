import { useRouter } from "next/router"
import { Fragment, PropsWithChildren } from "react"
import {SlLogin} from "react-icons/sl"
import classes from './Layout.module.css'
import LoginForm from "../login/LoginForm"
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import Link from 'next/link';
import Logo from './Logo'
import UserIcon from "./UserIcon"
import RoundButton from "../ui/Button/RoundButton"
import UserMenu from "./UserMenu"


function Layout(props : PropsWithChildren) {

    let router = useRouter()
    const closeHandler = () => {
        router.push("/")
    }
    const user = true

    return (
        <Fragment>
            {router.query.modal && (
                <>
                    <Modal onClose={closeHandler} />
                    {router.query.modal === "login" && <LoginForm onClose = {closeHandler}/>}
                </>
                
             
            )}
            <div className={classes.layout}>
                
                <Logo/>
                <div className={classes.search}>
                    <Link href="/?modal=search" as="/search">
                        <SearchInput/>
                    </Link>
                </div>
                {user ? (
                    <div className={classes.user}>
                        <RoundButton>
                            <Link href="/?modal=login" as="/login">
                                비교 상품 만들기
                            </Link>
                        </RoundButton>
                        <UserIcon/>
             
                    </div>
                ) : (
                    <RoundButton>
                        <Link href="/?modal=login" as="/login">
                            로그인
                        </Link>
                    </RoundButton>
                )}
                
            </div>
            <main>{props.children}</main>
        </Fragment>
        
 
    )
}

export default Layout
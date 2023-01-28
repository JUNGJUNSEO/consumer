import { useRouter } from "next/router"
import { Fragment, PropsWithChildren } from "react"
import classes from './Layout.module.css'
import LoginForm from "../login/LoginForm"
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import Link from 'next/link';
import Logo from './Logo'
import RoundButton from "../ui/Button/RoundButton"


function Layout(props : PropsWithChildren) {

    let router = useRouter()
    const closeHandler = () => {
        router.push("/")
    }
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
                <RoundButton>
                    <Link href="/?modal=login" as="/login">
                            로그인
                    </Link>
                </RoundButton>
                    
                
            </div>
            <main>{props.children}</main>
        </Fragment>
        
 
    )
}

export default Layout
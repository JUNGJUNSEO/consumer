import { useRouter } from "next/router"
import { Fragment, PropsWithChildren } from "react"
import LoginForm from "../login/LoginForm"
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import classes from './HomeLayout.module.css'

function HomeLayout(props : PropsWithChildren) {

    let router = useRouter()
    const closeHandler = () => {
        router.push("/")
    }
    return (
        <Fragment>
            {router.query.modal && (
                <>
                    <Modal onClose={closeHandler} />
                    {router.query.modal === "search" && <SearchInput/>}
                    {router.query.modal === "login" && <LoginForm onClose = {closeHandler}/>}
                </>
                
             
            )}
            <main className={classes.main}>{props.children}</main>
        </Fragment>
        
 
    )
}

export default HomeLayout
import { useRouter } from "next/router"
import { Fragment, PropsWithChildren } from "react"
import SearchInput from "../search/SearchInput"
import Modal from "../ui/Modal"
import classes from './HomeLayout.module.css'

function HomeLayout(props : PropsWithChildren) {

    let router = useRouter()

    return (
        <Fragment>
            {router.query.modal && (
                <Modal onClose = {() => {router.push("/")}}/>
                {router.query.modal === "search" && <SearchInput/>}
                {router.query.modal === "login" && <SearchInput/>}
             
            )}
            <main className={classes.main}>{props.children}</main>
        </Fragment>
        
 
    )
}

export default HomeLayout
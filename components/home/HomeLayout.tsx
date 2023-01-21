import { PropsWithChildren } from "react"
import classes from './HomeLayout.module.css'

function HomeLayout(props : PropsWithChildren) {
    return (
        <div>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default HomeLayout
import { PropsWithChildren } from "react"
import classes from "./AuthButton.module.css"

function AuthButton(props:PropsWithChildren) {


    return (
        <button className={classes.button}>
            {props.children}
        </button>
    )
}

export default AuthButton
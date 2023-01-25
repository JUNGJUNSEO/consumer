import { PropsWithChildren } from "react"
import classes from "./LoginButton.module.css"

interface ButtonProps {
    color: string
}

function LoginButton(props:PropsWithChildren<ButtonProps>) {


    return (
        <button className={classes.button} style = {{backgroundColor: props.color}}>
            {props.children}
        </button>
    )
}

export default LoginButton
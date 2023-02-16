import classes from "./AuthForm.module.css"
import LoginForm from "./LoginForm"
import ReactDOM from "react-dom"
import { Fragment, PropsWithChildren } from "react"
import AuthSocialButtons from "./AuthSocialButtons"
import { MdClose } from 'react-icons/md';
import JoinButton from "./JoinButton"

interface AuthFormProps {
    onToggleClick : () => void
    onCloseAuthModal: () => void
    mode: string
   
}


function AuthForm(props:PropsWithChildren<AuthFormProps>){

    const selectedElement = document.getElementById("modal")

    const mode = props.mode
    const modeText = (mode === 'LOGIN') ? "로그인" : "회원 가입"

    return (

        <Fragment>
            {ReactDOM.createPortal(
                (<div className={classes.block}>
                    <div className={classes.exit}>
                        <MdClose onClick = {props.onCloseAuthModal}/>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.body}>
                            <h2>{modeText}</h2>
                            <section>
                                <h4>계정으로 {modeText}</h4>
                                {mode === "LOGIN" ? <LoginForm/> : <JoinButton/>}
                                
                            </section>
                            <section>
                                <h4>소셜 계정으로 {modeText}</h4>
                                <AuthSocialButtons/>
                            </section>
                            
                        </div>
                        <div className={classes.foot}>
                            <span>
                                {mode === "LOGIN" 
                                    ? "아직 회원이 아니신가요?"
                                    : "계정이 이미 있으신가요?"
                                }   
                            </span>
                            <div onClick={props.onToggleClick}>
                                {mode === "LOGIN" 
                                    ? "회원가입"
                                    : "로그인"
                                }   
                            </div>
                        </div>

                    </div>
                    
                </div>), selectedElement)}
        </Fragment>

    )
}


export default AuthForm
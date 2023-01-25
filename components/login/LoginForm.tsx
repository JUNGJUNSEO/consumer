import classes from "./LoginForm.module.css"
import EmailForm from "./EmailForm"
import ReactDOM from "react-dom"
import { Fragment, PropsWithChildren } from "react"
import LoginSocialButtons from "./LoginSocialButtons"
import { MdClose } from 'react-icons/md';

interface ModalProps {
    onClose : () => void
}


function LoginForm(props:PropsWithChildren<ModalProps>){

    const selectedElement = document.getElementById("modal")

    return (

        <Fragment>
            {ReactDOM.createPortal(
                (<div className={classes.block}>
                    <div className={classes.exit}>
                        <MdClose onClick = {props.onClose}/>
                    </div>
                    <div className={classes.form}>
                        <div className={classes.body}>
                            <h2>로그인</h2>
                            <section>
                                <h4>이메일로 로그인</h4>
                                <EmailForm/>
                            </section>
                            <section>
                                <h4>소셜 계정으로 로그인</h4>
                                <LoginSocialButtons/>
                            </section>
                            
                        </div>
                        <div className={classes.foot}>
                            <span>아직 회원이 아니신가요? </span>
                            <div>회원 가입</div>
                        </div>

                    </div>
                    
                </div>), selectedElement)}
        </Fragment>

    )
}


export default LoginForm
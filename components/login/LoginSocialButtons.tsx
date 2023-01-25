import LoginButton from "../ui/Button/LoginButton"
import classes from "./LoginSocialButtons.module.css"
function LoginSocialButtons(){


    return (
        <div  className={classes.block}>
            <LoginButton color = "#2DB400">
                네이버로 시작하기
            </LoginButton>
            <LoginButton color = "#FEE500">
                카카오로 시작하기
            </LoginButton>
        </div>
    )
}

export default LoginSocialButtons 
import LoginButton from "../ui/Button/LoginButton"
import styles from "./AuthSocialButtons.module.css"
import {SiNaver, SiKakao, SiKakaotalk} from "react-icons/si"
function AuthSocialButtons(){


    return (
        <div  className={styles.block}>
            <SiNaver style={{color: "#2DB400"}}/>
            <SiKakao style={{color: "#FEE500"}}/>
        </div>
    )
}

export default AuthSocialButtons 
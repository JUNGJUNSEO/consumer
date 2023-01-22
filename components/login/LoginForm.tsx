import classes from "./LoginForm.module.css"
import EmailForm from "./EmailForm"
import { useRouter } from 'next/router'

function LoginForm(){

    const router = useRouter()
    console.log(router.pathname)

    return (

        <div className={classes.block}>
            <div>
                <h2>로그인</h2>
                <section>
                    <h4>이메일로 로그인</h4>
                    <EmailForm/>
                        

                </section>
                <section>
                    <h4>소셜 계정으로 로그인</h4>
                </section>
            </div>
            <div>
                <span>아직 회원이 아니신가요?</span>
                <div>회원 가입</div>
            </div>
        </div>

    )
}


export default LoginForm
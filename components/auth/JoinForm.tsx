import React, { useEffect, useReducer, useState } from "react"
import LoginButton from "../ui/Button/LoginButton"
import useValidator from "./hooks/useValidator"
import styles from './LoginForm.module.css'



const validateEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)

}

const JoinForm = () => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useValidator(validateEmail)
    
    const {value: emailValue, isValid : emailIsValid, touched: emailTouched } = emailState

    useEffect(() => {
        setFormIsValid(emailIsValid)
    }, [emailIsValid])

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value, touch: false})
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR', value: '', touch: true})
    }

    const submitHandler = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (

        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <input 
                    type="text" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "이름을 입력하세요"
                />
            </div>

            <div>
                <input 
                    type="text" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "아이디를 입력하세요"
                />
            </div>

            <div>
                <input 
                    type="email" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "이메일을 입력하세요"
                />
                {!emailIsValid && emailTouched  && (
                    <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
                )}
            </div>


            <div>
                <input 
                    type="text" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "비밀번호를 입력하세요"
                />
                {!emailIsValid && emailTouched  && (
                    <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
                )}
            </div>
            
            <div>
                <LoginButton color = {"#734B87"}>
                    회원가입
                </LoginButton>
            </div>
            
        </form>

    )
}

export default JoinForm
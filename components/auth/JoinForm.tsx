import React, { useEffect, useReducer, useState } from "react"
import LoginButton from "../ui/Button/LoginButton"
import styles from './EmailForm.module.css'

interface stateProps {
    value: string
    isValid: boolean | null
}

interface actionProps {
    type: string
    value: string 
}

const emailInitailState = {
    value: '',
    isValid: false,
}

const validateEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)

}

const emailReducer = (state: stateProps, action: actionProps) => {
    switch (action.type) {
        case 'USER_INPUT':
            return { value: action.value, isValid: validateEmail(action.value) };
        case 'INPUT_BLUR':
            return { value: state.value, isValid: validateEmail(state.value) };
        default:
            return emailInitailState
    }
};



const JoinForm = () => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, emailInitailState)
    
    const {value: emailValue, isValid : emailIsValid } = emailState

    useEffect(() => {
        setFormIsValid(emailIsValid)
    }, [emailIsValid])

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value})
    }

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR', value: ''})
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
                    type="email" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "이메일을 입력하세요"
                />
            </div>
            {!emailIsValid  && (
                <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
            )}

            <div>
                <input 
                    type="text" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "비밀번호를 입력하세요"
                />
            </div>
            {!emailIsValid  && (
                <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
            )}

            <div>
                <input 
                    type="text" 
                    value={emailValue} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "아이디를 입력하세요"
                />
            </div>
            {!emailIsValid  && (
                <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
            )}
            
            <div>
                <LoginButton color = {"#734B87"}>
                    회원가입
                </LoginButton>
            </div>
            
        </form>

    )
}

export default JoinForm
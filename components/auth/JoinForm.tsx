import React, { useEffect, useReducer, useState } from "react"
import AuthButton from "../ui/Button/AuthButton"
import useValidator from "./hooks/useValidator"
import styles from './LoginForm.module.css'



const validateEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)

}

const validatUser = (user: string) => {
    return user.trim().length > 0
}

const validatPassward = (user: string) => {
    return user.trim().length > 6
}


const JoinForm = () => {

    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useValidator(validateEmail)
    const [usernameState, dispatchUsername] = useValidator(validatUser)
    const [nameState, dispatchName] = useValidator(validatUser)
    const [passwordState, dispatchPassword] = useValidator(validatPassward)
    

    useEffect(() => {
        setFormIsValid(emailState.isValid && usernameState.isValid && nameState.isValid && passwordState.isValid);
      }, [emailState.isValid, usernameState.isValid, nameState.isValid, passwordState.isValid]);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, inputValidator: any) => {
        inputValidator({type: 'USER_INPUT', value: event.target.value, touch: false})
    }

    const validateInputHandler = (inputValidator: any) => {
        inputValidator({type: 'INPUT_BLUR', value: '', touch: true})
    }


    const submitHandler = async(event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formIsValid) {
            return
        }

        const data = {name: nameState.value, email: emailState.value, username: usernameState.value, password: passwordState.value}
        const response =  await fetch('/api/join', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (

        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <input 
                    type="text" 
                    value={nameState.value} 
                    onChange={(event) => inputChangeHandler(event, dispatchName)}
                    onBlur={() => validateInputHandler(dispatchName)}
                    placeholder = "이름을 입력하세요"
                />
                {!usernameState.isValid && usernameState.touched  && (
                    <p className={styles.errorText}> 이름은 꼭 입력해주세요. 별명도 괜찮아요.</p>
                )}
            </div>

            <div>
                <input 
                    type="text" 
                    value={usernameState.value} 
                    onChange={(event) => inputChangeHandler(event, dispatchUsername)}
                    onBlur={() => validateInputHandler(dispatchUsername)}
                    placeholder = "아이디를 입력하세요"
                />
                {!nameState.isValid && nameState.touched  && (
                    <p className={styles.errorText}> 아이디 값은 필수 입니다.</p>
                )}
            </div>

            <div>
                <input 
                    type="text" 
                    value={passwordState.value} 
                    onChange={(event) => inputChangeHandler(event, dispatchPassword)}
                    onBlur={() => validateInputHandler(dispatchPassword)}
                    placeholder = "비밀번호를 입력하세요"
                />
                {!passwordState.isValid && passwordState.touched && (
                    <p className={styles.errorText}> 7자리 이상인 비밀번호를 입력해주세요.</p>
                )}
            </div>

            <div>
                <input 
                    type="email" 
                    value={emailState.value} 
                    onChange={(event) => inputChangeHandler(event, dispatchEmail)}
                    onBlur={() => validateInputHandler(dispatchEmail)}
                    placeholder = "이메일을 입력하세요"
                />
                {!emailState.isValid && emailState.touched  && (
                    <p className={styles.errorText}> 유요한 Email 주소를 입력해 주세요.</p>
                )}
            </div>


            <div>
                <AuthButton>
                    회원가입
                </AuthButton>
            </div>
            
        </form>

    )
}

export default JoinForm
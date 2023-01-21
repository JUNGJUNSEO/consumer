import React, { useEffect, useReducer, useState } from "react"
import classes from './EmailForm.module.css'

interface stateProps {
    value: string
    isValid: boolean
}

interface actionProps {
    type: string
    value: string 
}

const emailReducer = (state: stateProps, action: actionProps) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
  };


function EmailForm () {


    const [formIsValid, setFormIsValid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    })

    const { isValid : emailIsValid } = emailState

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
        console.log(emailState.value)
    }

    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <input 
                    type="email" 
                    value={emailState.value} 
                    onChange={emailChangeHandler} 
                    onBlur = {validateEmailHandler}
                    placeholder = "이메일을 입력하세요."
                />
            </div>
            <div>
                <button disabled = {!formIsValid}>
                    로그인
                </button>
            </div>
            
        </form>

    )
}


export default EmailForm
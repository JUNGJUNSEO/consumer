import { useRouter } from "next/router"
import React, { useReducer, useState } from "react"
import AuthButton from "../ui/button/AuthButton"
import styles from './LoginForm.module.css'
import useSWR, { useSWRConfig } from 'swr'

enum ActionType {
    InputClick = 'INPUT_CLICK',
    GetError = 'GET_ERROR'
}

interface State {
    isClicked: boolean
    gotError: boolean
}

interface Action {
    type: ActionType
}

const reducer = (state: State, action:Action) => {
    switch (action.type){
        case ActionType.InputClick:
            return {
                ...state,
                isClicked: true,
            }
        case ActionType.GetError:
            return {
                ...state,
                isClicked: false,
                gotError: true
            }
        default:
            return state;
    }
}

const LoginForm = () => {

    const [username, setUsernameState] = useState('')
    const [password, setPasswordState] = useState('')
    const [usernameState, dispatchUsername] = useReducer(reducer, { isClicked: false, gotError: false })
    const [passwardError, dispatchPassward] = useReducer(reducer, { isClicked: false, gotError: false })
    const router = useRouter()
    const { mutate } = useSWRConfig()

    const userChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameState(event.target.value)
    }

    const passwardChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordState(event.target.value)
    }

    const clickUsernameHandler = () => {
        dispatchUsername({type: ActionType.InputClick})
    }

    const clickPasswardHandler = () => {
        dispatchPassward({type: ActionType.InputClick})
    }

    const submitHandler = async(event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {username, password}

        const response =  await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })

        if (response.status === 404) {
            dispatchUsername({type: ActionType.GetError})
        }else if (response.status === 401) {
            dispatchPassward({type: ActionType.GetError})
        }else if (response.status === 200) {
            router.push(router.asPath)
            mutate('/api/session')
        }   
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div>
                <input 
                    type="text" 
                    value={username} 
                    onChange={userChangeHandler} 
                    placeholder = "아이디를 입력하세요"
                    onClick={clickUsernameHandler}
                />
                {!usernameState.isClicked && usernameState.gotError && <p>해당 아이디가 존재하지 않습니다.</p>}
            </div>
  
            <div>
                <input 
                    type="passward" 
                    value={password} 
                    onChange={passwardChangeHandler} 
                    placeholder = "비밀번호를 입력하세요"
                    onClick={clickPasswardHandler}
                />
                {!passwardError.isClicked && passwardError.gotError && <p>비밀번호가 틀립니다.</p>}
            </div>
            <div>
                <AuthButton>
                    로그인
                </AuthButton>
            </div>
        </form>
    )
}

export default LoginForm
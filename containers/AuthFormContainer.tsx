import AuthForm from "@/components/auth/AuthForm"
import { useRouter } from "next/router"
import { PropsWithChildren, useState } from "react"

interface AuthFormContainerProps {
    onCloseAuthModal : () => void
}

function authFormContainer(props: PropsWithChildren<AuthFormContainerProps>){


    const router = useRouter()

    const [toggleState, setToggleState] = useState('LOGIN')

    const ToggleClickHandler = () => {
        setToggleState(() => {
            if (toggleState === 'LOGIN') {
                return 'JOIN'
            }else{
                return 'LOGIN'
            }
        })
        router.push(`${router.pathname}?modal=join`)
    }






    return (
        <AuthForm
            onCloseAuthModal = {props.onCloseAuthModal}
            onToggleClick = {ToggleClickHandler}
            mode = {toggleState}
  
        />

    )


}


function validateEmail (email:string)  {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email)

}


export default authFormContainer
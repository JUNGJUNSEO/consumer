import { useReducer } from "react"

interface stateProps {
    value: string
    isValid: boolean | null
}

interface actionProps {
    type: string
    value: string 
}


const useValidator = (validateFn : (input:string) => boolean) => {

    const initailState = {
        value: '',
        isValid: false,
    }

    const reducer = (state: stateProps, action: actionProps) => {
        switch (action.type) {
            case 'USER_INPUT':
                return { value: action.value, isValid: validateFn(action.value) };
            case 'INPUT_BLUR':
                return { value: state.value, isValid: validateFn(state.value) };
            default:
                return initailState
        }
    };

    const [state, dispatch] = useReducer(reducer, initailState)


    return {state, dispatch}

}

export default useValidator
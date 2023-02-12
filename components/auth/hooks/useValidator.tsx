import { useReducer } from "react"

interface stateProps {
    value: string
    isValid: boolean
    touched: boolean
}

interface actionProps {
    type: string
    value: string 
    touch: boolean
}


const useValidator = (validateFn : (input:string) => boolean) => {

    const initailState = {
        value: '',
        isValid: false,
        touched: false
    }

    const reducer = (state: stateProps, action: actionProps) => {
        switch (action.type) {
            case 'USER_INPUT':
                return { 
                    value: action.value, 
                    isValid: validateFn(action.value), 
                    touched: state.touched 
                };
            case 'INPUT_BLUR':
                return { 
                    value: state.value,
                    isValid: validateFn(state.value), 
                    touched: action.touch 
                };
            default:
                return initailState
        }
    };

    return useReducer(reducer, initailState)

}

export default useValidator
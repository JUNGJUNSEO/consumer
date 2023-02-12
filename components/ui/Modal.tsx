import { Fragment, PropsWithChildren } from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'

interface ModalProps {
    onCloseAuthModal : () => void
}

const BackDrop = (props : ModalProps) => {
    return (
        <div className={classes.backdrop}  onClick={props.onCloseAuthModal}></div>
    )
}


const Modal = (props : PropsWithChildren<ModalProps>) => {

    const selectedElement = document.getElementById("modal")

    if (selectedElement === null){
        return <div></div>
    }
  
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onCloseAuthModal = {props.onCloseAuthModal}/>, selectedElement)}
        </Fragment>
    )

}

export default Modal
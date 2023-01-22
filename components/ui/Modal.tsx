import { Fragment, PropsWithChildren } from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'

interface ModalProps {
    onClose : () => void
}

const BackDrop = (props : ModalProps) => {
    return (
        <div className={classes.backdrop}  onClick={props.onClose}></div>
    )
}


const Modal = (props : PropsWithChildren<ModalProps>) => {

    const selectedElement = document.getElementById("modal")

    if (selectedElement === null){
        return <div></div>
    }
  
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose = {props.onClose}/>, selectedElement)}
        </Fragment>
    )

}

export default Modal
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

const SearchOverlay = () => {
    return (
        <div className={classes.modal}>
            <div>
                <form>
                    <input type="text" placeholder="비교 상품 검색"></input>
                </form>
            </div>
        </div>
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
            {ReactDOM.createPortal(<SearchOverlay/>, selectedElement)}
        </Fragment>
    )

}

export default Modal
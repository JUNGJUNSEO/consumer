import { Fragment, useState } from "react"
import Modal from "../ui/Modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchButton.module.css"
import Link from "next/link";

function SearchButton(){

    const [close, setClose] = useState(true)

    const modalHandler = () => {
        setClose((pre) => !pre)
    }

    return (
        <Fragment>
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={modalHandler} className = {classes.button}/>
            {!close && <Modal onClose = {modalHandler}/>}
        </Fragment>
            
    )
}

export default SearchButton
import { useState } from "react"
import Modal from "../ui/Modal"

function SearchButton(){

    const [close, setClose] = useState(false)

    const closeHandler = () => {
        setClose((pre) => !pre)
    }

    return (
        <div>
            {close && <Modal onClose = {closeHandler}/>}
            <div onClick={closeHandler}>search</div>
        </div>
            
    )
}

export default SearchButton
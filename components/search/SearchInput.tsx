import classes from "./SearchInput.module.css"
import ReactDOM from "react-dom"
import { Fragment } from "react"

const SearchOverlay = () => {
    return (
        <div className={classes.block}>
            <div>
                <form>
                    <input type="text" placeholder="비교 상품 검색"></input>
                </form>
            </div>
        </div>
    )
}


function SearchInput() {

    const selectedElement = document.getElementById("modal")

    return (
        <Fragment>
            {ReactDOM.createPortal(<SearchOverlay/>, selectedElement)}
        </Fragment>
        

    )
}


export default SearchInput
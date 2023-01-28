import classes from "./SearchInput.module.css"
import {MdSearch} from "react-icons/md"


function SearchInput() {

    

    return (
        <form className={classes.form}>
            <MdSearch/>
            <input type="text" placeholder="비교 상품 검색"></input>
        </form>
        

    )
}


export default SearchInput
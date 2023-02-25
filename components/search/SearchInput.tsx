import styles from "./SearchInput.module.css";
import {MdSearch} from "react-icons/md";



function SearchInput() {

    return (
        <div className={styles.block}>
            <form className={styles.form}>
                <MdSearch/>
                <input type="text" placeholder="비교 상품 검색"></input>
            </form>

        </div>

        

    )
}


export default SearchInput
import classes from "./SearchInput.module.css";
import {MdSearch} from "react-icons/md";
import {useRecoilValue} from "recoil";
import { isPurpleAtom } from "@/lib/atom";


function SearchInput() {

    // const isPurple = useRecoilValue(isPurpleAtom)
    // style={isPurple ? {border: "solid #734B87"}: {}}
    return (
        <form className={classes.form}>
            <MdSearch/>
            <input type="text" placeholder="비교 상품 검색"></input>
        </form>
        

    )
}


export default SearchInput
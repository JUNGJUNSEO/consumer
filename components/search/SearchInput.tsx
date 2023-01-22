import classes from "./SearchInput.module.css"

function SearchInput() {



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


export default SearchInput
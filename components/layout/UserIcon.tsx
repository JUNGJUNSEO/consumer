import classes from "./UserIcon.module.css"
import { MdArrowDropDown } from "react-icons/md"

function UserIcon() {

    return (
        <div className={classes.block}>
            <img 
                src="https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg"
                alt="thumbnail"
            />
        </div>
    )
}

export default UserIcon
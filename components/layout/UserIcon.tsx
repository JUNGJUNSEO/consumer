import classes from "./UserIcon.module.css"
import { MdArrowDropDown } from "react-icons/md"
import { PropsWithChildren } from "react"

interface UserIconProp {
    onClickMenu: () => void
}

function UserIcon(props:PropsWithChildren<UserIconProp>) {

    return (
        <div className={classes.block} onClick={props.onClickMenu}>
            <img
                src="https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg"
                alt="thumbnail"
            />
            <MdArrowDropDown />
        </div>
    )
}

export default UserIcon
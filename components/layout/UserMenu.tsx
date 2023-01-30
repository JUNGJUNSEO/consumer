import classes from "./Usermenu.module.css"
import {SlLogout} from"react-icons/sl"
function UserMenu(){

    return (
        <div className={classes.block}>
            <div className={classes.wrapper}>
                <div>
                    <SlLogout/>
                    로그아웃
                </div>

            </div>
        </div>
    )
}

export default UserMenu
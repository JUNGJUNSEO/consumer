import classes from "./Usermenu.module.css"
import {SlLogout} from"react-icons/sl"
import {CgProfile} from"react-icons/cg"
import {BsCardHeading} from"react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import {GiBackwardTime} from "react-icons/gi"

function UserMenu(){

    const handleLogout = async() => {
        await fetch('/api/logout')
    }

    return (
        <div className={classes.block}>
            <ul className={classes.wrapper}>
                <li>
                    <CgProfile/>
                    내 프로필
                </li>
                
                <hr></hr>
                <li>
                    <BsCardHeading/>
                    내 포스트
                </li>
                <li>
                    <AiFillHeart/>
                    좋아요 표시한 포스트
                </li>
                <li>
                    <GiBackwardTime/>
                    최근에 읽은 포스트
                </li>
                <hr></hr>
                <li onClick={handleLogout}>
                  <SlLogout/>
                    로그아웃
                </li>

            </ul>
        </div>
    )
}

export default UserMenu
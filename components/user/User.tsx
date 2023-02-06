import NavProfile from "./NavProfile"
import styles from "./User.module.css"
import UserProfile from "./UserProfile"

function User() {

    return (
        <div className={styles.container}>
            <UserProfile/>
            <NavProfile/>
        </div>
    )

}

export default User
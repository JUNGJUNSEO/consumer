import styles from "./UserLayout.module.css"
import UserProfile from "./UserProfile"
import NavProfile from "./NavProfile"
import type { ReactElement } from "react"

function UserLayout(page: ReactElement) {

    return (
        <div className={styles.container}>
            <UserProfile/>
            <NavProfile/>
            {page}
        </div>
    )

}

export default UserLayout
import styles from "./UserLayout.module.css"
import UserProfile from "./UserProfile"
import NavProfile from "./NavProfile"
import { PropsWithChildren } from "react"
import { IUser } from "@/lib/models/user"

interface UserLayoutProps {
    user: IUser
}

function UserLayout({ children, user } : PropsWithChildren<UserLayoutProps>) {

    return (
        <div className={styles.container}>
            <UserProfile/>
            <NavProfile
                userPosts={user.posts.length}
                readPosts={user.readPosts.length}
                likePosts={user.likePosts.length}
            />
            <div>
                {children}
            </div>
        </div>
    )

}

export default UserLayout
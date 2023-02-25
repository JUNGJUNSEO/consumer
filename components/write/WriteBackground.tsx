import { PropsWithChildren } from "react"
import styles from "./WriteBackgound.module.css"



const WriteBackground = (props:PropsWithChildren) => {
    return (
        <div className={styles.block}>
            {props.children}
        </div>
    )

}


export default WriteBackground
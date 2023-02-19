import { PropsWithChildren } from "react"
import styles from "./MainTemplate.module.css"

function MainTemplate(props:PropsWithChildren) {

    <div className={styles.block}>
        {props.children}
    </div>


}



export default MainTemplate



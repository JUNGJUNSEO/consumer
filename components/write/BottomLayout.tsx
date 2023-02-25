import { PropsWithChildren } from "react"
import RoundButton from "../ui/Button/RoundButton"
import styles from "./BottomLayout.module.css"

interface BottomLayoutProps {
    onClick: () => void
}

const BottomLayout = (props:PropsWithChildren<BottomLayoutProps>) => {

    return (

        <div className={styles.block}>
            <div className={styles.button} onClick={props.onClick}>
                만들기
            </div>
        </div>
    )

}

export default BottomLayout
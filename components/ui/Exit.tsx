import { PropsWithChildren } from "react"
import { MdClose } from "react-icons/md"
import styles from "./Exit.module.css"

interface ExitProps {
    onClick: () => void
}

const Exit = (props:PropsWithChildren<ExitProps>) => {

    return (
        <div className={styles.exit}>
            <MdClose onClick = {props.onClick}/>
        </div>
    )

}

export default Exit
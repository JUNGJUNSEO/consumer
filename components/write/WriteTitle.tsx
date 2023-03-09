import { FC } from "react"
import styles from "./WriteTitle.module.css"

interface WriteTitleProps {
    title: string
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void
}

const WriteTitle:FC<WriteTitleProps> = ({title, onChange}) => {

    return (

        <div className={styles.title}>
            <input 
                type="text" 
                value={title} 
                onChange={onChange} 
                placeholder = "제목을 입력하세요"
            />
        </div>
    )

}



export default WriteTitle
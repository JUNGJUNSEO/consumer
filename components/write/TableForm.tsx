import styles from "./TableForm.module.css"
import {BsImage, BsFillTrashFill} from "react-icons/bs"

interface TableFormProps {
    tableData: any[][];
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
    onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddRow: () => void;
    onAddCol: () => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void

}

const TableForm: React.FC<TableFormProps> = ({
    tableData, 
    onChange, 
    onFileSelect, 
    onAddRow, 
    onAddCol, 
    onSubmit
}) => {

    const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const [row, col] = event.currentTarget.parentElement.id.split('-')
        // input 요소 나타내기
        document.getElementById(`${row}-${col}-input`).style.display = "block";
        // image 요소 숨기기
        document.getElementById(`${row}-${col}-image`).style.display = "none";

    }
   
    return (

        <form className={styles.tableContainer}  onSubmit={onSubmit}>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((col, colIndex) => {
                                    if (rowIndex === 0) {
                                        return (
                                            <td key={colIndex}>
                                                {colIndex === 0 ? (
                                                    <input 
                                                        className={styles.inputText}
                                                        type="text"
                                                        name={`${rowIndex}-${colIndex}`}
                                                        value={tableData[rowIndex][colIndex]}
                                                        onChange={onChange}
                                                        
                                                    />
                                                ) : (
                                                    <div className={styles.inputFile}>
                                                        <div id={`${rowIndex}-${colIndex}-input`}>
                                                            <div>
                                                                <BsImage/>
                                                                <p>
                                                                    Drag or click to upload an image
                                                                </p>
                                                            </div>
                                                            <input
                                                                type="file"
                                                                name={`${rowIndex}-${colIndex}`}
                                                                onChange={onFileSelect}     
                                                            />
                                                        </div>
                                                        <div id={`${rowIndex}-${colIndex}-image`}>
                                                            <img id={`${rowIndex}-${colIndex}`}/>
                                                            <button onClick={handleRemoveImage}>
                                                                <BsFillTrashFill />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </td>
                                        )
                                    }else {
                                        return (
                                            <td key={colIndex}>
                                                <input
                                                    className={styles.inputText}
                                                    type="text"
                                                    name={`${rowIndex}-${colIndex}`}
                                                    value={tableData[rowIndex][colIndex]}
                                                    onChange={onChange}     
                                                /> 
                                            </td>
                                        )
                                    }                                             
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className={styles.rowButton} onClick={onAddRow}>행 추가</button>
                <button className={styles.colButton} onClick={onAddCol}>열 추가</button>   


            </div>


            <button type="submit">submit</button>              
        </form>
    )
}

export default TableForm
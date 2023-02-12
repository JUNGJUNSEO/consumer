import {useState } from "react";
import styles from "./TableForm.module.css"
import {BsImage, BsFillTrashFill} from "react-icons/bs"

const TableForm = () => {

    const [numCols, setNumCols] = useState(4)
    const [numRows, setNumRows] = useState(3);
    const [tableData, setTableData] = useState<any[][]>(
            Array.from({ length: numRows}, (_, rowIndex) =>
                Array.from({ length: numCols}, (_, colIndex) => {
                    if (colIndex === 0) {
                        return rowIndex === 0 ? "사진" : rowIndex === 1 ? "제품명" : "특징"
                    }else {
                        return ""
                    }
                })
            )
        )
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const [row, col] = name.split("-").map(index => +index)
        
        setTableData((prevData) => {
            const data = [...prevData];
            data[row][col] = value
            return data;
        });
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = event.target;
        if (!files) return;
        const file = files[0];
        const reader = new FileReader();
        const [row, col] = name.split("-").map(index => +index);

        reader.onload = function(event: any) {
            const imgUrl = event.target.result;
            const imgElement = document.getElementById(name) as HTMLImageElement;
            imgElement.src = imgUrl;

            // input 요소 숨기기
            document.getElementById(`${name}-input`).style.display = "none";
            // image 요소 나타내기
            document.getElementById(`${name}-image`).style.display = "block";
          };
        
        reader.readAsDataURL(file);

        setTableData((prevData) => {
            const data = [...prevData];
            data[row][col] = file;
            return data;
        });
    };

    const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const [row, col] = event.currentTarget.parentElement.id.split('-')
        // input 요소 나타내기
        document.getElementById(`${row}-${col}-input`).style.display = "block";
        // image 요소 숨기기
        document.getElementById(`${row}-${col}-image`).style.display = "none";

    }

    const handleAddRow = () => {
        setNumRows(prevNumRows => prevNumRows + 1);
        setTableData((preData) => [
            ...preData, 
            Array.from({ length: numCols }, () => "")
        ]);
    }

    const handleAddCol = () => {
        setNumCols(prevNumCols => prevNumCols + 1)
        setTableData(prevData => {
            return prevData.map(row => [...row, ''])
        })
    }

    const handleTableSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(tableData)
    }
   
    return (

        <form className={styles.tableContainer}  onSubmit={handleTableSubmit}>
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
                                                    onChange={handleChange}
                                                    
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
                                                            onChange={handleFileSelect}     
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
                                                onChange={handleChange}     
                                            /> 
                                        </td>
                                    )
                                }                                             
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={styles.button} onClick={handleAddRow}>Add Row</button>
            <button onClick={handleAddCol}>Add Col</button>   

            <button type="submit">submit</button>              
        </form>
    )
}

export default TableForm
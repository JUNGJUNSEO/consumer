import WriteTable from "@/components/write/WriteTable";
import { FC, ChangeEvent, SetStateAction, Dispatch } from "react";

interface TableContainerProps {
  tableData: any[][];
  setTableData: Dispatch<SetStateAction<any[][]>>;
  setNumRows: Dispatch<SetStateAction<number>>;
  numCols: number;
  setNumCols: Dispatch<SetStateAction<number>>;
}

const tableContainer:FC<TableContainerProps> = ({
    tableData, 
    setTableData, 
    setNumRows, 
    setNumCols, 
    numCols
}) => {

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
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
            document.getElementById(`${name}-input`)!.style.display = "none";
            // image 요소 나타내기
            document.getElementById(`${name}-image`)!.style.display = "block";
          };
        
        reader.readAsDataURL(file);

        setTableData((prevData) => {
            const data = [...prevData];
            data[row][col] = file;
            return data;
        });
    };

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

    return (

        <WriteTable
            tableData={tableData} 
            onChange={handleChange} 
            onFileSelect={handleFileSelect} 
            onAddRow={handleAddRow} 
            onAddCol={handleAddCol} 
        />
    );
};

export default tableContainer
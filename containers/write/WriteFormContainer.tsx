import PublishModal from "@/components/publish/PublishModal";
import BottomLayout from "@/components/write/BottomLayout";
import WriteTitle from "@/components/write/WriteTitle";
import { useState } from "react";
import TableContainer from "./TableContainer";

function WriteFormContainer() {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [numCols, setNumCols] = useState(3);
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
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [reason, setReason] = useState("")
    const [thumbFile, setThumbFile] = useState(null)

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
    }

    const handleClickProduct = (productId: number) => {
      setSelectedProduct(productId);
    };

    const reasonChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReason(event.target.value);
    };

    const ThumbFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setThumbFile(event.target.files[0])
    }

    const handleShowModal = () => {
      setShowModal(pre => !pre)
    }
      
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log('long')

      const formData = new FormData();
      formData.append('title', title)
      formData.append('owner_pick', String(selectedProduct))
      formData.append('reason', reason)
      formData.append('post_image', thumbFile)
        
      for (let i = 0; i < tableData.length; i++) {
        const row = tableData[i];
        if (i === 0) {
          for (let j = 1; j < row.length; j++) {
            const file = row[j];
            if (file) {
              formData.append('files', file);
            }
          }
        } else {
          const textArr = row.map((value) => (value ? value : ''));
          formData.append(`texts`, textArr.join(','));
        }
      }
      
      try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          console.log('Upload success');
        } catch (e) {
          console.error('Upload failed', e);
        }
    }

    return (
      <form onSubmit={handleSubmit}>
  
        <WriteTitle 
            title = {title}
            onChange={titleChangeHandler}
        />
        <TableContainer
            tableData={tableData}
            setTableData={setTableData}
            setNumRows={setNumRows}
            numCols = {numCols}
            setNumCols={setNumCols}
        />
        <BottomLayout onClick={handleShowModal}/>

      {showModal && (
      <PublishModal
        tableData = {tableData}
        onClick={handleShowModal} 
        selectedProduct={selectedProduct} 
        onClickProduct={handleClickProduct}
        reason={reason}
        onChangeReason={reasonChangeHandler}
        onChangeThumb={ThumbFileHandler}
        />
      )}
    </form>
    )
}

export default WriteFormContainer
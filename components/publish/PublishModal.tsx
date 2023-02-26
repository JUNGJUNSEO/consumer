import { FC, useState } from "react"
import Exit from "../ui/Exit"
import ProductSelect from "./ProductSelect"
import styles from "./PublishModal.module.css"
import RoundButton from "@/components/ui/Button/RoundButton"

interface PublishModalProps {
    tableData: any[][]
    onClick: () => void;
    selectedProduct: number;
    onClickProduct: (id:number) => void;
    reason: string
    onChangeReason: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onChangeThumb: (event: React.ChangeEvent<HTMLInputElement>) => void
    
}

const PublishModal : FC<PublishModalProps> = ({ 
    tableData,
    onClick, 
    selectedProduct, 
    onClickProduct, 
    onChangeReason, 
    reason, 
    onChangeThumb

}) => {

    const [currentPage, setCurrentPage] = useState(0)
    const totalPages = 3;

    const prevButtonHandler = () => {
        setCurrentPage(prevPage => prevPage - 1)
    }

    const nextButtonHandler = () => {
        setCurrentPage(prevPage => prevPage + 1)
    }



    return (
        <div className={styles.backdrop}>
            <div className={styles.content}>
                <Exit onClick={onClick}/>
                {currentPage === 0 && 
                    <>
                        <h4>사용 경험이 가장 좋았던 제품을 선택해 주세요</h4>
                        <ProductSelect tableData={tableData} selectedProduct={selectedProduct} onClickProduct={onClickProduct} />
                    </>
                }
                {currentPage === 1 && 
                    <>
                        <h4>Product 1이 가장 좋았던 이유에 대해 적어주세요</h4>
                        <textarea value={reason} onChange={onChangeReason}/>
                    </>
                }
                {currentPage === 2 && 
                    <>
                        <input
                            type="file"
                            onChange={onChangeThumb}     
                        />
                        
                    </>
                }
                <div className={styles.buttons}>
                    {currentPage > 0 && (
                        <div onClick={prevButtonHandler}>
                        <RoundButton>이전</RoundButton>
                        </div>
                    )}

                    {currentPage < totalPages - 1 && (
                        <div onClick={nextButtonHandler}>
                        <RoundButton>다음</RoundButton>               
                        </div>
                    )}

                    {currentPage === totalPages - 1 && (
                        <div>
                        <RoundButton>출간하기</RoundButton>
                        </div>
                    )}
                </div>
            </div>
            <button type="submit">Submit</button>
        </div>
    )
}

export default PublishModal
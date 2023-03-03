import React from "react";
import styles from "./ProductsComparisonTable.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { AiFillCheckCircle } from "react-icons/ai";


interface ProductsComparisonTableProps {
  files: string[]
  texts: string[]
  ownerPick: number
}

  
const ProductsComparisonTable: React.FC<ProductsComparisonTableProps> = ({files, texts, ownerPick}) => {

  const [currentProduct, setCurrentProduct] = React.useState(1);
  const displayCount = 4
  const showPrevBtn = currentProduct > 1
  const showNextBtn = currentProduct < files.length - displayCount + 1

  const handlePrev = () => {
    setCurrentProduct(prevProduct => prevProduct - 1);  
  };
    
  const handleNext = () => {
    setCurrentProduct(prevProduct => prevProduct + 1);
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>제품 이미지</th>
            {files.slice(currentProduct - 1, currentProduct - 1 + displayCount).map((cell, index) => (
              <th key={index} >
                {index === ownerPick ? (
                  <>
                    <img src={`/images/${cell}`} alt = "this is the image" />
                    <div className={styles.userPick}>
                      <AiFillCheckCircle/>
                      <span>사용자 pick!</span>
                    </div>
                  </>

                ):(
                  <img src={`/images/${cell}`} alt = "this is the image"/>
                )}
                
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {texts.map((text, textIndex) => {
            const product = text.split(',');
            return (
              <tr key={textIndex}>
                <td>{product[0]}</td>
                {product.slice(currentProduct, currentProduct + displayCount).map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
            
        </tbody>
      </table>
      <div className={styles.nav}>
        <button 
          className={styles.prevBtn}
          style = {{visibility: showPrevBtn ? 'visible' : 'hidden'}} 
          onClick={handlePrev}
        >
          <IoIosArrowBack/>
        </button>
        <button 
          className={styles.nextBtn}
          style = {{visibility: showNextBtn ? 'visible' : 'hidden'}} 
          onClick={handleNext}
        >
          <IoIosArrowForward/>
        </button>
      </div>

    </div>
    );
};
  
export default ProductsComparisonTable;
  
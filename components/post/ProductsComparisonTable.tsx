import React, { useEffect } from "react";
import styles from "./ProductsComparisonTable.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image"

interface ProductsComparisonTableProps {
  files: string[]
  texts: string[]
  ownerPick: number
}

  
const ProductsComparisonTable: React.FC<ProductsComparisonTableProps> = ({files, texts, ownerPick}) => {

  const [currentProduct, setCurrentProduct] = React.useState(1);
  const [displayCount, setDisplayCount] = React.useState(4);
  const showPrevBtn = currentProduct > 1
  const showNextBtn = currentProduct < files.length - displayCount + 1

  const handlePrev = () => {
    setCurrentProduct(prevProduct => prevProduct - 1);  
  };
    
  const handleNext = () => {
    setCurrentProduct(prevProduct => prevProduct + 1);
  }

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 768) {
        setDisplayCount(2)
      } else {
        setDisplayCount(4)
        
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);
  console.log(currentProduct)
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>제품 이미지</th>
            {files.slice(currentProduct - 1, currentProduct - 1 + displayCount).map((cell, index) => (
              <th key={cell} >
                <img src={`/images/${cell}`} alt="this is the image" />
                {files.indexOf(cell) === ownerPick - 1 && (
                  <div className={styles.userPick}>
                    <AiFillCheckCircle />
                    <span>사용자 pick!</span>
                  </div>
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
  
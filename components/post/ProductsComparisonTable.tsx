import React, { useEffect } from "react";
import styles from "./ProductsComparisonTable.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import { AiFillCheckCircle } from "react-icons/ai";

const products= [
  ['이미지', "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg", "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg", "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg", "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg", "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg", "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"],
  ['가격', '100',  '200', '300', '400', '500', '600'],
  ['제품명', "Product 1", "Product 1", "Product 1", "Product 1", "Product 1", "Product 1"],
  
  ['description', "This is product 1", "This is product 1", "This is product 1", "This is product 1", "This is product 1", "This is product 1"],
];
  
const ProductsComparisonTable: React.FunctionComponent = () => {

    const [currentProduct, setCurrentProduct] = React.useState(1);
    const displayCount = 4
    const showPrevBtn = currentProduct > 1
    const showNextBtn = currentProduct < products[0].length - displayCount

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
              <th>{products[0][0]}</th>
              {products[0].slice(currentProduct, currentProduct + displayCount).map((cell, index) => (
                <th key={index} >
                  {index === 0 ? (
                    <>
                      <img src ={cell} alt = "this is the image" />
                      <div className={styles.userPick}>
                        <AiFillCheckCircle/>
                        <span>사용자 pick!</span>
                      </div>
                    </>

                  ):(
                    <img src ={cell} alt = "this is the image"/>
                  )}
                  
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.slice(1).map((product, index) => (
              <tr key={index}>
                <td>{product[0]}</td>
                {product.slice(currentProduct, currentProduct + displayCount).map((cell, index) => (
                  <td key={index} >
                    {cell}
                  </td>
                ))}

              </tr>
            ))}
             
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
  
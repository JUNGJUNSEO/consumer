import React, { useEffect } from "react";
import styles from "./ProductsComparisonTable.module.css";
  
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}
  
const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is product 2",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    {
      id: 3,
      name: "Product 3",
      price: 200,
      description: "This is product 2",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    {
      id: 4,
      name: "Product 4",
      price: 200,
      description: "This is product 2",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    {
      id: 5,
      name: "Product 5",
      price: 200,
      description: "This is product 2",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    {
      id: 6,
      name: "Product 6",
      price: 200,
      description: "This is product 2",
      image: "https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg"
    },
    // Add more products as needed
  ];
  
const ProductsComparisonTable: React.FC = () => {

    const [currentProduct, setCurrentProduct] = React.useState(0);

    const displayCount = 3
    const showPrevBtn = currentProduct > 0
    const showNextBtn = currentProduct < products.length - displayCount
    
    const handlePrev = () => {

        setCurrentProduct(prevProduct => prevProduct - 1);  

      };
      
    const handleNext = () => {

      const tableCells = document.querySelectorAll(".table-cell")

      setCurrentProduct(prevProduct => prevProduct + 1);

      tableCells.forEach(element => {
        element.classList.toggle(styles.animateNext)
      })

      setTimeout(() => {
        tableCells.forEach(element => {
          element.classList.toggle(styles.animateNext)
        })

      }, 500);
    }

    return (
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.imageColumn} />
              {products
                .slice(currentProduct, currentProduct + displayCount)
                .map((product) => (
                  <th 
                    className="table-cell" 
                    key={product.id}
                  >
                    {product.name}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.dataColumn}>Image</td>
              {products
                .slice(currentProduct, currentProduct + displayCount)
                .map((product) => (
                  <th 
                    className="table-cell" 
                    key={product.id}
                  >
                    <img src = {product.image} alt = "this is the image"/>
                  </th>
                ))
              }
            </tr>
           
            
          </tbody>
        </table>
        <div className={styles.nav}>
            <button 
              className={styles.prevBtn}
              style = {{visibility: showPrevBtn ? 'visible' : 'hidden'}} 
              onClick={handlePrev}
            >
              Prev
            </button>
            <button 
              className={styles.nextBtn}
              style = {{visibility: showNextBtn ? 'visible' : 'hidden'}} 
              onClick={handleNext}
            >
              Next
            </button>
        </div>
      </div>
    );
};
  
export default ProductsComparisonTable;
  
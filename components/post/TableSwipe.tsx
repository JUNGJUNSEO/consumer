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

  ];
  
const ProductsComparisonTable: React.FC = () => {

    
    return (
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.imageColumn} />
              {products
                .map((product, index) => {

                  return(
                  <th
                    className="table-cell" 
                    key={product.id}
                  >
                    {product.name}
                  </th>
                )})
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.dataColumn}>Image</td>
              {products
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

      </div>
    );
};
  
export default ProductsComparisonTable;
import React, { FC, useState } from 'react';
import styles from "./ProductSelect.module.css"
import { AiFillCheckCircle } from "react-icons/ai";

const products = [
  { id: 1, name: 'Product 1', image: 'https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg' },
  { id: 2, name: 'Product 2', image: 'https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg' },
  { id: 3, name: 'Product 3', image: 'https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg' },
  { id: 4, name: 'Product 4', image: 'https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg' },
];

interface ProductSelectProps{
  tableData: any[][]
  selectedProduct: number;
  onClickProduct: (id:number) => void

}


const ProductSelect: FC<ProductSelectProps> = ({selectedProduct, onClickProduct, tableData}) => {


    
    return (
      <div className={styles.block}>
        <div className={styles.products}>
          {products.map((product) => (
            <div
                className={`${styles.product} ${product.id === selectedProduct ? styles.selected : ''}`}
                key={product.id}
                onClick={() => onClickProduct(product.id)}
            >
              <div className={styles.image}>
                <img src={product.image} alt={product.name} />
              </div>
              <span>{product.name}</span>
              {product.id === selectedProduct && <AiFillCheckCircle className={styles.check}/>}
            </div>
          ))}
        </div>
      </div>

      );
}


export default ProductSelect
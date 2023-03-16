import React, { FC, useEffect, useState } from 'react';
import styles from "./ProductSelect.module.css"
import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image"

interface ProductSelectProps{
  tableData: any[][]
  selectedProduct: number;
  onClickProduct: (id:number) => void
}

const fileChange = async (file: File): Promise<string> => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return await new Promise((resolve, reject) => {
    reader.onload = () => {
      const imageUrl = reader.result?.toString();
      if (imageUrl) {
        resolve(imageUrl);
      } else {
        reject(new Error('Failed to read file.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file.'));
    };
  });
};

interface IProduct {
  id: number;
  image: string;
  name: string
}


const ProductSelect: FC<ProductSelectProps> = ({selectedProduct, onClickProduct, tableData}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await Promise.all(
        tableData[0].slice(1).map(async (file: File, index: number) => {
          const name = tableData[1][index + 1];
          const image = await fileChange(file);
          return { id: index + 1, image, name };
        })
      );
      setProducts(newProducts);
    };
    fetchData();
  }, [tableData]);
    
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
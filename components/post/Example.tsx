import React, { useState } from 'react';
import styles from './Example.module.css';

const Example = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          Toggle Visibility
        </button>
        <div
          className={isVisible ? styles.fadeIn : styles.fadeOut}
          style={{ display: isVisible ? 'block' : 'none',
           width: "100px",
            height: "100px",
        backgroundColor:'red' }}
        >
          This element will fade in and out without taking up space
        </div>
      </div>
    );
  };
  
  export default Example;
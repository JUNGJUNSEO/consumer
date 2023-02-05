import React, { useState } from "react";
import styles from "./HorizontalTableSlider.module.css";

interface Props {}

const HorizontalTableSlider: React.FC<Props> = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const cellWidth = 150;
  const maxPosition = (cellWidth * 3) - (cellWidth * 2);

  const handleSlideLeft = () => {
    setCurrentPosition(prevPosition => {
      const newPosition = prevPosition + cellWidth;
      return newPosition > maxPosition ? maxPosition : newPosition;
    });
  };

  const handleSlideRight = () => {
    setCurrentPosition(prevPosition => {
      const newPosition = prevPosition - cellWidth;
      return newPosition < 0 ? 0 : newPosition;
    });
  };

  return (
    <div className={styles.container}>
      <button className={styles.slideButton} onClick={handleSlideLeft}>
        Slide Left
      </button>
      <button className={styles.slideButton} onClick={handleSlideRight}>
        Slide Right
      </button>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 1, Cell 1</td>
            <td className={styles.cell}>Row 1, Cell 2</td>
            <td className={styles.cell}>Row 1, Cell 3</td>
          </tr>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 2, Cell 1</td>
            <td className={styles.cell}>Row 2, Cell 2</td>
            <td className={styles.cell}>Row 2, Cell 3</td>
          </tr>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 3, Cell 1</td>
            <td className={styles.cell}>Row 3, Cell 2</td>
            <td className={styles.cell}>Row 3, Cell 3</td>
          </tr>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 3, Cell 1</td>
            <td className={styles.cell}>Row 3, Cell 2</td>
            <td className={styles.cell}>Row 3, Cell 3</td>
          </tr>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 3, Cell 1</td>
            <td className={styles.cell}>Row 3, Cell 2</td>
            <td className={styles.cell}>Row 3, Cell 3</td>
          </tr>
          <tr className={styles.row} style={{ left: currentPosition }}>
            <td className={styles.cell}>Row 3, Cell 1</td>
            <td className={styles.cell}>Row 3, Cell 2</td>
            <td className={styles.cell}>Row 3, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HorizontalTableSlider;
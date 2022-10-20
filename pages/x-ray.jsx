import React from 'react';
import TeamName from '../Components/TeamName/TeamName';
import Close from '../Components/Close/Close';
import styles from '../styles/Xray.module.css';

const Xray = () => {
  return (
    <main className={styles.main}>
    <TeamName/>
  <h3 className={styles.heading}>X-RAY VISION</h3>
    <div className={styles.borderWrapper}>
      <span className={styles.topLeft}></span>
      <span className={styles.topRight}></span>
      <span className={styles.bottomLeft}></span>
      <span className={styles.bottomRight}></span>
      <span className={styles.topLine}></span>
      <span className={styles.bottomLine}></span>
      <span className={styles.text}>
        
      </span>
      <div className={styles.innerWrapper} ></div>
    </div>
    <Close/>
  </main>
  )
}

export default Xray
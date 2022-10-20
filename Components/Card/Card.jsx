import React from 'react'
import styles from './Card.module.css'

const Card = ({child}) => {
    console.log(child);
  return (
    <main className={styles.main}>
    <div className={styles.borderWrapper}>
      <span className={styles.topLeft}></span>
      <span className={styles.topRight}></span>
      <span className={styles.bottomLeft}></span>
      <span className={styles.bottomRight}></span>
      <span className={styles.topLine}></span>
      <span className={styles.bottomLine}></span>
      <div className={styles.container}>
        {child}
      </div>
    </div>
  </main>
  )
}

export default Card
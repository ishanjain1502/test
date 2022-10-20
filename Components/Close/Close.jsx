import React from 'react'
import styles from './Close.module.css'

const Close = () => {
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
        CLOSE
      </div>
    </div>
  </main>
  )
}

export default Close
import styles from "../styles/Congratulations.module.css";

const Congratulations = () => {
    return (
      <main className={styles.main}>
        <div className={styles.borderWrapper}>
          <span className={styles.topLeft}></span>
          <span className={styles.topRight}></span>
          <span className={styles.bottomLeft}></span>
          <span className={styles.bottomRight}></span>
          <span className={styles.topLine}></span>
          <span className={styles.bottomLine}></span>
          <span className={styles.text}>Team No - </span>
          <div className={styles.innerWrapper} ></div>
        </div>
      </main>
    );
  };
  
  export default Congratulations;
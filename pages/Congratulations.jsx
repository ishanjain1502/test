import styles from "../styles/Congratulations.module.css";
import Card from "../Components/Card/Card";

const Congratulations = () => {
    return (
      <main className={styles.main}>
      <h3 className={styles.heading}>Congratulations</h3>
        <div className={styles.borderWrapper}>
          <span className={styles.topLeft}></span>
          <span className={styles.topRight}></span>
          <span className={styles.bottomLeft}></span>
          <span className={styles.bottomRight}></span>
          <span className={styles.topLine}></span>
          <span className={styles.bottomLine}></span>
          <span className={styles.text}>

            <Card children={1} />

          </span>
          <div className={styles.innerWrapper} ></div>
        </div>
      </main>
    );
  };
  
  export default Congratulations;
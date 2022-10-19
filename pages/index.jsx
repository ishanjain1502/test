import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.borderWrapper}>
        <span className={styles.topLeft}></span>
        <span className={styles.topRight}></span>
        <span className={styles.bottomLeft}></span>
        <span className={styles.bottomRight}></span>
        <span className={styles.topLine}></span>
        <span className={styles.bottomLine}></span>
        <span className={styles.text}>Team No - 8</span>
      </div>
    </main>
  );
};

export default Home;

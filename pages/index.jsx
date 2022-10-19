import Image from "next/image";
import styles from "../styles/Home.module.css";
import user from "../public/user.jpg";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Voting</h1>
      <div className={styles.borderWrapper}>
        <span className={styles.topLeft}></span>
        <span className={styles.topRight}></span>
        <span className={styles.bottomLeft}></span>
        <span className={styles.bottomRight}></span>
        <span className={styles.topLine}></span>
        <span className={styles.bottomLine}></span>
        <div className={styles.container}>
          <BorderLayout>
            <div className={styles.imageWrapper}>
              <Image
                src={user}
                alt="User"
                width="100%"
                height="100%"
                className={styles.userImage}
              />
            </div>
            <span className={styles.userName}>John Doe</span>
          </BorderLayout>
        </div>
      </div>
    </main>
  );
};

export default Home;

const BorderLayout = ({ children }) => {
  return (
    <div className={styles.userWrapper}>
      <span className={styles.topLeft}></span>
      <span className={styles.topRight}></span>
      <span className={styles.bottomLeft}></span>
      <span className={styles.bottomRight}></span>
      <>{children}</>
    </div>
  );
};

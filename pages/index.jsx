import Image from "next/image";
import styles from "../styles/Home.module.css";
import user from "../public/user.jpg";
import ImageCard from "../Components/ImageCard/ImageCard"
import TeamName from "../Components/TeamName/TeamName";
import Close from "../Components/Close/Close";
import Card from "../Components/Card/Card";

const Home = () => {
  let team = 'team no-8'
  return (
    <main className={styles.main}>
      <TeamName prop={team}  />
      <h1 className={styles.heading}>Voting</h1>
      <div className={styles.borderWrapper}>
        <span className={styles.topLeft}></span>
        <span className={styles.topRight}></span>
        <span className={styles.bottomLeft}></span>
        <span className={styles.bottomRight}></span>
        <span className={styles.topLine}></span>
        <span className={styles.bottomLine}></span>
        <div className={styles.container}>
          <ImageCard>
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
          </ImageCard>
        </div>
      </div>

      <Close/>
    </main>
  );
};

export default Home;
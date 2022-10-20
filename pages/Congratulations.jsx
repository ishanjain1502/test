import styles from "../styles/Congratulations.module.css";
import Card from "../Components/Card/Card";
import TeamName from "../Components/TeamName/TeamName";
import Close from "../Components/Close/Close";

const Congratulations = () => {
    return (
      <main className={styles.main}>
        <TeamName/>
      <h3 className={styles.heading}>Congratulations</h3>
        <div className={styles.borderWrapper}>
          <span className={styles.topLeft}></span>
          <span className={styles.topRight}></span>
          <span className={styles.bottomLeft}></span>
          <span className={styles.bottomRight}></span>
          <span className={styles.topLine}></span>
          <span className={styles.bottomLine}></span>
          <span className={styles.text}>
            <h3>CORRECT <br/> ANSWER </h3>
            <br/>
            <div className={styles.answerText} >
              {}Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:flex-1 to only apply the flex-1 utility on hover.
            </div>
            <h3>TAKE CARDS</h3>
            <div className={styles.cardHolder} >
              <Card/><Card/><Card/><Card/>
            </div>
          </span>
          <div className={styles.innerWrapper} ></div>
        </div>
        <Close/>
      </main>
    );
  };
  
  export default Congratulations;
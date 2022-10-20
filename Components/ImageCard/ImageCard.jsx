import styles from './ImageCard.module.css'

const ImageCard = ({ children }) => {
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

  export default ImageCard
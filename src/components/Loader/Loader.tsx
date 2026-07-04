import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.spinner}></div>
        
        <h2 className={styles.title}>Loading tracks...</h2>
        <p className={styles.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
}
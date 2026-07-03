import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <p className={styles.title}>Campers of your dreams</p>

        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>

        <Link href="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
    </section>
  );
}
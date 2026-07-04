"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img
    src="/icons/TravelTrucks.svg"
    alt="TravelTrucks"
    width={136}
    height={16}
  />
        </Link>

        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={pathname === '/' ? styles.linkActive : styles.link}
          >
            Home
          </Link>

          <Link 
            href="/catalog" 
            className={pathname === '/catalog' ? styles.linkActive : styles.link}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
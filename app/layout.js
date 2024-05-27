import styles from './Layout.module.css';
import Link from 'next/link';
import '../app/globals.css';
import { GoBook } from 'react-icons/go';
import { GoHome } from "react-icons/go";

export const metadata = {
  title: 'Dev Dialogue',
};

export default function Layout({ children }) {
  return (
    <html>
      <body className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <h1 className={styles.brand}><GoBook/></h1>
            <ul className={styles.links}>
              <li>
                <Link href="/" passHref>
                  <GoHome className={styles.icon} />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} My Blog
        </footer>
      </body>
    </html>
  );
}

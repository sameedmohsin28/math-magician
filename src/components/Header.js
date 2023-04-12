import styles from './Header.module.css';

const Header = () => (
  <>
    <header className={styles.header}>
      <h1 className={styles.heading}>Math Magicians</h1>
      <nav>
        <a href="/" className={styles.navLinks}>Home</a>
        <a href="/calculator" className={styles.navLinks}>Calculator</a>
        <a href="/quote" className={styles.navLinks}>Quote</a>
      </nav>
    </header>
  </>
);

export default Header;

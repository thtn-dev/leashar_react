import styles from './Header.module.scss';
function Header() {
  return (
    <header className={`${styles.wrapper}`}>
      <p>Header</p>
    </header>
  );
}

export default Header;

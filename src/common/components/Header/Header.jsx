import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <h1>Header</h1>
    </header>
  );
}

export default Header;

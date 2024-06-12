import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
  return (
    <header className={clsx(styles.wrapper)}>
      <p>Header</p>
    </header>
  );
}

export default Header;

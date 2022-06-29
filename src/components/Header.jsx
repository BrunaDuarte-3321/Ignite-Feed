import igniteLogo from '../assets/igniteLogo.svg';
import styles from '../styles/Header.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      Ignite Feed
    </header>
  );
}

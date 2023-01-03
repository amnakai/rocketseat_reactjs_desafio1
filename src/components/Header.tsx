import styles from './Header.module.css';
import logo from '../assets/rocket.png';

export function Header() {
  return (
    <header className={styles.header}>
       <div className={styles.logoContainer}>
          <img src={logo} alt="Logotipo" />
          <strong>
             <span className={styles.metade_esquerda}>to</span>
             <span className={styles.metade_direita}>do</span>
          </strong>   
       </div>
    </header>
  );
}
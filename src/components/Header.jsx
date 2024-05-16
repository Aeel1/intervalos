import styles from './Header.module.css'
import reactLogo from '../assets/react.svg';

export function Header() {
  return (
      <header className={styles.header}>
      
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1> Intervalos </h1>
          <span>Complete os intervalos da Escala Maior do C (Dó)</span>
          
      </header>
  );
}
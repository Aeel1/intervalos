import styles from './Header.module.css'
import reactLogo from '../assets/react.svg';

export function Header() {
  return (
      <header className={styles.header}>
      
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1> Intervalos </h1>
          <h2>Complete os intervalos de todas as escalas.</h2>
          <span></span>
          <p> 
            Utilize sustenidos (representados pelo símbolo #) e bemóis (representados pelo símbolo b) conforme necessário. 
            <br/>
            Exemplo: Para a nota C, os exemplos de sustenidos e bemóis seriam C# e Cb, respectivamente.
          </p>   
      </header>
  );
}
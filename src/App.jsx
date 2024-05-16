import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header'
import './global.css';
import { Form } from './components/Form';


function App() {
  const interval = [
    {
      id: 1,
      
    }
  ]

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        < Form />
      </div>
      <footer>
        <span>Desenvolvido por Rafael Rodrigues @</span>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header'
import './global.css';
import { Form } from './components/Form';
import { FormG } from './components/FormG';
import { FormD } from './components/FormD';
import { FormA } from './components/FormA';
import { FormE } from './components/FormE';
import { FormB } from './components/FormB';
import { FormFsus } from './components/FormFsus';
import { FormCsus } from './components/FormCsus';
import { FormF } from './components/FormF';
import { FormBbemol } from './components/FormBbemol';
import { FormEbemol } from './components/FormEbemol';
import { FormAbemol } from './components/FormAbemol';
import { FormDbemol } from './components/FormDbemol';
import { FormGbemol } from './components/FormGbemol';
import { FormCbemol } from './components/FormCbemol';




function App() {
  const [currentForm, setCurrentForm] = useState('form');
const [activeButton, setActiveButton] = useState('form');

const handleButtonClick = (formName) => {
  setCurrentForm(formName);
  setActiveButton(formName);
};

  const forms = {
    form: <Form />,
    formG: <FormG />,
    formD: <FormD />,
    formA: <FormA />,
    formE: <FormE />,
    formB: <FormB />,
    formFsus: <FormFsus />,
    formCsus: <FormCsus />,
    formF: <FormF />,
    formBbemol: <FormBbemol />,
    formEbemol: <FormEbemol />,
    formAbemol: <FormAbemol />,
    formDbemol: <FormDbemol />,
    formGbemol: <FormGbemol />,
    formCbemol: <FormCbemol />
    };

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <div className={styles.notes}>
        <button
          className={`${styles.buttonNote} ${activeButton === 'form' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('form')}
        >
          C<br/>(Dó)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formG' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formG')}
        >
          G<br/>(Sol)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formD' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formD')}
        >
          D<br/>(Ré)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formA' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formA')}
        >
          A<br/>(Lá)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formE' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formE')}
        >
          E<br/>(Mi)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formB' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formB')}
        >
          B<br/>(Si)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formFsus' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formFsus')}
        >
          F#<br/>(Fá#)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formCsus' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formCsus')}
        >
          C#<br/>(Dó#)
        </button>
        </div>
        <div className={styles.notes}>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formF' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formF')}
        >
          F<br/>(Fá)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formBbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formBbemol')}
        >
          B♭<br/>(Si♭)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formEbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formEbemol')}
        >
          E♭<br/>(Mi♭)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formAbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formAbemol')}
        >
          A♭<br/>(Lá♭)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formDbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formDbemol')}
        >
          D♭<br/>(Ré♭)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formGbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formGbemol')}
        >
          G♭<br/>(Sol♭)
        </button>
        <button
          className={`${styles.buttonNote} ${activeButton === 'formCbemol' ? styles.activeButton : ''}`}
          onClick={() => handleButtonClick('formCbemol')}
        >
          C♭<br/>(Dó♭)
        </button>

        </div>
        {forms[currentForm] || <Form />}
      </div>
      <footer>
        <span>Desenvolvido por Rafael Rodrigues <a href="https://github.com/Aeel1">@AeeL</a></span>
      </footer>
    </div>
  )
}

export default App

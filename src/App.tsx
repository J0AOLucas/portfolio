import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.home}>
        <div className={styles.top_page}>
          <div className={styles.title}>
            <h1 className={styles.title_text}>Hi,<br />
                My name is <br />
              <span className={styles.name}>João Lucas</span><br />
              I build the future
            </h1>
          </div>
          <img src="./src/assets/images/jl_image.JPG" alt="Joao Lucas" />
        </div>
      </div>
    </div>
  );
}

export default App;

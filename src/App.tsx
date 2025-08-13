import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

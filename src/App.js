import React from 'react';
import Header from './Header/Header';
import Dadata from './Dadata/Dadata';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Dadata title='Организация или ИП'/>
    </div>
  );
}

export default App;

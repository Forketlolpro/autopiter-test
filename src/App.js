import React from 'react';
import Header from './Header/Header';
import Layout from './Layout/Layout';
import Main from './Main/Main';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Layout>
        <Main/>
      </Layout>
      {/* <Dadata title='Организация или ИП'/> */}
    </div>
  );
}

export default App;

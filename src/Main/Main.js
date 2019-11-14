import React from 'react';
import Dadata from '../Dadata/Dadata';
import styles from './Main.module.scss'

const main = (props) => {
    return (
    <div className={styles.Main}>
        <Dadata title='Организация или ИП'/>
    </div>)
}

export default main;
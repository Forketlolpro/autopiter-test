import React from 'react';
import styles from './Header.module.scss'
import logo from '../logo.png';

const header = (props) => {
    return (
    <header className={styles.Header}>
        <img className={styles.Logo} alt='Logo' src={logo}/>
    </header>
    )
}

export default header;
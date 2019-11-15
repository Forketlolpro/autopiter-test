import React from 'react';
import styles from './Button.module.scss'

const button = (props) => {
    return (<button disabled={props.actionType==='saved' ? true : false} className={`${styles.Button} ${props.actionType==='save' ? styles.Save : styles.Saved}`} onClick={props.onClickHandler}>{props.children}</button>)
}

export default button;
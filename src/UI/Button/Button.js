import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const button = (props) => {
    return (<button disabled={props.actionType==='saved' ? true : false} className={`${styles.Button} ${props.actionType==='save' ? styles.Save : styles.Saved}`} onClick={props.onClickHandler}>{props.children}</button>)
}

button.propTypes = {
    actionType: PropTypes.string,
    onClickHandler: PropTypes.func.isRequired
}

export default button;
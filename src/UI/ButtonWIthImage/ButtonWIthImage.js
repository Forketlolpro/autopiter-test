import React from 'react';
import styles from './ButtonWithImage.module.scss';
import trash from '../../Trash.png';

const buttonWithImage = (props) => {
    return (<button className={styles.Button} style={{backgroundImage: `url(${trash})`}} onClick={props.clickHandler}/>)
}

export default buttonWithImage;
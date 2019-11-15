import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonWithImage.module.scss';
import trash from '../../Trash.png';

const buttonWithImage = (props) => {
    return (<button className={styles.Button} style={{backgroundImage: `url(${trash})`}} onClick={props.clickHandler}/>)
}

buttonWithImage.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default buttonWithImage;
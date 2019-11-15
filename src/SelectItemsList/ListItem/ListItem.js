import React from 'react';
import ButtonWithImage from '../../UI/ButtonWIthImage/ButtonWIthImage';
import styles from './ListItem.module.scss';

const listItem = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.Topline}>
                <h2>{props.data.value}</h2>
                <ButtonWithImage clickHandler={props.clickHandler}/>
            </div>
        </div>
    )
}

export default listItem;
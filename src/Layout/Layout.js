import React from 'react';
import styles from './Layout.module.scss';

const layout = (props) => {
    return (<div className={styles.Layout}>{props.children}</div>);
}

export default layout;
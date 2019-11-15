import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

const layout = (props) => {
    return (<div className={styles.Layout}>{props.children}</div>);
}

layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default layout;
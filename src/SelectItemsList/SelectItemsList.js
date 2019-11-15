import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectItemsList.module.scss';
import ListItem from './ListItem/ListItem'

const selectItemList = (props) => {
    const list = props.list.map((item, i) => {
        return <ListItem clickHandler={props.clickHandler(i)} key={item.value} data={item}/>
    })
    return (<div className={styles.Wrapper}>{list}</div>)
}

selectItemList.propsType = {
    list: PropTypes.arrayOf(PropTypes.shape({
        data: PropTypes.object,
        value: PropTypes.string,
        unrestricted_value: PropTypes.string
    })),
    clickHandler: PropTypes.func.isRequired
}

export default selectItemList;
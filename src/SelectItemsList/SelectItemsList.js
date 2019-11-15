import React from 'react';
import styles from './SelectItemsList.module.scss';
import ListItem from './ListItem/ListItem'

const selectItemList = (props) => {
    const list = props.list.map((item, i) => {
        return <ListItem clickHandler={props.clickHandler(i)} key={item.value} data={item}/>
    })
    return (<div className={styles.Wrapper}>{list}</div>)
}

export default selectItemList;
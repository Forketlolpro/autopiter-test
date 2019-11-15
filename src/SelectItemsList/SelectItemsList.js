import React from 'react';
import ListItem from './ListItem/ListItem'

const selectItemList = (props) => {
    const list = props.list.map((item, i) => {
        return <ListItem clickHandler={props.clickHandler(i)} key={item.value} data={item}/>
    })
    return (list)
}

export default selectItemList;
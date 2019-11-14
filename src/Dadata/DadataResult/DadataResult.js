import React from 'react';
import styles from './DadataResult.module.scss'

const dadataResult = (props) => {
    let preparedDataList = null;
    if (props.data) {
        preparedDataList = props.data.map((elem, i) => {
            return (<div onClick={()=>props.onItemClick(i)} className={styles.Elem} key={elem.data.inn}>
            <div className={styles.Header}>{elem.value}</div>
            <span className={styles.Inn}>{elem.data.inn}</span>
            <span className={styles.City}>{elem.data.address.data.city_with_type}</span>
        </div>)
        })
    }

return (<div className={styles.Wrapper}>{preparedDataList}</div>)
}

export default dadataResult;
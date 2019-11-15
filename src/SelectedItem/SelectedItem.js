import React from 'react';
import Button from '../Button/Button';
import styles from './SelectedItem.module.scss';
import plus from '../plus.png';

const selectedItem = (props) => {
    if (!props.item) {
        return (<div className={styles.Emptyitem}>
            <img src={plus} alt='Выберете организацию'/>
            <div>Для добавления новой организации введите ее название, ИНН или адрес.</div>
        </div>)
    }
    return (
    <div className={styles.Item}>
        <h2>{props.item.value}</h2>
        <div className={styles.Itemcontent}>
            <div className={styles.Addressdata}>
                <strong>Юридический адрес</strong>
                <span>{props.item.data.address.value}</span>
                <strong>Гениральный директор</strong>
                <span>{props.item.data.management.name}</span>
            </div>
            <div className={styles.Organizationdata}>
                <div>
                    <strong>ИНН</strong><span>{props.item.data.inn}</span>
                </div>
                <div>
                    <strong>КПП</strong><span>{props.item.data.kpp}</span>
                </div>
                <div>
                    <strong>ОГРН</strong><span>{props.item.data.ogrn}</span>
                </div>
            </div>
        </div>
        <Button actionType={props.buttonType} onClickHandler={props.onClickHandler(props.item)}>Сохранить</Button>
    </div>
    )
}

export default selectedItem;
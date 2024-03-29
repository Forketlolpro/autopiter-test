import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonWithImage from '../../UI/ButtonWIthImage/ButtonWIthImage';
import styles from './ListItem.module.scss';

class ListItem extends Component {
    state ={
        open: false
    }

    clickOpenContentButton = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    }

    render () {
        return (
            <div className={styles.Item}>
            <div className={styles.Topline}>
                <h2>{this.props.data.value}</h2>
                <ButtonWithImage clickHandler={this.props.clickHandler}/>
            </div>
            <div className={`${styles.Content} ${this.state.open ? styles.Opencontent : ''}`}>
                <div>
                    <span className={styles.Key}>ИНН</span>
                    <span className={styles.Value}>{this.props.data.data.inn}</span>
                </div>
                <div>
                    <span className={styles.Key}>КПП</span>
                    <span className={styles.Value}>{this.props.data.data.kpp}</span>
                </div>
                <div>
                    <span className={styles.Key}>ОГРН</span>
                    <span className={styles.Value}>{this.props.data.data.ogrn}</span>
                </div>
                <div>
                    <span className={styles.Key}>Юридический адрес</span>
                    <span className={styles.Value}>{this.props.data.data.address.value}</span>
                </div>
                <div>
                    <span className={styles.Key}>Генеральный директор</span>
                    <span className={styles.Value}>{this.props.data.data.management ? this.props.data.data.management.name : 'Отсутствует'}</span>
                </div>
            </div>
            <button className={`${styles.Morebutton} ${this.state.open ? styles.Morebuttonextend : ''}`} onClick={this.clickOpenContentButton}>
                подробнее
            </button>
        </div> 
        )
    }
}

ListItem.propsTypes = {
    clickHandler: PropTypes.func.isRequired,
    data: PropTypes.shape({
        data: PropTypes.object,
        value: PropTypes.string,
        unrestricted_value: PropTypes.string
    })

}

export default ListItem;
import React, {Component} from 'react';
import Dadata from '../Dadata/Dadata';
import {connect} from 'react-redux';
import * as actions from '../Store/actions';
import SelectedItem from '../SelectedItem/SelectedItem';
import styles from './Main.module.scss'

class Main extends Component{
    state= {
        activeTab: 'new',
        buttonType: 'save'
    }

    onTabClick = (e) => {
        this.setState({activeTab: e.currentTarget.dataset.lable})
    }

    render () {
        return (
            <main className={styles.Main}>
                <h1>Мои организации</h1>
                <div className={styles.Tabs}>
                    <div className={styles.Tabnav}>
                        <div data-lable='new' className={`${styles.Navitem} ${this.state.activeTab==='new' ? styles.Active : ''}`} onClick={this.onTabClick}>Новая организация</div>
                        <div data-lable='list' className={`${styles.Navitem} ${this.state.activeTab==='list' ? styles.Active : ''}`} onClick={this.onTabClick}>Сохраненные организации</div>
                    </div>
                    <div className={styles.Tab}>
                        {this.state.activeTab==='new' ? 
                        (<>
                            <Dadata onSuggestionSelect={this.props.onDadataSelect} title='Организация или ИП'/>
                            <SelectedItem onClickHandler={this.props.onSaveButtonClick} item={this.props.selectedItem} buttonType={this.state.buttonType}/>
                        </>) : 
                        'Сохраненные органзации'}
                    </div>
                </div>
            </main>)
    }
}

const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDadataSelect: (item) => dispatch(actions.dadataSelectItem(item)),
        onSaveButtonClick: (item) => () => {
            dispatch(actions.saveOrganization(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
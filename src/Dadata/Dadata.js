import React, {Component} from 'react';
import DadataResult from './DadataResult/DadataResult';
import axios from '../axios-instance';
import styles from './Dadata.module.scss'

class Dadata extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            suggestions: null,
            closed: false
        }
        document.addEventListener('mousedown', this.checkOuterClick, false)
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.checkOuterClick, false)
    }

    checkOuterClick = (e) => {
        if(!this.componentNode.contains(e.target)) {
            this.setState({closed: true})
        }
    }

    async fetchData(value) {
        const res = await axios.post('/', { query: value });
        this.setState({ suggestions: res.data.suggestions });
    }

    onInputHandler = (e) => {
        this.setState({
            inputValue: e.target.value,
            closed: false
        })
        this.fetchData(e.target.value)
    }

    onSuggestItemClick = (id) => {
        this.setState((state)=>{
            return {
                inputValue: state.suggestions[id].value,
                closed: true
            }
        })

        this.props.onSuggestionSelect(this.state.suggestions[id]);
    }

    render () {
        return (<div className={styles.Dadata} ref={componentNode => this.componentNode = componentNode}>
                    <p className={styles.Title}>{this.props.title}</p>
                    <input name='dadataInput'
                        autocomplete="off"
                        value={this.state.inputValue}
                        className={styles.Input}
                        type='text'
                        placeholder='Введите название, ИНН или адрес организации'
                        onChange={this.onInputHandler}
                    />
                    { this.state.suggestions && this.state.suggestions.length && !this.state.closed ? <DadataResult data = {this.state.suggestions} onItemClick={this.onSuggestItemClick}/> : null}
                </div>)
    }
}

export default Dadata;
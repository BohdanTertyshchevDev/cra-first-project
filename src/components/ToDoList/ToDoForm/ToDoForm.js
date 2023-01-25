import React, { Component } from 'react';
// import './style.css';
import styles from './ToDoFormStyle.module.css';
import cx from 'classnames';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           todo: '' ,
           isInputValid: true
        }
    }

    changeHendler = ({target: {value, name}}) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                [name]: value,
                isInputValid: true
            })
        }
    }

    submitHendler = (event) =>{
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }
    
    render() {
        const {todo, isInputValid} = this.state;

        const cNameString = cx({
            [styles.input]: true,
            [styles['invalid-input']]:!isInputValid
        })
        // const className = styles['input'] + ' ' + (isInputValid ? '' : styles['invalid-input']);
        return (
            <form onSubmit={this.submitHendler} className={styles.container}>
                <input 
                type="text" 
                name="todo" 
                value={todo}
                onChange={this.changeHendler}
                className={cNameString}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ToDoForm;



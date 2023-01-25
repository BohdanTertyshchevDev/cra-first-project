import React, { Component } from 'react';
// import './style.css';
import styles from './ToDoFormStyle.module.css';

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

        cx({
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
                // className={className}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ToDoForm;


function cx (objectClassNames) {
    const cort = Object.entries(objectClassNames);
    const filtered = cort.filter((className, condition) => condition);
    const arr = filtered.map((className, condition) => className);
    arr.join(' ');
}

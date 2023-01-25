import React, { Component } from 'react';
// import './style.css';
import styles from './ToDoFormStyle.module.css';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           todo: '' 
        }
    }

    changeHendler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHendler = (event) =>{
        event.preventDefault();
        this.props.sendData(this.state.todo);
    }
    
    render() {
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHendler} className={styles.container}>
                <input 
                type="text" 
                name="todo" 
                value={todo}
                onChange={this.changeHendler}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default ToDoForm;

import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";
import styles from "./style.module.css";


class ToDOList extends React.Component {
    constructor(props) {
        super(props);

        const todoList = [
            {
                id: 1,
                text: "go to the gym"
            },
            {
                id: 2,
                text: "shoping"
            },
            {
                id: 3,
                text: "date"
            },
            {
                id: 4,
                text: "rest after work"
            }
        ]

        this.state = {
            todoList
        };
        
    }


    removeTask(taskIDtoRemove) {
        const {todoList} = this.state;
        const filteredArray = todoList.filter(task => task.id !== taskIDtoRemove);
        this.setState({
            todoList: filteredArray
        })
    }


    renderLi() {
        const {todoList} = this.state;
        return todoList.map((task) => 
        <ToDoItem
        key={task.id}
        text={task.text}
        delCallback={() => {this.removeTask(task.id)}}
        />)

        // return todoList.map((task) => <li key={task.id}>
        //     {task.text}
        //     <button onClick={() => {this.removeTask(task.id)}}>X</button>
        //     </li>)
    }

    formHendler = (text) => {
        const {todoList} = this.state;
        const newObj = {
            id: Date.now(),
            text
        }
        const newArr = [...todoList, newObj];

        this.setState({
            todoList: newArr
        })
    }

    render() {
        return(
            <>
            <ToDoForm sendData={this.formHendler}/>
            <ul className={styles.container}> 
                {this.renderLi()}
            </ul>
            </>
        )   
    }
}

export default ToDOList;
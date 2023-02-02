import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm/ToDoForm";
import styles from './style.module.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        const todoList = [
            {
                id: 1,
                text: 'go to party'
            },
            {
                id: 2, 
                text: 'meet friends'
            },
            {
                id: 3, 
                text: 'have a walk'
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
        />
        )

        // return todoList.map((task) => <li key={task.id}>
        //     {task.text}
        //     <button onClick={() => {this.removeTask(task.id)}}>X</button>
        //     </li>)
    }

    formHandler = (text) => {
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
            <ToDoForm sendData={this.formHandler} />
            <ul className={styles.container}>
                {this.renderLi()}
            </ul>
            </>
        )
    }
}

export default ToDoList;


/*

Будемо робити TODO.

Задача 1

Створити компоненту TodoList.
Ця компонента має в стейті масив об'єктів, у якому будуть знаходиитсь текст задачі та її ID.
[
    {id: 1, text: "go to party"},
    {id: 2, text: "meet friends"},
    {id: 3, text: "have a walk"}
]

Компонента рендерить список <li>, всередині якого один рядок з масиву.
<ul>
    <li> go to party </li>
    <li> meet friends </li>
    <li> have a walk </li>
</ul>

Задача 2
В кожній li зробити кнопку, за натиснення на яку цей елемент списку має зникнути.
(тобто оновити стейт таким чином, щоб в масиві з об'єктами або рядками не було того, який пов'язаний з кнопкою)

*/

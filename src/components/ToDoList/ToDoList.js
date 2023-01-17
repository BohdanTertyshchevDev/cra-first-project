import React from "react";


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

    renderLi() {
        const {todoList} = this.state;
        return todoList.map((task) => <li key={task.id}>{task.text}</li>)
    }

    render() {
        return(
            <ul>
                {this.renderLi()}
            </ul>
        )   
    }
}

export default ToDOList;
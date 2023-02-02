function ToDoItem(props) {

    const clickHandler = () => {
        const {delCallback, key} = props;
        delCallback(key);
    }

    const {key} = props;
    return (
        <li key={key}>
            {props.text}
            <button onClick={() => {clickHandler()}}>X</button>
        </li>
    )
}

export default ToDoItem;

/*
function компонента для Айтема (лі з текстом + кнопкою)
За натисненням на кнопку лі зникає з екрану

<li key={task.id}>
            {task.text}
            <button onClick={() => {this.removeTask(task.id)}}>X</button>
            </li>

Декомпозиція.   

1. Зробити функціональну компоненту
2. Винести в цю компоненту <li>
3. Переписати return таким чином, щоб вивести на екран все те, що ми отримуємо через props
4. Зробити колбек в батьківського елемента, який має отримати id на вхід та видалити за стейта елемент з таким id
5. В компоненті ToDoItem зробити виклик колбека і передати йому id (натисненням на кнопку)
*/

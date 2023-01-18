function ToDoItem(props) {

    const clickHendler = () => {
        const {delCallback, key} = props;
        delCallback(key);
    }


    const {key} = props;
    return (
        <li key={key}>
            {props.text}
            <button onClick={() => {clickHendler()}}>X</button>
        </li>
    )
}

export default ToDoItem;
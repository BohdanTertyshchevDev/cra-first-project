import React, {useState, useEffect} from 'react';

const MouseTracker = (props) => {
    const [coorditanes, setCoordinates] = useState({
        x: 0,
        y: 0,
        counter: 0
    })

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', tracker);
        return () => {
            window.removeEventListener('mousemove', tracker);
        }
    }, []);

    const tracker = (event) => {
        setCoordinates({
            x: event.clientX,
            y: event.clientY
        })
    }



    const clickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <div onClick={clickHandler}>
            <p>X: {coorditanes.x}</p>
            <p>Y: {coorditanes.y}</p>
            <p>counter: {counter}</p>
        </div>
    );
}

export default MouseTracker;

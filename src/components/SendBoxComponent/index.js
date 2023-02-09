import React, {useState, useCallback} from 'react';

const Clicker = () => {
    const [click, setClick] = useState(0);

    // const clickHendler = () => {
    //     setClick(click + 1);
    // }

    const handler = useCallback(() => {
        setClick(click => click + 1);
    }, []);

    return (
        <>
        <h1>{click}</h1>
        <button onClick={handler}>Click</button>
        </>
    );
}

export default Clicker;

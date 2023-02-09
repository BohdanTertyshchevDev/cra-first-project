import React, {useState, useCallback, useMemo} from 'react';

const Clicker = () => {
    const [click, setClick] = useState(0);
    const [value, setValue] = useState('');
    

    const handler = useCallback(() => {
        setClick(click => click + 1);
    }, []);

    const changeHandler = ({target: {value}}) => {
        setValue(value);
    }

    const logComputedValue = () => {
        return value ** 200;
    }

    const memoizedValue = useMemo(() => logComputedValue(), [value])
    console.log(memoizedValue);

    return (
        <>
        <h1>{click}</h1>
        <button onClick={handler}>Click</button>
        <input type="number" value={value} onChange={changeHandler}/>
        <button onClick={logComputedValue}>Click to log value!</button>
        </>
    );
}

export default Clicker;

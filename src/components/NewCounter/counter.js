import React, {useState} from 'react';




const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCounter(counter+step);
    }

    const changeHendler= ({target: {value}}) => {
        setStep(Number(value));
    }
    
    return (
        <div>
           {counter}
           <input name="step" value={step} onChange={changeHendler}/>
           <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;

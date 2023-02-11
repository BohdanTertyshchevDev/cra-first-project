import React, { useReducer, useState } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                click: state.click + 1
            }
        }
        default: return state;
    }
}

const initialState = {
    click: 0
}

function SignOutForm (props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clicker = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        })
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
  

    return (
       <>
       {state.click}
       <button onClick={clicker}>Click to increment</button>
       </>
    )
}

export default SignOutForm;
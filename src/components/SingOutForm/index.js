import React, { useReducer } from "react";
import { reducer } from "../../reducers";
import CONSTANTS from "../../constants";
const {ACTIONS} = CONSTANTS;



const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: ''
}

function SignOutForm (props) {

    const [state, dispatch] = useReducer(reducer, initialState);

   const changeHandler = ({target: {value, name}}) => {
    dispatch({
        type: ACTIONS.INPUT_CHANGE,
        name,
        value
    })
   } 

    const {firstName, lastName, email, password, address} = state;
  

    return (
        <form>
            <input type='text' name="firstName" value={firstName} onChange={changeHandler}/>
            <input type='text' name="lastName" value={lastName} onChange={changeHandler}/>
            <input type='text' name="email" value={email} onChange={changeHandler}/>
            <input type='text' name="password" value={password} onChange={changeHandler}/>
            <input type='text' name="address" value={address}  onChange={changeHandler}/>
        </form>
    )
}

export default SignOutForm;
import React from 'react';
import { MyContext } from '../../../../../contexts/userContext';

const InnerChild = () => {
    return (
        <MyContext.Consumer>
            {
                ({user, logOut}) =>{
                    return (
                        <>
                        <div style={{border: '3px solid black', padding: '25px'}}>
                        <p>InnerChild</p>
                        <p>{JSON.stringify(user)}</p>
                        <button onClick={logOut}>Logout</button>
                        </div>
                        </>
                    )
                }
            }
        </MyContext.Consumer>
    );
}

export default InnerChild;

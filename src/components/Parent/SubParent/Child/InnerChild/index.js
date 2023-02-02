import React from 'react';
import { UserContext } from '../../../../../contexts/userContext';

const InnerChild = () => {
    return (
        <UserContext.Consumer>
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
        </UserContext.Consumer>
    );
}

export default InnerChild;

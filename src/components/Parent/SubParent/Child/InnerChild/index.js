import React from 'react';
import { MyContext } from '../../../../../contexts/userContext';

const InnerChild = (props) => {
    const {user: {firstName, lastName} = {}} = props;
    return (
        <MyContext.Consumer>
            {
                (value) =>{
                    return (
                        <p>{JSON.stringify(value)}</p>
                    )
                }
            }
        </MyContext.Consumer>
        // <div>
        //     <p>{firstName} {lastName}</p>
        // </div>
    );
}

export default InnerChild;

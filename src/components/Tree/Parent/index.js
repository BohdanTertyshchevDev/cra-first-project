import React from 'react';
import SubparentWithTheme from './Subparent';

const Parent = (props) => {
    return (
        <div>
            <div style={{border: '3px solid black', padding: '25px'}}>
            Parent
            <SubparentWithTheme />
        </div>
        </div>
    );
}

export default Parent;

import React from 'react';
import Innerchild from './Innerchild';

const Child = (props) => {
    return (
        <div>
            <div style={{border: '3px solid black', padding: '25px'}}>
            Child
            <Innerchild />
        </div>
        </div>
    );
}

export default Child;

import React from 'react';
import Child from './Child';
import { ThemaContext } from '../../../contexts/themaContext';
import CONSTANTS from '../../../constants';
const {THEMES} = CONSTANTS;

const SubParent = (props) => {
    return (
       <ThemaContext.Consumer>
        {([theme, setTheme]) => {
            const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            return (
                <div>
                    <div style={{border: '3px solid black', padding: '25px'}}>
                        SubParent
                        <button onClick={() => setTheme(nextTheme)}>Click to change theme!</button>
                    </div>
                </div>
            )
        }}
       </ThemaContext.Consumer> 
    );
}

export default SubParent;

import React from 'react';
import Child from './Child';
import { withTheme, withUser } from '../../../../HOC';
import CONSTANTS from '../../../../constants';
import { UserContext } from '../../../../contexts/userContext';
const {THEMES} = CONSTANTS

const Subparent = (props) => {
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    return (
                            <div>
                                <div style={{border: '3px solid black', padding: '25px'}}>
                                    Subparent
                                    <p>{props.user.firstName}</p>
                                    <button onClick={() => props.setTheme(nextTheme)}>Click to change theme!</button>
                                </div>
                                <Child />
                            </div>
    );
}

// const SubparentWithTheme = withTheme(Subparent);
//  const SubparentWithThemeWithUser = withUser(SubparentWithTheme);

// export default SubparentWithThemeWithUser;

export default withUser(withTheme(Subparent));

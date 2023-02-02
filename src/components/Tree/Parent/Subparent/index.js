import React from 'react';
import Child from './Child';
import { withTheme } from '../../../../HOC';
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

const SubparentWithTheme = (props) => {
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                const SubparentThemed = withTheme(Subparent);
                return (
                    <SubparentThemed user={user} logOut={logOut} />
                )
            }}
        </UserContext.Consumer>
    )
}

export default SubparentWithTheme;

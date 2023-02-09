import React, {useContext} from 'react';
import Child from './Child';
import CONSTANTS from '../../../../constants';
import { ThemeContext} from '../../../../contexts/themeContext';
import { UserContext } from '../../../../contexts/userContext';
const {THEMES} = CONSTANTS

const Subparent = () => {
    const {user} = useContext(UserContext);
    const [theme, setTheme] =  useContext(ThemeContext);
    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    return (
                            <div>
                                <div style={{border: '3px solid black', padding: '25px'}}>
                                    Subparent
                                    <p>{user.firstName}</p>
                                    <button onClick={() => setTheme(nextTheme)}>Click to change theme!</button>
                                </div>
                                <Child />
                            </div>
    );
}

export default Subparent;

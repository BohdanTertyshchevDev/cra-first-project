import React from 'react';
import Parent from '../Parent';
import { ThemaContext } from '../../contexts/themaContext';
import style from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

const Tree = (props) => {
    return (

        <ThemaContext.Consumer>
            {
                ([theme, setTheme]) => {

                    const clNames = cx(style.container, {
                        [style.lightTheme]: theme === THEMES.LIGHT,
                        [style.darkTheme]: theme === THEMES.DARK
                    });
                    return(
                        <div className={clNames}>
                             Tree
                            <Parent />
                        </div>
                    )
                }
            }
        </ThemaContext.Consumer>
        
    );
}

export default Tree;

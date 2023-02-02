import React from 'react';
import Parent from './Parent';
import { withTheme } from '../../HOC';
import style from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from "../../constants";
const {THEMES} = CONSTANTS;

const Tree = (props) => {
                    const clNames = cx(style.container, {
                        [style.lightTheme]: props.theme === THEMES.LIGHT,
                        [style.darkTheme]: props.theme === THEMES.DARK
                    });

                    return (
                        <div className={clNames}>
                            Tree
                            <Parent />
                        </div>
                    )
                
                }




const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;
////////////

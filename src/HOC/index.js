import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import  {UserContext} from "../contexts/userContext";

export const withTheme = (WrappedComponent) => (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {
                return <WrappedComponent 
                theme={theme}
                setTheme={setTheme}
                {...props}
                />
            }}
        </ThemeContext.Consumer>
    )
}

/*
React.createElement(Component, {theme, setTheme, ...props}, ...children)
*/

export const withUser = (WrappedComponent) => (props) => {
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                return <WrappedComponent
                user={user}
                logOut={logOut}
                {...props}
                />
            }}
        </UserContext.Consumer>
    )
}
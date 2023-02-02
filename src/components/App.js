import React from "react";
import TreeWithTheme from "./Tree";
import {UserContext} from '../contexts/userContext'
import { ThemeContext } from "../contexts/themeContext";
import CONSTANTS from "../constants";
const {THEMES} = CONSTANTS;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com",
        avatar: "https://robohash.org/John%20Doe",
      },
      theme: THEMES.LIGHT
    };
  }

  setTheme = theme => {
    this.setState({
      theme
    })
  }

  logOut = () => {
    this.setState({
      user: {}
    })
  }

  render() {
    const {theme} = this.state;
    return (
      <>
        App
       <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={
          {user: this.state.user,
          logOut: this.logOut
          }}>
          <TreeWithTheme />
        </UserContext.Provider>
       </ThemeContext.Provider>

      </>
    );
  }
}

export default App;

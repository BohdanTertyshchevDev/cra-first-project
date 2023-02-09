import React from "react";
import Tree from './Tree';
import { ThemeContext } from '../contexts/themeContext';
import CONSTANTS from "../constants";
import { UserContext } from "../contexts/userContext";
const {THEMES} = CONSTANTS;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.DARK,
      user: {
        firstName: 'John',
        lastName: 'Doe 29'
      }
    }
  }
  
  render() {
    const {user, theme} = this.state;
    return (
      <UserContext.Provider value={{user}}>
        <ThemeContext.Provider value={[theme, () => {}]}>
          <Tree/>
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}
 

export default App;

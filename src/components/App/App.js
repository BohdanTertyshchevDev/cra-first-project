import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  toggle() {
    this.setState({
      on: !this.state.on
    })
  }
  
  render() {
    const className = this.state.on ? 'lamp-on' : 'lamp-off';

    return (
      <React.Fragment>
        <div className={className}></div>
        <button onClick={() => {this.toggle()}}>Toggle!</button>
      </React.Fragment>
    );
  }
}

export default App;

/*
Створити кружечок-лампочку і кнопку-вимикач
За натисненням на кнопку кружечок має "підсвітитись" (наповнитись жовтим кольором)
*/

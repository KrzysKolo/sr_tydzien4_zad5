import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <button className="btn" type="button" ref={this.surnameInput} onMouseMove={this.handleFocusClick} onMouseOut={this.handleMouseOut}>Focus</button>
        </div>
      </div>
    )
  }
}
export default App;
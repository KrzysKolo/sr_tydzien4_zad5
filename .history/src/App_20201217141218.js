import React, { Component } from 'react'
import './App.css';
 class App extends Component {
  onClick = () => {
    console.log("Kliknieto");
  }
  constructor(props) {
    super(props);
    this.surnameInput = React.createRef();
  }
  handleFocusClick = () => {
    this.surnameInput.current.style.background = ' rgb(195, 1, 4)';
    this.surnameInput.current.style.color = '#f00';
  }
  handleMouseOut = () => {
    this.surnameInput.current.style.background = '#fff';
    this.surnameInput.current.style.color = '#000';
  }
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
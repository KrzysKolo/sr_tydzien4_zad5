import React, { Component } from 'react'

 class App extends Component {
  onClick = () => {
    console.log("Kliknieto");
  }
  constructor(props) {
    super(props);
    this.surnameInput = React.createRef();
  }
  handleFocusClick = () => {

    this.surnameInput.current.style.background = '#345423';
    this.surnameInput.current.style.color = '#f00';
  }
  handleMouseOut = () => {

  }
  render() {
    return (
      <div>
        <div>
          <button type="button" ref={this.surnameInput} onMouseMove={this.handleFocusClick} onMouseOut={this.handleMouseOut}>Focus</button>
        </div>
      </div>
    )
  }
}
export default App;
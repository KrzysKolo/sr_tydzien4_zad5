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
    this.surnameInput.current.focus();
    this.surnameInput.current.value = 'Kowalski';
    this.surnameInput.current.style.border = '#f00 1px solid';
  }
  render() {
    return (
      <div>
        <div>
          <button type="button" ref={this.surnameInput} onClick={this.handleFocusClick}>Focus</button>
        </div>
      </div>
    )
  }
}
export default App;
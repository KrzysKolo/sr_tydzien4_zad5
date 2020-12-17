import React, { Component } from 'react'

 class App extends Component {
  onClick = () => {
    console.log(this.firstName.value);
    console.log(this.lastName.value);
    console.log(this.age.value);
  }
  onKeyUp = (target, e) => {
    if(e.keyCode === 13) {
      switch (target) {
        case 'firstName' :
          this.lastName.focus();
          break;
        case 'lastName' :
          this.age.focus();
          break;
        case 'age' :
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
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
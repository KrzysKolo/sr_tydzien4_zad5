import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {
   MyButtonStyle = React.createRef();
   componentDidMount () {
    onClick = () => {
      console.log("Kliknieto");
    }
    constructor(props) {
      super(props);
      this.surnameInput = React.createRef();
    }
    handleFocusClick = () => {
      this.surnameInput.current.style.background = ' rgb(195, 1, 4)';
      this.surnameInput.current.style.color = 'rgb(254, 254, 254)';
    }
    handleMouseOut = () => {
      this.surnameInput.current.style.background = 'rgb(2, 51, 213)';
      this.surnameInput.current.style.color = 'rgb(248, 168, 45)';
    }
   }
  render() {
    return (
      <div className="App">
      <MyButton ref={this.MyButtonStyle} />
      </div>
    )
  }
}
export default App;
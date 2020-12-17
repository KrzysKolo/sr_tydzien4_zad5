import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {


    constructor(props) {
      super(props);
      this.MyButtonRef = React.createRef();
    }
    handleMouseMove = () => {
      this.MyButton.current.style.background = ' rgb(195, 1, 4)';
      this.MyButton.current.style.color = 'rgb(254, 254, 254)';
    }
    handleMouseOut = () => {
      this.MyButton.current.style.background = 'rgb(2, 51, 213)';
      this.MyButton.current.style.color = 'rgb(248, 168, 45)';
    }
  render() {
    return (
      <div className="App">
      <MyButton ref={this.MyButtonRef} onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} />
      </div>
    )
  }
}
export default App;
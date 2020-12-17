import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {


    constructor(props) {
      super(props);
      this.MyButtonRef = React.createRef();
    }
    handleMouseOver = () => {
      this.MyButtonRef.current.style.background = ' rgb(195, 1, 4)';
      this.MyButtonRef.current.style.color = 'rgb(254, 254, 254)';
    }
    handleMouseOut = () => {
      this.MyButtonRef.current.style.background = 'rgb(2, 51, 213)';
      this.MyButtonRef.current.style.color = 'rgb(248, 168, 45)';
    }
  render() {
    return (
      <div className="App">
      <MyButton ref={this.MyButtonRef} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
      </div>
    )
  }
}
export default App;
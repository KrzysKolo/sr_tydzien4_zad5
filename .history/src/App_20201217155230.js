import React, { Component } from 'react';
import MyButton from './MyButton';
import MyButtonChange from './MyButtonChange';
import './App.css';
 class App extends Component {


    constructor(props) {
      super(props);
      this.MyButtonRef = React.createRef();
      this.MyMyButtonChangeRef = React.createRef();
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
      <div >
        <MyButtonChange ref={this.MyMyButtonChangeRef} title="Click me!" />
        <MyButton ref={this.MyButtonRef} title="Click me!" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
      </div>
    )
  }
}
export default App;
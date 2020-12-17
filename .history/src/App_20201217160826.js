import React, { Component } from 'react';
import MyButton from './components/MyButton';
import MyButtonChange from './components/MyButtonChange';
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
        <MyButtonChange ref={this.MyButtonChangeRef} title="Click me!" setTimeout={this.timeChange} />
        <MyButton ref={this.MyButtonRef} title="Click me!" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} />
      </div>
    )
  }
}
export default App;
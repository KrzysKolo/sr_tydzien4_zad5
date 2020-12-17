import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {


    constructor(props) {
      super(props);
      this.MyButtonRef = React.createRef();
    }

  render() {
    return (
      <div className="App">
      <MyButton ref={this.MyButtonRef} />
      </div>
    )
  }
}
export default App;
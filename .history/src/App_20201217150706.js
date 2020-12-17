import React, { Component } from 'react';
import MyButton from './MyButton';
import './App.css';
 class App extends Component {

   componentDidMount () {
    constructor(props) {
      super(props);
      this.MyButtonRef = React.createRef();
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
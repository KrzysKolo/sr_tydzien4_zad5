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
      }
    }
  }
  render() {
    return (
      <div>
        <div>
          <span>First Name:</span>
          <input ref={(input)=>{this.firstName = input}} onKeyUp={this.onKeyUp} type="text" />
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input)=>{this.lastName = input}}  type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input)=>{this.age = input}}  type="text" />
        </div>
        <div>
          <input type="submit" value="submit" ref={(input)=>{this.submit = input}} onClick={this.onClick} />
        </div>
      </div>
    )
  }
}
export default App;
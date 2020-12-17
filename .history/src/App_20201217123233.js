import React, { Component } from 'react'

 class App extends Component {
  onClick = () => {
    console.log(this.firstName.value);
  }
  render() {
    return (
      <div>
        <div>
          <span>First Name:</span>
          <input ref={(input)=>{this.firstName = input}} type="text" />
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
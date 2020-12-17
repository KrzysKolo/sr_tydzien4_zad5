import React, { Component } from 'react'

export default class App extends Component {
  render() {
    onClick =() => {
      console.log(this.firstName);
    }

    return (
      <div>
        <div>
          <span>First Name:</span>
          <input ref={(input)=>{this.firstName = input}} type="text" />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text" />
        </div>
        <div>
          <span>Age:</span>
          <input type="text" />
        </div>
        <div>
          <input type="submit" value="submit" onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

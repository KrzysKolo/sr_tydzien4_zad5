import React, { Component } from 'react'

 class MyButton extends Component {

  render() {
    return (
      <div className="App">
        <div >
          <button className="btn" type="button" ref={this.surnameInput} onMouseMove={this.handleFocusClick} onMouseOut={this.handleMouseOut}>Focus</button>
        </div>
      </div>
    )
  }
}
export default MyButton;
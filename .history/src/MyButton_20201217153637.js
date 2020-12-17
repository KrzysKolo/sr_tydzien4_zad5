import React, { Component } from 'react'

/*  class MyButton extends Component {
  onClick = () => {
    console.log("Kliknieto");
  }
  constructor(props) {
    super(props);
    this.surnameInput = React.createRef();
  }
  handleFocusClick = () => {
    this.surnameInput.current.style.background = ' rgb(195, 1, 4)';
    this.surnameInput.current.style.color = 'rgb(254, 254, 254)';
  }
  handleMouseOut = () => {
    this.surnameInput.current.style.background = 'rgb(2, 51, 213)';
    this.surnameInput.current.style.color = 'rgb(248, 168, 45)';
  }
  render() {
    return (
      <div className="App">
        <div >
          <button className="btn" type="button" ref={this.surnameInput} onMouseMove={this.handleFocusClick} onMouseOut={this.handleMouseOut}    >Focus</button>
        </div>
      </div>
    )
  }
} */

const MyButton = React.forwardRef(({onMouseOver, onMouseOut, title}, ref) => {

    return (
        <div className="App">
           <button className="btn" type="button" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{title}</button>
        </div>
    )
})
export default MyButton;
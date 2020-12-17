import React from 'react';

const App = () => {
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

export default App;

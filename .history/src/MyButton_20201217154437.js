import React from 'react'

const MyButton = React.forwardRef(({onMouseOver, onMouseOut, title}, ref) => {

    return (
        <div className="App">
           <button className="btn" type="button" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{title}</button>
        </div>
    )
})
export default MyButton;
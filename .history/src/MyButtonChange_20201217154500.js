import React from 'react'

const MyButtonChange = React.forwardRef(({onMouseOver, onMouseOut, title}, ref) => {

    return (
        <div className="App">
           <button className="btn" type="button" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{title}</button>
        </div>
    )
})
export default MyButtonChange;
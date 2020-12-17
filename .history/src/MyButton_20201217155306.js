import React from 'react'

const MyButton = React.forwardRef(({onMouseOver, onMouseOut, title}, ref) => {

    return (

           <button className="btn" type="button" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{title}</button>

    )
})
export default MyButton;
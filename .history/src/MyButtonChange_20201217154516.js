import React from 'react'

const MyButtonChange = React.forwardRef(({title}, ref) => {

    return (
        <div className="App">
           <button className="btn" type="button" ref={ref}>{title}</button>
        </div>
    )
})
export default MyButtonChange;
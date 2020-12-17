import React from 'react'

const MyButtonChange = React.forwardRef(({title}, ref) => {

    return (

           <button className="btn" type="button" ref={ref}>{title}</button>

    )
})
export default MyButtonChange;
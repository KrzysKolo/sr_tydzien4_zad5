import React from 'react'

const MyButtonChange = React.forwardRef(({title, setTimeout}, ref) => {

    return (

           <button className="btn" type="button" setTimeout={setTimeout} ref={ref}>{title}</button>

    )
})
export default MyButtonChange;
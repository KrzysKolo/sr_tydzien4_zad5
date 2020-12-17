import React, {useEffect, useRef} from 'react';

const MyButtonChange =({title})=> {
    const button = useRef();
    return (

           <button className="btn" type="button" setTimeout={setTimeout} >{title}</button>

    )
}
export default MyButtonChange;
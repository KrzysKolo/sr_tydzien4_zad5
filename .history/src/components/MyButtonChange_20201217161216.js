import React, {useEffect, useRef} from 'react';

const MyButtonChange =({title})=> {
    const button = useRef();
    const changeButton = (button) => {
        button.current.style.backgroundColor = 'red';
        button.current.style.color = 'white';
    }
    return (

           <button className="btn" type="button" setTimeout={setTimeout} >{title}</button>

    )
}
export default MyButtonChange;
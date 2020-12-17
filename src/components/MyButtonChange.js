import React, {useEffect, useRef} from 'react';

const MyButtonChange =({title})=> {
    const button1 = useRef();
    const changeButton = (button) => {
        button.current.style.background = ' rgb(195, 1, 4)';
        button.current.style.color = 'rgb(254, 254, 254)';
    }
    useEffect(() => {
        changeButton(button1);
    });
    return (

           <button className="btn" type="button" ref={button1} >{title}</button>

    )
}
export default MyButtonChange;
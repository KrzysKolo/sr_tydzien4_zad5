import React, {useEffect, useRef} from 'react';

const MyButtonChange =({title})=> {
    const button1 = useRef();
    const changeButton = (button) => {
        this.MyButtonRef.current.style.background = ' rgb(195, 1, 4)';
      this.MyButtonRef.current.style.color = 'rgb(254, 254, 254)';
    }
    return (

           <button className="btn" type="button" setTimeout={setTimeout} >{title}</button>

    )
}
export default MyButtonChange;
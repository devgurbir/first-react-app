import React from 'react'
import style from '../button.module.css'

function Button(prop){
    const {btnText} = prop;
    return (
        <button className={style.button}>{btnText}</button>
    )
}

export default Button
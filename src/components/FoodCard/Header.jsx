import React from 'react'
import HeaderIcons from './HeaderIcons'

function Header({title, icons}){
    return(
        <div className = "header">
             <div className="headerText"><h2>{title}</h2></div>   
             <div className="headerIcons">
                 {icons.map(el => {
                     return <HeaderIcons path={el} />
                 })}
             </div>
        </div>
    )
}

export default Header
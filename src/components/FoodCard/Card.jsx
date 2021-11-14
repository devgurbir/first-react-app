import React from 'react'
import "./cardStyles.css"
import Image from "./Image"
import InfoContainer from './InfoContainer'

function Card(){
    return(
        <div className = "card">
            <Image path="https://cdn.tasteatlas.com/images/dishes/b05a0af72ad845f3a6abe16143d7853a.jpg?mw=1300"/>
            <InfoContainer />
        </div>
    )
}

export default Card
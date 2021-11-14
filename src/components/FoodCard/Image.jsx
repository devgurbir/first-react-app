import React from 'react'

function Image({path}){
    return(
        <div className = "image">
            <img src={path} />
        </div>
    )
}

export default Image
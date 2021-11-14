import React from 'react'
import ListItem from './ListItem'

function List({items}){
    return(
        <ul>
            {items.map( el => {
                return <ListItem text={el} />
            })}
        </ul>
    )
}

export default List
import React from 'react'
import ListHeader from './ListHeader'
import ListItems from './ListItems'
import style from './List.module.css'

function List(){
    return(
        <>
        <ListHeader title="Shop By Categories" />
        <div className = {style.listParent}>
        <ListItems />
        </div>
        </>
    )
}

export default List
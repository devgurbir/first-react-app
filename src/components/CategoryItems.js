import React from 'react'
import style from './CategoryItems.module.css'

function CategoryItem({title, url}){
    return (
        <div className = {style.categoryItem}>
            <div><img src={url} /></div>
            <div>{title}</div>
        </div>
    )
}

export default CategoryItem
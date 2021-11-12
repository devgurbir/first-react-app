import React from 'react'
import CategoryItems from './CategoryItems'

function ListItems(){
    return (
        <>
            <CategoryItems title="Fresh" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" />
            <CategoryItems title="Mobiles" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" />
            <CategoryItems title="Fashion" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" />
            <CategoryItems title="Electronics" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" />
        </>
    )
}

export default ListItems
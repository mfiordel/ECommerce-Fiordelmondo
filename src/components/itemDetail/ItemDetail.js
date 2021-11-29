import React from 'react';

const ItemDetail = ( {detailItem} ) => {
    return (
        <div>
            <img className = "item_img" src={detailItem.image}/>
            <h2 className = "item_title">{detailItem.name}</h2>
            <p>{detailItem.species}</p>
            <p>{detailItem.gender}</p>
        </div>
    )
}

export default ItemDetail

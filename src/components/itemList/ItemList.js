import React from "react";
import Item from "../item/Item"

const ItemList = ( {items} ) => {
    return (
        <div>
            {items.map( element => {
                return <Item item = {element}/>
            } )}
            

        </div>
    )
}

export default ItemList
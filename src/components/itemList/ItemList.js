import React from "react";
import Item from "../item/Item"

const ItemList = ( {characters} ) => {
    return (
        <div>
            {characters.map( element => {
                return <Item character = {element}/>
            } )}
        </div>
    )
}

export default ItemList
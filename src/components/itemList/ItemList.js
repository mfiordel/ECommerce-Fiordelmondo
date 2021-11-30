import React from "react";
import Item from "../item/Item"

const ItemList = ( {items} ) => {
    return (
        <div className="container box-border self-center justify-self-center flex-row inline-flex justify-around flex-wrap flex-grow" >
            {items.map( element => {
                return <Item item = {element} key={element.id}/>
            } )}
            

        </div>
    )
}

export default ItemList
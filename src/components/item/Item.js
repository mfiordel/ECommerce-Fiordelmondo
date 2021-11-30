import React from "react";
import { NavLink } from 'react-router-dom';

const Item = ( {item} ) => {
    return (
        <div className="box-border bg-white my-3 mx-4 flex-row flex-shrink text-center justify-items-center py-4 px-4 shadow-2xl">
            <NavLink to = {`/item/${item.id}`}> 
                <img className = "rounded-full shadow-2xl w-48 h-48 hover:animate-bounce"  src={item.image} alt={item.name}/>
            </NavLink>
            <h2 className = "self-center text-lg font-sans font-semibold mt-2">{item.name}</h2>
            
        </div>
    )
}

export default Item
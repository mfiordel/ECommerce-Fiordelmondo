import React from "react";
import { NavLink } from 'react-router-dom';

const Item = ( {item} ) => {
    return (
        <div className="box-border my-3 mx-4 text-center content-center flex-row justify-around py-4 px-4 shadow-2xl h-96 bg-gray-200">
            <NavLink 
                className="flex "
                to = {`/item/${item.id}`}> 
                <img className = "shadow-2xl w-52 h-52 hover:animate-bounce object-contain h-76 rounded-md"  src={item.img} alt={item.name}/>
            </NavLink>
                <h2 className = "self-center text-lg font-sans font-semibold mt-6">{item.name}</h2>
                <h2 className = "self-center text-sm font-semibold mt-2">${item.price}</h2>
            <NavLink  
                to = {`/item/${item.id}`}> 
                <h3 className=' p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-300'>Ver más</h3>
            </NavLink>
        </div>
    )
}

export default Item
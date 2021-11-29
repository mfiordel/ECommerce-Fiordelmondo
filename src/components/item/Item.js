import React from "react";
import { NavLink } from 'react-router-dom';
import './styles.css';

const Item = ( {item} ) => {
    return (
        <div>
            <NavLink to = {`/item/${item.id}`}> 
                <img className = "product_img" src={item.image}/>
            </NavLink>
            <h2 className = "product_title">{item.name}</h2>
            
        </div>
    )
}

export default Item
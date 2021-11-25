import React from "react";
import './styles.css';

const Item = ({character}) => {
    return (
        <div>
            <img className = "product_img" src={character.image}/>
            <h2 className = "product_title">{character.name}</h2>
        </div>
    )
}

export default Item
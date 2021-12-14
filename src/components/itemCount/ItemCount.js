    import React, { useState } from "react";


    const ItemCount = ( { max, setQuantity, quantity, onAdd } ) => {

        const handleAdd = () => {
            quantity < max && setQuantity(quantity + 1)
        }
    
        const handleSub = () => {
            quantity > 0 && setQuantity(quantity - 1)
        }

        const config = {
            className: `btn ${quantity === 0 ? "cursor-not-allowed" : "bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4"}`,
            disabled: quantity === 0,
            onClick: handleSub
        }

        return ( 
            <div>
                <button {...config}>
                        -
                </button>
                <span className="font-semibold rounded-full mt-4 pt-2 pb-2 px-4">{quantity}</span>
                <button 
                    className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4"
                    disabled={quantity === max}
                    onClick={handleAdd}
                >
                    +
                </button>
                <br/>
                <button onClick={onAdd} disabled={quantity==0} className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">Agregar al carrito</button>
            </div>
        );
    };
    export default ItemCount;
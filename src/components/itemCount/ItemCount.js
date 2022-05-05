    import React from "react";


    const ItemCount = ( { max, setQuantity, quantity, onAdd } ) => {

        const handleAdd = () => {
            quantity < max && setQuantity(quantity + 1)
        }
    
        const handleSub = () => {
            quantity > 0 && setQuantity(quantity - 1)
        }

        const config = {
            className: `btn ${quantity === 0 ? "cursor-not-allowed" : "mt-2 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"}`,
            disabled: quantity === 0,
            onClick: handleSub
        }

        return ( 
            <div>
                <button className='mt-2 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none'
                     {...config}>
                        -
                </button>
                <span className="font-semibold rounded-full mt-4 pt-2 pb-2 px-4">{quantity}</span>
                <button 
                    className='mt-2 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none'
                    disabled={quantity === max}
                    onClick={handleAdd}
                >
                    +
                </button>
                <br/>
                <button 
                    onClick={onAdd} 
                    disabled={quantity===0} 
                    className='mt-2 p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-200'>
                    Agregar al carrito
                </button>
            </div>
        );
    };
    export default ItemCount;
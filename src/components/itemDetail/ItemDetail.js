import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import  { CartContext }  from '../../Context/CartContext';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ( {id, name, img, desc, price, category, stock} ) => {

    const {addCart, isInCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        if (quantity > 0 ) {
            addCart({
                id,
                name,
                price,
                img,
                quantity
            })
        }
    }


    return (
        
        <div className="container box-border border-4 ml-10 flex-row inline-flex flex-grow justify-center content-center">
            <div className="box-border my-3 mx-4 text-center justify-items-between py-4 px-4 shadow-2xl self-center font-semibold">
                <img className = "rounded-full shadow-2xl w-54 h-54" src={img} alt={name}/>
                <h2 className = "text-xl my-4">{name}</h2>
            </div>
            <div className="container flex-grow box-border my-3 mx-4 text-center justify-items-center py-4 px-4 shadow-2xl self-center ">
                <h2 className = "text-4xl mb-4 font-semibold">{name}</h2>
                <p className = "">Categoria: {category}</p>
                <p className = "">Stock: {stock}</p>
                <p className = "">Precio: ${price}</p>
                <p className = "">Descripcion:{desc}</p>

                {
                    !isInCart(id)
                        ?   <ItemCount 
                                max= {stock}
                                quantity={quantity} 
                                setQuantity={setQuantity}
                                onAdd = {handleAdd}
                            />
                        :   <NavLink to="/cart" className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">Finalizar Compra</NavLink>
                }
            </div>
            
        </div>
    )
}

export default ItemDetail

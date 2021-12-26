import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import  { CartContext }  from '../../context/CartContext';
import ItemCount from '../itemCount/ItemCount';
import { FireIcon } from '@heroicons/react/outline'

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
                quantity,
                stock
            })
        }
    }


    return (
        
        <div className="container box-border border-4 inline-flex flex-grow justify-center content-center sm:flex-wrap md:flex-nowrap">
            <div className="box-border my-3 mx-4 text-center justify-items-between py-4 px-4 shadow-2xl self-center font-semibold">
                <img className = "rounded-full shadow-2xl w-54 h-54" src={img} alt={name}/>
                <h2 className = "text-xl my-4">{name}</h2>
            </div>
            <div className="container flex-grow box-border my-3 mx-4 text-center py-4 px-4 shadow-2xl ">
                <h2 className = "text-4xl mb-4 font-semibold">{name}</h2>
                <p><span className = "mb-4 font-semibold">Categoria: </span> {category}</p>
                <p className = ""><span className = "mb-4 font-semibold">Stock: </span> {stock}</p>
                <p className = ""><span className = "mb-4 font-semibold">Precio: </span> ${price}</p>
                <p className = ""><span className = "mb-4 font-semibold">Descripcion: </span>{desc}</p>
                {
                    !isInCart(id)
                        ?   <ItemCount 
                                max= {stock}
                                quantity={quantity} 
                                setQuantity={setQuantity}
                                onAdd = {handleAdd}
                            />
                            
                        :   <div className='p-6 flex justify-center flex-wrap'>
                                <NavLink to="/cart" 
                                    className='flex mt-2 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-600 text-white'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </span>
                                    Ir al Carrito
                                </NavLink>
                                <NavLink to="/" className='flex ml-2 mt-2 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-600 text-white'> 
                                    <FireIcon className="h-6 w-6" aria-hidden="true" fill="none" />
                                        Seguir comprando
                                </NavLink>
                               
                            </div>
                }
            </div>
            
        </div>
    )
}

export default ItemDetail

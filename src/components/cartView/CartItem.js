import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { CartContext } from '../../Context/CartContext'

export const CartItem = ({name, price, quantity, id, img, stock, max}) => {
    const [quantityy, setQuantityy] = useState(quantity)
    const {deleteCart, subQuantity, addQuantity} = useContext(CartContext)
    const handleQuantitySub = () => {
        if (quantityy > 1) {
            setQuantityy(quantityy - 1)
            subQuantity(id)
        }
    }
    const handleQuantityAdd = () => {
        if(quantityy < max){
            setQuantityy(quantityy + 1)
            addQuantity(id)
    }}
    return (
        <div>
            <div className="mt-8">
                <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                    
                    <li  className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img className="w-full h-full object-center object-cover" src={img} alt={name}/>
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                {name}
                            </h3>
                            <p className="ml-4"></p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">${price}</p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">

                            <p className="text-gray-500">Cantidad: {quantity}</p>
                            <button 
                                className='ml-1 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 bg-gray-400 text-white focus:outline-none'
                                onClick={handleQuantitySub}>
                                -
                            </button>
                            <button 
                                className='ml-1 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 bg-gray-400 text-white focus:outline-none'
                                onClick={handleQuantityAdd}>
                                +
                                </button>
                            <span className='font-semibold'>(El stock actual es de {max})</span>
                        </div>    
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <button 
                className='z-0 mt-2 h-10 w-56 pt-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-600 text-white '
                onClick={() => { deleteCart(id)}}>
                    Quitar Del Carrito
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 relative z-10 bottom-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>    
            </button>
        </div>
    )
}
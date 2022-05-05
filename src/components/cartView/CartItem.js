import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'

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
                    <ul className=" divide-y divide-gray-200">
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
                                </div>
                                <p className="my-3 text-sm text-gray-500">${price}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm flex-wrap">
                                <p className="text-gray-500">Cantidad: {quantity}</p>
                                <div>
                                    <button 
                                        className='ml-1 p-2 px-3 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 bg-gray-400 text-white focus:outline-none hover:bg-gray-600'
                                        onClick={handleQuantitySub}>
                                        -
                                    </button>
                                    <button 
                                        className='ml-1 p-2 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 bg-gray-400 text-white focus:outline-none hover:bg-gray-600'
                                        onClick={handleQuantityAdd}>
                                        +
                                    </button>
                                </div>
                            </div> 
                            <span className='font-semibold text-xs'>(El stock actual es de {max})</span>   
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button 
                className='p-3 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-200'
                onClick={() => { deleteCart(id)}}>
                Quitar
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>    
            </button>
        </div>
    )
}
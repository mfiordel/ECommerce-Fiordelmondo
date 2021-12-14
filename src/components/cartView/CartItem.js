import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'

export const CartItem = ({name, price, quantity, id}) => {
    const {deleteCart} = useContext(CartContext)

    return (
        <div>
            <div className="mt-8">
                <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                    
                    <li  className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img className="w-full h-full object-center object-cover"/>
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

                        </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <button 
                className='bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4'
                onClick={() => { deleteCart(id)}}>
                    Quitar Del Carrito
            </button>
        </div>
    )
}
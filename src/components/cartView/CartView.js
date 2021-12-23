import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { CartContext } from "../../Context/CartContext";
import { CartItem } from './CartItem';

const CartView = () => {

    const {cart, cleanCart, totalBuy} = useContext(CartContext)



    if (cart.length === 0 ){
        return <div className="container box-border">
                    <div className="flex justify-center">
                    <h1 className = "text-4xl ml-4 font-semibold text-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="z-10 relative left-20 h-14 w-14 relative h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            No hay items
                        </span>
                    </h1>
                    </div>
                    <div className="flex justify-center mt-4 relative left-2">
                        <NavLink to="/" 
                            className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none'>
                            Volver al inicio
                        </NavLink>
                    </div>
               </div>
    }

    return(
        <div className="container">
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="z-10 relative top-2 h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h1 className="z-0 text-5xl font-medium leading-tight mt-1 text-black-600 text-center">CartView</h1>
            </div>
            
            <div className="container box-border self-center justify-self-center flex-row inline-flex justify-around flex-wrap flex-grow"> 
                {
                    cart.map((prod) => <CartItem max={prod.stock} key={prod.id} {...prod}/>)
                }
            </div>
            <div className="container box-border self-center justify-self-center flex-row inline-flex justify-center">
                <h3 className='mt-2 p-2 text-center shadow-lg text-sm'>
                    <span className='font-semibold text-md '>
                        Precio Total:
                    </span> 
                    ${totalBuy()}
                </h3>
            </div>
            <div className="container box-border self-center justify-self-center inline-flex justify-center">
                <button 
                    className='mt-2 w-56 p-0 rounded-md text-center shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-600 text-white '
                    onClick={cleanCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative left-24"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Vaciar
                </button>
                <NavLink 
                    to="/checkout" 
                    className='mt-2 w-56 p-0 rounded-md text-center shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-400 text-white '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Terminar Compra
                </NavLink>
                
            </div>
        </div>
    )
}
export default CartView
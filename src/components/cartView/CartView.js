import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { CartContext } from "../../Context/CartContext";
import { CartItem } from './CartItem';

const CartView = () => {

    const {cart,cleanCart} = useContext(CartContext)

    if (cart.length === 0 ){
        return <div className="container box-border justify-center inline-flex">
                    <h1 className = "text-4xl mb-4 font-semibold self-center">No hay items</h1>
                    <NavLink to="/" 
                        className='bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4'>
                            Volver al inicio
                    </NavLink>
               </div>
    }

    return(
        <div className="container box-border self-center justify-self-center flex-row inline-flex  flex-wrap" >
            <h2 className = "text-4xl mb-4 font-semibold self-center">CartView</h2>
            <div className="container box-border self-center justify-self-center flex-row inline-flex justify-around flex-wrap flex-grow"> 
                {
                    cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </div>
            <div className="container box-border self-center justify-self-center flex-row inline-flex justify-center flex-wrap flex-grow">
                <button 
                    className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4" 
                    onClick={cleanCart}>
                        Vaciar
                </button>
                <button className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">Terminar Compra</button>
            </div>
        </div>
    )
}
export default CartView
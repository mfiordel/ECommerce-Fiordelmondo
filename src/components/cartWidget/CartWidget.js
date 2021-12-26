import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = ({quantity}) => {
  const {cart, totalQuantity} = useContext(CartContext);
  

  return (
      <NavLink to="/cart"  
          style={{
              visibility: cart.length === 0 ? 'hidden' : 'visible'
          }}
      >
          
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-green-600 text-white rounded ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalQuantity()}
            </span>
      </NavLink>
  )
}

export default CartWidget
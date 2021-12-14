import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {
  const {cart} = useContext(CartContext);
  const cartQty = cart.length;
  
  return (
      <NavLink to="/cart"  
          style={{
              visibility: cart.length === 0 ? 'hidden' : 'visible'
          }}
      >
          <span className="text-white font-semibold">IconCartWidget {cartQty}</span>
      </NavLink>
  )
}

export default CartWidget
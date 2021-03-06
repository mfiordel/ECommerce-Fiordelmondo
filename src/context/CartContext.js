import { createContext, useEffect, useState} from "react";


export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || []


export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState(initialCart);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    const addCart = (item) => {
        setCart([...cart, item]);
        }

    const deleteCart = (id) => {
        setCart( cart.filter(prod => prod.id !== id));
    }

    const subQuantity = (id) => {
        const idx = cart.findIndex( item => item.id === id);
        let newCart = [...cart]
        newCart[idx].quantity = newCart[idx].quantity - 1;
        setCart(newCart)
    }
    
    const addQuantity = (id) => {
        const idx = cart.findIndex( item => item.id === id);
        let newCart = [...cart]
        newCart[idx].quantity = newCart[idx].quantity + 1;
        setCart(newCart)
    }

    const cleanCart = () => {
        setCart([]);
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }
  
    const totalBuy = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some( prod => prod.id === id )
      }

    return(
        <CartContext.Provider value = {{
            cart,
            addCart,
            deleteCart,
            cleanCart,
            subQuantity,
            addQuantity,
            isInCart,
            totalQuantity,
            totalBuy
        }}>
            {children}  
        </CartContext.Provider>
    )
}

export default CartContextProvider;
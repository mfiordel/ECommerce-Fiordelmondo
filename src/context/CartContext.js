import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addCarrito = (item) => {
        setCart([...cart, item]);
    }
    
    return(
        <CartContext.Provider value = {{
            cart,
            addCarrito
        }}>
            {children}  
        </CartContext.Provider>
    )
}

export default CartContextProvider;
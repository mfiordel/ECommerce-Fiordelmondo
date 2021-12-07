import { createContext, useState} from "react";

const CartContext = createContext();

export default function CartContextProvider({children}){
    const [user, setUser] = useState(null)

    return(
        <CartContext.Provider value={
            user,
            setUser
        }>
            {children}
        </CartContext.Provider>
    )
}
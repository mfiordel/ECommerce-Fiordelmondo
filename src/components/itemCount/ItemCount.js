    import React, {useState} from "react";


    const ItemCount = ( { initial, stock, onAdd } ) => {
        const [contador, setContador] = useState(initial);

        const handleOp = (simbolo) => {
            simbolo === "-" ? setContador(contador - 1) : setContador(contador + 1)
        }

        return ( 
            <div>
                <button onClick={() => handleOp('-') }>-</button>
                <span>{contador}</span>
                <button onClick={() => handleOp('+') }>+</button>
                <br />
                <button>Agregar al carrito</button>
            </div>
        );
    };
    export default ItemCount;
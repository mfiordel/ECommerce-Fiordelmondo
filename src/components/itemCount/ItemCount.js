    import React, {useState} from "react";


    const ItemCount = ( { initial, stock, onAdd } ) => {
        const [contador, setContador] = useState(initial);
        const [out, setOut] = useState(false)

        const handleAdd = () => {
            if (contador < stock) {
                setContador(contador + 1);
            }
            else {
                setOut (true);
            }
        }
    
        const handleSub = () => {
            if (contador === 1) {
                return
            } else {
                setContador(contador - 1)
                setOut(false);
            }
        }
        return ( 
            <div>
                <button className="contador" onClick={() => handleSub()} className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">-</button>
                <span className="contador" className="font-semibold rounded-full mt-4 pt-2 pb-2 px-4">{contador}</span>
                <button className="contador" onClick={() => handleAdd()} className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">+</button>
                {out && <span>Fuera de stock</span>}
                <br/>
                <button onClick={() => onAdd(contador)} className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">Agregar al carrito</button>
            </div>
        );
    };
    export default ItemCount;
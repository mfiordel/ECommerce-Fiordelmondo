import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemDetail = ( {detailItem} ) => {

    return (
        
        <div className="container box-border border-4 ml-10 flex-row inline-flex flex-grow justify-center content-center">
            <div className="box-border my-3 mx-4 text-center justify-items-between py-4 px-4 shadow-2xl self-center font-semibold">
                <img className = "rounded-full shadow-2xl w-54 h-54" src={detailItem.image} alt={detailItem.name}/>
                <h2 className = "text-xl my-4">{detailItem.name}</h2>
            </div>
            <div className="container flex-grow box-border my-3 mx-4 text-center justify-items-center py-4 px-4 shadow-2xl self-center ">
                <h2 className = "text-4xl mb-4 font-semibold">{detailItem.name}</h2>
                <p className = "">Especie: {detailItem.species}</p>
                <p className = "">Género: {detailItem.gender}</p>
                <p className = "">Estado: {detailItem.status}</p>
                <p className = "">Fecha de Creación:{detailItem.created}</p>

                <div className="mt-4 px-3 py-1">
                    <NavLink to={`/shop`} className="bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4">
                        Agregar al carrito
                    </NavLink>
                </div>
            </div>

            
        </div>
    )
}

export default ItemDetail

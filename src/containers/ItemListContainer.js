import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "../components/itemList/ItemList";
import Banner from "../components/banner/Banner"
import Loader from "../components/loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/firebase/config"

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        
        const itemsRef = collection(db, 'servicios')
        const q = categoryId ? query(itemsRef, where('type', '==', categoryId)) : itemsRef
        
        getDocs(q)
            .then( (snapshot) => {
                const items = snapshot.docs.map((doc) =>({
                    id: doc.id,
                     ...doc.data()
                    })
                )
                setItems(items)
                setCurrentPage(0)
            })


    }, [categoryId]);

    const filtered = () => {
        return items.slice(currentPage, currentPage + 10)
        
    }

    const nextPage = () => {
        setCurrentPage( currentPage + 5)
        window.scrollTo({
            top: 1200,
            left: 0,
            behavior: "smooth"
          })
    }

    const previousPage = () => {
        setCurrentPage ( currentPage - 5)
        window.scrollTo({
            top: 1200,
            left: 0,
            behavior: "smooth"
          })
    }


    const maxItems = items.length - 5;
    return (
        <>
        {items.length !== 0 ? <div>
                                <Banner/> 
                                <div className=" box-border border-t-8 border-b-8 pb-8 border-gray-600 md:mt-20 mb-20 pt-10 md:pt-0 lg:pt-10 pl-4 md:pd-14 lg:pl-20 text-left flex-row justify-around shadow-2xl ">
                                    <h2 className = "self-center text-4xl font-sans font-semibold mt-2 mb-4">Diseño Gráfico</h2>
                                    <p className="font-semibold mb-4">Los siguientes Diseños pertencen a Freepik Company</p>
                                    <p className="font-semibold mb-4">Fuimos contratados para que los realicemos</p>
                                    <p>Cada uno de ellos <span className="font-semibold">debe adquirirse mediante su página oficial</span>, encontrandose un enlace para cada diseño dentro de los detalles del mismo ("Ver más")</p>
                                    <p><span className="font-semibold">Nuestro servicio</span> se basa en la <span className="font-semibold">edición o modificación a gusto</span> de aquellos que el cliente desee</p>
                                    <button 
                                        className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-6 font-semibold hover:bg-gray-200'
                                        onClick={previousPage}
                                        disabled={currentPage===0}>
                                            Anterior
                                    </button>
                                    <span className="font-semibold my-2 mx-2">{currentPage / 5 + 1}</span>
                                    <button
                                        className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-200'
                                        onClick={nextPage}
                                        disabled={currentPage===maxItems || items.length<=10}>
                                            Siguiente
                                    </button>
                                    <div className="box-border border-t-8 border-b-8 py-4 px-4 border-gray-600 my-2 text-left flex-col justify-around shadow-2xl ">
                                        <p className="py-2 font-semibold">Dentro del detalle de cada producto se encuentra el enlace perteneciente a Freepik en el que podrás encontrar el sistema gráfico de la pieza en diferentes formatos y variables</p>
                                        <p className="">Es probable que te encuentres con algunas <span className="font-semibold">piezas Premium</span> a las cuales <span className="font-semibold"> solo podrás acceder mediante la membresía de Freepik correspondiente</span></p>
                                        <p className="">Si no encuentras lo que buscas, te invitamos a navegar libremente por Freepik en donde podrás explorar su enorme banco de recursos</p>
                                        <p className="py-2 font-semibold">No olvides que aún así, nosotros podemos editar y modificar cualquier pieza externa que desees a tu gusto</p>
                                       
                                    </div>
                                    <ItemList items = {filtered()} />
                                    <button 
                                        className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-200'
                                        onClick={previousPage}
                                        disabled={currentPage===0}>
                                            Anterior
                                    </button>
                                    <span className="font-semibold my-2 mx-2">{currentPage / 5 + 1}</span>
                                    <button
                                        className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-white mt-2 font-semibold hover:bg-gray-200'
                                        onClick={nextPage}
                                        disabled={currentPage===maxItems || items.length<=10}>
                                            Siguiente
                                    </button>
                                </div>
                              </div>
        :
        <Loader/>
        }
        </>
    )

    
}


export default ItemListContainer
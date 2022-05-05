import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase/config'


const Order = () => {

    const {user} = useContext(UserContext)
    const [data, setData] = useState([])
   
    useEffect(() => {
        const ordersRef = collection(db, "orders")
        const q = user.email ? query(ordersRef, where('buyer.email', '==', user.email)) : ordersRef
        getDocs(q)
            .then((snapshot) => {
                const items = snapshot.docs.map ((doc) => ({id: doc.id ,...doc.data()}))
                setData(items)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [user])
    if (data.length === 0) {
        return (
            <h3 className='my-3 mx-2'>No hay órdenes de compras</h3>
        )
    } else {
        return (
            <div className='mt-8'>
                <h2 className='my-4 mx-4 text-lg font-semibold'>Órdenes de compras</h2>
                {
                    data.map (product => (
                        <>
                        <div className="mx-8 shadow rounded">
                            <div className="flow-root">
                                <ul className="-my-6 divide-y divide-gray-200">
                                    <li className="py-6 flex flex-wrap">
                                        <div className="flex-grow flex-wrap border border-gray-200 rounded-md overflow-hidden">
                                            <div key={product.id} className='container'>
                                                {
                                                    product.items.map (item => (
                                                        <div className='mx-4 my-2 flex justify-between border border-gray-200'>
                                                            <div>
                                                            <p className="mt-1 ml-2 text-sm font-semibold">Servicio</p>
                                                            <p className="mt-1 ml-2 text-sm text-gray-500">{item.name}</p>
                                                            </div>
                                                            <div>
                                                            <p className="mt-1 ml-2 text-sm font-semibold">Precio</p>
                                                            <p className="mt-1 ml-2 text-sm text-gray-500">${item.price}</p>
                                                            </div>
                                                            <div>
                                                            <p className="mt-1 ml-2 text-sm font-semibold">Cantidad</p>
                                                            <p className="mt-1 ml-2 text-sm text-gray-500">{item.quantity}</p>
                                                            </div>
                                                        </div>))
                                                }
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-1 flex flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    Orden registrada del: {product.date.toDate().toLocaleDateString()}
                                                </h3>
                                                </div>
                                                <p className="mt-1 text-sm font-semibold">Compra registrada con el email</p>
                                                <p className="text-sm text-gray-500">{product.buyer.email}</p>
                                                <p className="mt-1 text-sm font-semibold">Costo total de la compra</p>
                                                <p className="mt-1 text-sm text-gray-500">${product.total}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                        </>
                    ))
                }
            </div>
        )
    }
}

export default Order
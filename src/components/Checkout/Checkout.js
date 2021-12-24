import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { db } from '../../firebase/config'
import { NavLink } from 'react-router-dom'
import { collection, addDoc, Timestamp, getDocs, writeBatch, documentId,query ,where } from 'firebase/firestore'
import Loader from '../loader/Loader'

const Checkout = () => {

    const { cart, totalBuy, cleanCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const [values, setValues] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }    

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (values.name.length < 8){
            alert("Ingrese un nombre válido")
            return
        }
        if (values.email.length < 4){
            alert("Ingrese un email válido")
            return
        }
        if (values.tel.length < 8){
            alert("Ingrese un tel válido")
            return
        }

        const order = {
            buyer: values,
            items: cart,
            total: totalBuy(),
            date: Timestamp.fromDate( new Date() )
        
        }
        
        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const itemsRef = collection(db, "servicios")
        const q = query(itemsRef, where(documentId(), 'in', cart.map(el=> el.id)))

        const outOfStock = []

        setLoading(true)
        getDocs(q)
            .then ((res) =>{
                
                res.docs.forEach((doc) =>{
                    const itemToUpdate = cart.find((prod) => prod.id === doc.id)

                    if(doc.data().stock >= itemToUpdate.quantity) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemToUpdate.quantity
                        })
                    } else {
                        outOfStock.push(itemToUpdate)
                    }
                })

                if (outOfStock.length === 0 ){
                    addDoc(ordersRef, order)
                        .then((res) => {
                            batch.commit()
                            setOrderId(res.id)
                            cleanCart()
                        })
                        .finally(()=>{
                            setLoading(false)
                        })

                    
                } else {
                    alert("Los siguientes productos en tu carrito sobrepasan el stock: " + outOfStock.map(el=> el.name).join(', '))
                    setLoading(false)     
                }
            })
        /* UPDATE DOCS => For future admin panel        
        /*cart.forEach((prod)=>{
            const docRef = doc(itemsRef, prod.id)

            getDoc(docRef)
                .then((doc)=>{
                    if(doc.data().stock >= prod.quantity){
                    updateDoc(docRef, {
                        stock: doc.data().stock - prod.quantity
                    })
                }
                    
                })

            
        })*/

    }

    if (loading) {
        return <Loader/> 
    }

    return (
        <div className='my-5 mx-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 justify-items-center flex-row justify-center'>
            <div className='flex justify-center'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative left-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-3xl font-medium leading-tight mt-0 mb-2">CheckOut</h3>
            </span>
            </div>
                

            {
                orderId
                ? <>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 top-7 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="relative z-0 left-7 text-2xl font-medium leading-tight mt-0 mb-2">Tu compra fue registrada correctamente</h4>
                    </span>
                    <p className="mt-6 mb-6"><span className='font-semibold'>Tu número de orden es:</span> {orderId}</p>
                    <NavLink to="/" className='p-1 rounded-md shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none'>Volver</NavLink>
                </>
                : <>
                        <form onSubmit={handleSubmit} className='pl-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative right-7 top-8 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <input
                            className='ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Nombre'
                            value={values.name}
                            >
                        </input>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative right-7 top-8 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            className='ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder='Email'
                            value={values.email}
                            >
                        </input>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative right-7 top-8 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <input
                            className='ml-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="tel"
                            onChange={handleInputChange}
                            type="tel"
                            placeholder='Telefono'
                            value={values.tel}
                            >
                        </input>
                        <button 
                        className='ml-4 mt-2 w-56 p-0 rounded-md text-center shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none bg-gray-600 text-white '
                        type='submit'>
                        
                            Enviar
                        </button>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 MantisCosmik. All rights reserved.
                    </p>
                </>
            }

            

            
        </div>

       
    )
}
export default Checkout
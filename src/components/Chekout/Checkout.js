import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import { db } from '../../firebase/config'
import { NavLink } from 'react-router-dom'
import { collection, addDoc, Timestamp, doc, updateDoc, getDocs, getDoc, writeBatch, documentId,query ,where } from 'firebase/firestore'
import Loader from '../loader/Loader'
import { prettyDOM } from '@testing-library/react'

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
        <div className='my-5 mx-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2>CheckOut</h2>

            {
                orderId
                ? <>
                    <h2>Compra OK</h2>
                    <p>Tu número de orden es: {orderId}</p>
                    <NavLink to="/" className='bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4'>Volver</NavLink>
                </>
                : <>
                        <form onSubmit={handleSubmit}>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Nombre'
                            value={values.name}
                            >
                        </input>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder='Email'
                            value={values.email}
                            >
                        </input>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="tel"
                            onChange={handleInputChange}
                            type="tel"
                            placeholder='Telefono'
                            value={values.tel}
                            >
                        </input>
                        <button 
                        className='bg-gray-600 font-semibold text-white rounded-full mt-4 pt-2 pb-2 px-4'
                        type='submit'>
                        
                            Enviar
                        </button>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2021 MantisCosmik. All rights reserved.
                    </p>
                </>
            }

            

            
        </div>

       
    )
}
export default Checkout
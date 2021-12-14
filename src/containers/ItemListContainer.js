import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getItems, getItemsByCategory } from '../services/getItem';
import ItemList from "../components/itemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../src/firebase/config"

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([])

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
            })

    }, [categoryId]);


    return (
        <>
        {items.length !== 0 ? <ItemList items = {items} />
        :
        null
        }
        </>
    )

    
}


export default ItemListContainer
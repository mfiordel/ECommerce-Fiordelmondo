import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getItem } from '../services/getItem'
import ItemDetail from '../components/itemDetail/ItemDetail';
import { db } from "../../src/firebase/config";
import { doc, getDoc } from "firebase/firestore"
import Loader from "../components/loader/Loader";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState()


    useEffect(() => {

       const docRef = doc(db, "servicios", id)

        getDoc(docRef)
            .then((doc) => {
                const data = {
                    id: doc.id,
                    ...doc.data()
                }
                setItemDetail( data )
            })

    }, [])

    return (
        <>
        {
            itemDetail !== undefined ?
            <ItemDetail {...itemDetail} />
            :
            <Loader/>
        }
        </>
    )

    
}

export default ItemDetailContainer
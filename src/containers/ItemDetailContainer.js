import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getItem } from '../services/GetItem'
import ItemDetail from '../components/itemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {

        ( async () => {
            const itemDetail = await getItem(id);
            setItemDetail(itemDetail);
        })()

    }, [id])

    return (
        <>
        {
            itemDetail !== undefined ?
            <ItemDetail detailItem = {itemDetail} />
            :
            null
        }
        </>
    )

    
}

export default ItemDetailContainer
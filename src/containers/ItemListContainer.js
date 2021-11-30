import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getItems, getItemsByCategory } from '../services/GetItem';
import ItemList from "../components/itemList/ItemList";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            if (categoryId !== undefined){
                const allItems = await getItemsByCategory(categoryId);
                setItems(allItems)
            }
            else {
                const allItems = await getItems()
                setItems(allItems)
            }
        })()
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
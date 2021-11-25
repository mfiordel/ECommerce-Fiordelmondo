import React, { useEffect, useState} from "react";
import ItemList from "../components/itemList/ItemList";

const ItemListContainer = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())
        .then( data => {
            setCharacters(data.results)
        })
        .catch(err => err)
    }, [])

    setTimeout(useEffect, 2000);

    return (
        <ItemList characters = {characters} />
    )

    
}


export default ItemListContainer
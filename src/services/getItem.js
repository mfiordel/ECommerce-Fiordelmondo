export const getItems = () => {

    return new Promise ((acc, rej) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then( res => res.json())
        .then( data => {
            console.log(data.results);
            acc(data.results);
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })
    })
}

export const getItem = (id) => {

    console.log(id);

    return new Promise ((acc, rej) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then( res => res.json())
        .then( data => {
            console.log(data.results);
            acc(data);
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })    
    })
}

export const getItemsByCategory = (category) => {

    return new Promise ((acc, rej) => {
        fetch(`https://rickandmortyapi.com/api/character?species=${category}`)
        .then( res => res.json())
        .then( data => {
            console.log(data.results);
            acc(data.results)
        })
        .catch( err => {
            alert("Hubo un error: ", err.message)
            rej(err.message)
        })
    })
}
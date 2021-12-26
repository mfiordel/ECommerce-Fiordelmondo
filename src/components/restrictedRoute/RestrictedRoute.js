import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const RestrictedRoute = ({children}) => {

    const {logged} = useContext(UserContext);
    return logged ? children : <Navigate to = '/'/>

}

export default RestrictedRoute
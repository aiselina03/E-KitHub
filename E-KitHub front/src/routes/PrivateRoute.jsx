import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({roles}) {
    const {decode} = useContext(UserContext)
  return (
    roles.includes(decode?.role) ? <Outlet/> : <Navigate to={"/"}></Navigate>
  )
}

export default PrivateRoute
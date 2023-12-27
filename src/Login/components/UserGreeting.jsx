import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../LoginContext'
import useRemove from '../hooks/useRemove'
import useLocalUser from '../hooks/useLocalUser'

const UserGreeting = () => {
    const {user} = useContext(LoginContext)
    const {removeUser} = useRemove()

    useLocalUser()

  return (
    <>
    {user !== null ? 
    <> 
    <h1>Hola {user.name}</h1>
    <button onClick={removeUser}>cambiar usuario?</button></> 
    :
    <> </>
    }


    </>
  )
}

export default UserGreeting
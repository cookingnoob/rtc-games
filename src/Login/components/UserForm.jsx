import React, { useContext } from 'react'
import { LoginContext } from '../LoginContext'
import useSubmit from '../hooks/useSubmit';

const UserForm = () => {
    const {textInput, user} = useContext(LoginContext);
    const {handleInputChange, handleSubmitUser} = useSubmit()
  return (
    <>
      {user === null ?
    <>
    <h1>Bienvenido!</h1>
    <h2>crea un usuario</h2>
    <input type="text" placeholder='usuario' value={textInput} onChange={handleInputChange}/>
    <button onClick={handleSubmitUser}>Aceptar</button>
    </>
    :
    <></>
    }
    </>
  )
}

export default UserForm
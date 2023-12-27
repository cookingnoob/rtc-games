import React, { useContext } from 'react'
import { LoginContext } from '../LoginContext';

const useRemove = () => {
    const {setUser, setTextInput} = useContext(LoginContext)
    const removeUser = () => {
        localStorage.removeItem('user');
        setUser(null);
        setTextInput('');
    }
  return {removeUser}
}

export default useRemove
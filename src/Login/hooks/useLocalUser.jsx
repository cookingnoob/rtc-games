import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../LoginContext';

const useLocalUser = () => {
    const {setUser} = useContext(LoginContext)
    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setUser(parsedUserData);
        }
      }, []);
    

  return {useLocalUser}
}

export default useLocalUser
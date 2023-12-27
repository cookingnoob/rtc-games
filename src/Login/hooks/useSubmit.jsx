import { useContext } from 'react'
import { LoginContext } from '../LoginContext'

const useSubmit = () => {
    const {textInput, setTextInput, setUser, user} = useContext(LoginContext)

    const handleSubmitUser = () => {
        const userName = {name: textInput}
        localStorage.setItem('user', JSON.stringify(userName))
        setUser(userName)
    }

    const handleInputChange = (e) => {
        setTextInput([e.target.value])
    }

  return {handleInputChange, handleSubmitUser}
}

export default useSubmit
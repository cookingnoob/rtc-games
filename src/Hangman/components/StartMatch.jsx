import { useContext } from 'react'
import StartButton from './StartButton'
import { LoginContext } from '../../Login/LoginContext'

const StartMatch = () => {
  const {user} = useContext(LoginContext)
  return (
    <>
    <h2>{user.name}, Listo para jugar?🤓</h2> 
    <StartButton/>
    </>
  )
}

export default StartMatch
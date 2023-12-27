import { useContext } from 'react'
import StartButton from './StartButton'
import { HangmanContext } from '../HangmanContext'
import { LoginContext } from '../../Login/LoginContext'
import useLocalUser from '../../Login/hooks/useLocalUser'

const WinWindow = () => {
  const {wordToGuess} = useContext(HangmanContext)
  const {user} = useContext(LoginContext)
  useLocalUser()
  return (
    <>    
    <h1>{user.name}, Ganaste!! 🥳,</h1> 
    <h1>{wordToGuess}</h1>
    <StartButton/></>
  )
}

export default WinWindow
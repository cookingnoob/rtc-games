import { useContext } from 'react'
import StartButton from './StartButton'
import { HangmanContext } from '../HangmanContext'
import { LoginContext } from '../../Login/LoginContext'
import useLocalUser from '../../Login/hooks/useLocalUser'

const YouLostWindow = () => {
const {wordToGuess} = useContext(HangmanContext)
const {user} = useContext(LoginContext)
useLocalUser()
  return (
    <>
      <h1>La palabra era {wordToGuess}</h1>
      <h2>{user.name} Perdiste 😰 quieres volver a intentar?</h2> 
      <StartButton/>
    </>
  )
}

export default YouLostWindow
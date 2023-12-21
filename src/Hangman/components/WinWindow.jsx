import { useContext } from 'react'
import StartButton from './StartButton'
import { HangmanContext } from '../HangmanContext'

const WinWindow = () => {
  const {wordToGuess} = useContext(HangmanContext)
  return (
    <>    
    <h1>Ganaste!! 🥳,</h1> 
    <h1>{wordToGuess}</h1>
    <StartButton/></>
  )
}

export default WinWindow
import React, { useContext } from 'react'
import StartButton from './StartButton'
import { HangmanContext } from '../HangmanContex'

const YouLostWindow = () => {
const {wordToGuess} = useContext(HangmanContext)
  return (
    <>
      <h1>La palabra era {wordToGuess}</h1>
      <h2>Perdiste 😰 quieres volver a intentar?</h2> 
      <StartButton/>
    </>
  )
}

export default YouLostWindow
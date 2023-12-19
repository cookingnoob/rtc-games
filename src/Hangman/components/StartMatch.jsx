import React, { useContext } from 'react'
import StartButton from './StartButton'
import { HangmanContext } from '../HangmanContex'

const StartMatch = () => {
  const {setWordToGuess, listOfWords,setStrike,setLetterButtons} = useContext(HangmanContext)
  return (
    <>
    <h2>Listo para jugar?🤓</h2> 
    <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} />
    </>
  )
}

export default StartMatch
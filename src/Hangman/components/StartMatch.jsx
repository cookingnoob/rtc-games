import React from 'react'
import StartButton from './StartButton'

const StartMatch = ({setWordToGuess, listOfWords,setStrike,setLetterButtons}) => {
  return (
    <>
    <h2>Listo para jugar?🤓</h2> 
    <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} />
    </>
  )
}

export default StartMatch
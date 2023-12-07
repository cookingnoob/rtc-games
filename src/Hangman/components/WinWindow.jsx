import React from 'react'
import StartButton from './StartButton'

const WinWindow = ({setWordToGuess, listOfWords, setStrike, setLetterButtons}) => {
  return (
    <>    
    <h1>Ganaste!! 🥳</h1> 
    <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} /></>
  )
}

export default WinWindow
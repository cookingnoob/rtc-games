import React from 'react'
import StartButton from './StartButton'

const YouLostWindow = ({setWordToGuess, listOfWords, setStrike, setLetterButtons, wordToGuess}) => {

  return (
    <>
      <h1>La palabra era {wordToGuess}</h1>
      <h1>Perdiste 😰 quieres volver a intentar?</h1> 
      <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
    </>
  )
}

export default YouLostWindow
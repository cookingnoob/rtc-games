import React from 'react'
import LetterButtons from './LetterButtons'

const PlayingWindow = ({strike, wordToGuess, setWordToGuess, setStrike, setLetterButtons, letterButtons, getTreatedWord}) => {

  return (
    <>
    {strike}
     <h1>{getTreatedWord}</h1>
    <LetterButtons wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
    </>
  )
}

export default PlayingWindow
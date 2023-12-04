import React, { useMemo, useState } from 'react'

const StartButton = ({setWordToGuess, wordToGuess, listOfWords, setStrike}) => {

    const startGame = () => {
          const randomNumber = Math.floor(Math.random() * listOfWords.length);
          const selectWord = listOfWords[randomNumber];
          setWordToGuess(selectWord);
          setStrike('');
          console.log(selectWord)
      }

  return (
    <>
    <button onClick={startGame}>Empieza la Partida</button>
    </>
  )
}

export default StartButton
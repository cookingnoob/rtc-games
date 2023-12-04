import React, { useState } from 'react'

const StartButton = ({setWordToGuess, wordToGuess, listOfWords}) => {
    
      const startGame = () => {
        if(wordToGuess == ''){
          const randomNumber = Math.floor(Math.random() * listOfWords.length);
          const selectWord = listOfWords[randomNumber];
          setWordToGuess(selectWord);
        } else{
          return
        }
      }
  return (
    <>
    <button onClick={startGame}>Empieza la Partida</button>
    </>
  )
}

export default StartButton
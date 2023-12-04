import React, { useState } from 'react'

const LetterButtons = ({wordToGuess, setStrike, strike, letterButtons, setLetterButtons}) => {
    
    const checkLetter = (e) => {
        if(wordToGuess === undefined){
            return
        }else if (wordToGuess.selectedWord.word.includes(e.target.value)){
        console.log(e.target.value)
        } else {
            const newKeyboard = letterButtons.filter((button) => button != e.target.value)
            setLetterButtons(newKeyboard)
            setStrike(strike + '❌')
        } 
    }

  return (
    <>
      {letterButtons.map((letter, index) => {
    return <button key={index} value={letter} onClick={checkLetter}>{letter}</button>
     })}
    </>
  )
}

export default LetterButtons
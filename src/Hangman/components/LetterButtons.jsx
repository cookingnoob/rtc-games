import React, { useState } from 'react'

const LetterButtons = ({wordToGuess, setStrike, strike, letterButtons, setLetterButtons}) => {
    
    const checkLetter = (e) => {
      if (wordToGuess.includes(e.target.value)){
        correctLetter(e)
        } else {
        wrongLetter(e)
        } 
    }

    const correctLetter = (e) => {
        const originalWordArray = wordToGuess.split('');
        const indexOfCorrectLetter = originalWordArray.map((letter, index) => {
            if(letter == e.target.value){
                return index
            }
        }).filter((index) => {
          if(index == 0){
            return 0
          }
          if(index != null) {
            return index
          }
        })
        console.log(indexOfCorrectLetter)
    }

const wrongLetter = (e) => {
    const newKeyboard = letterButtons.filter((button) => button != e.target.value)
            setLetterButtons(newKeyboard)
            setStrike(strike + '❌')
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
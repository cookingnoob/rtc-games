import React, { useState } from 'react'

const LetterButtons = ({wordToGuess, setStrike, strike, letterButtons, setLetterButtons, playerString, setPlayerString}) => {
    
    const checkLetter = (e) => {
      if (wordToGuess.includes(e.target.value)){
        const letter = e.target.value;
        const index = getIndex(e);
        const updatedGuessWord = updateGuessWord(letter, index)
        setPlayerString(updatedGuessWord)
        } else {
          setStrikeAndRemoveLetter(e)
        } 
    }
//no funciona bien. O crea muchos arrays o retorna undefined
    const updateGuessWord = (letter, index) => {
      const separatePlayerString = playerString.split('');
      const newArray = index.map(index => {
        separatePlayerString[index] = letter;
        return separatePlayerString
     })
     const newWord = separatePlayerString.join('')
     return newWord
    }
    

    const getIndex = (e) => {
        const originalWordArray = wordToGuess.split('');
        const indexOfCorrectLetter = []
          originalWordArray.forEach((letter, index) => {
            if(letter === e.target.value){
              indexOfCorrectLetter.push(index)
            }
          })
        return indexOfCorrectLetter
    }

const setStrikeAndRemoveLetter = (e) => {
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
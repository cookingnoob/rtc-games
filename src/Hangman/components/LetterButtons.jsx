import React, { useState } from 'react'

const LetterButtons = ({wordToGuess, setStrike, strike, letterButtons, setLetterButtons}) => {
    


    const checkLetter = (e) => {
      if (wordToGuess.selectedWord.word.includes(e.target.value)){
        correctLetter(e)
        } else {
        wrongLetter(e)
        } 
    }

//crea un teclado para ver si las letras estan dentro de la palabra a adivinar
    //ya consigue el numero de indice
    //falta que solo consiga ese numero y quite los demas elementos del array
    //cambiar ese indice en el otro elemento del objeto
    const correctLetter = (e) => {
        const originalWordArray = wordToGuess.selectedWord.word.split('');
        const indexOfCorrectLetter = originalWordArray.map((letter, index) => {
            if(letter == e.target.value){
                return index
            }
        }).filter((index) => {
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
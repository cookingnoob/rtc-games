import React from 'react'

const LetterButtons = ({wordToGuess}) => {
    const letterButtons = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const checkLetter = (e) => {
        wordToGuess.includes(e.target.value) ? console.log(e.target.value) : console.log('fallaste')
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
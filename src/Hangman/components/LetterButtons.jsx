import React, { useState } from 'react'

const LetterButtons = ({wordToGuess, setStrike, strike}) => {
    const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

    const checkLetter = (e) => {
       if (wordToGuess.includes(e.target.value)){
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
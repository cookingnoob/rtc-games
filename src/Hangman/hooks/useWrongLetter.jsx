import React, { useContext } from 'react'
import { HangmanContext } from '../HangmanContex'

const useWrongLetter = () => {
const {letterButtons, setLetterButtons, setStrike, strike} = useContext(HangmanContext)
const setStrikeAndRemoveLetter = (e) => {
    const newKeyboard = letterButtons.filter((button) => button != e.target.value)
            setLetterButtons(newKeyboard)
            setStrike(strike + '❌')
}
  return{setStrikeAndRemoveLetter}
}

export default useWrongLetter
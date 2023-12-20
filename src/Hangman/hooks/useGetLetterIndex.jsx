import React, { useContext } from 'react'
import { HangmanContext } from '../HangmanContex';

const useGetLetterIndex = () => {
const{wordToGuess} = useContext(HangmanContext)
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
  return {getIndex}
}

export default useGetLetterIndex
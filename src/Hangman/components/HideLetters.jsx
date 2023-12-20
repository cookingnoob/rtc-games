import { useContext, useEffect } from 'react'
import { HangmanContext } from '../HangmanContex'
import useHideLetters from '../hooks/useHideLetters';

const HideLetters = () => {
  const {wordToGuess, playerString} = useContext(HangmanContext);
  useHideLetters()
  return (
    <>
    {wordToGuess == undefined ?
    <></> :
    <h1>{playerString}</h1> 
    }
    </>
  )
}

export default HideLetters
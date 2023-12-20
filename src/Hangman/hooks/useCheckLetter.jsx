import { useContext } from 'react'
import { HangmanContext } from '../HangmanContext';

import useGetLetterIndex from '../hooks/useGetLetterIndex';
import useUpdateWord from '../hooks/useUpdateWord';
import useWrongLetter from '../hooks/useWrongLetter';

const useCheckLetter = () => {
    const {wordToGuess, setPlayerString} = useContext(HangmanContext)
    const {getIndex} = useGetLetterIndex()
    const {updateGuessWord} = useUpdateWord();
    const {setStrikeAndRemoveLetter} = useWrongLetter()

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

  return {checkLetter}
}

export default useCheckLetter
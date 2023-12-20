import { useContext } from 'react'
import { HangmanContext } from '../HangmanContex';
import useGetLetterIndex from '../hooks/useGetLetterIndex';
import useUpdateWord from '../hooks/useUpdateWord';
import useWrongLetter from '../hooks/useWrongLetter';

const LetterButtons = () => {
    const {wordToGuess, letterButtons, setPlayerString} = useContext(HangmanContext)
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




  return (
    <div className='lettersContainer'>
      {letterButtons.map((letter, index) => {
        return <button key={index} value={letter} onClick={checkLetter}className='letterButton'>{letter}</button>
     })}
    </div>
  )
}

export default LetterButtons
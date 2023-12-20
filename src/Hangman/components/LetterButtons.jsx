import { useContext } from 'react'

import useCheckLetter from '../hooks/useCheckLetter';
import { HangmanContext } from '../HangmanContext';

const LetterButtons = () => {
    const {letterButtons} = useContext(HangmanContext)
 const {checkLetter} = useCheckLetter()

  return (
    <div className='lettersContainer'>
      {letterButtons.map((letter, index) => {
        return <button key={index} value={letter} onClick={checkLetter}className='letterButton'>{letter}</button>
     })}
    </div>
  )
}

export default LetterButtons
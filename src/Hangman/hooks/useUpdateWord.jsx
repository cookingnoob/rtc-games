import { useContext } from 'react'
import { HangmanContext } from '../HangmanContex';

const useUpdateWord = () => {
    const {playerString} = useContext(HangmanContext)
    const updateGuessWord = (letter, index) => {
        const separatePlayerString = playerString.split('');
        index.map(index => {
          separatePlayerString[index] = letter;
          return separatePlayerString
       })
       const newWord = separatePlayerString.join('')
       return newWord
      }
      
  
  return {updateGuessWord}
}

export default useUpdateWord
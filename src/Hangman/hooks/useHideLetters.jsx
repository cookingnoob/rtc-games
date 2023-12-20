import { useContext, useEffect } from 'react'
import { HangmanContext } from '../HangmanContext'

const useHideLetters = () => {
    const {wordToGuess, setPlayerString} = useContext(HangmanContext)
    
    useEffect(() => {
        if(wordToGuess === undefined){
            return
        }
        const lettersOfTheWord = wordToGuess.split('');
        const changeLetters = lettersOfTheWord.map ((letter) => {
            const randomNumber = Math.floor(Math.random() * 2);
           return randomNumber < 1 ? letter : '_'
        })
         setPlayerString(changeLetters.join(''));
   },[wordToGuess])

}

export default useHideLetters
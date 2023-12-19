import { useContext, useEffect } from 'react'
import { HangmanContext } from '../HangmanContex'

const HideLetters = () => {
   const {wordToGuess, setPlayerString, playerString} = useContext(HangmanContext)
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
import { useEffect } from 'react'

const HideLetters = ({wordToGuess, setPlayerString, playerString}) => {
   
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
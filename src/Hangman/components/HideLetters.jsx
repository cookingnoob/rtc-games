import { useMemo } from 'react'

const HideLetters = ({wordToGuess}) => {

    const hideLetters = useMemo(() => {
        if(wordToGuess === undefined){
            return
        }
        const lettersOfTheWord = wordToGuess.split('');
        const changeLetters = lettersOfTheWord.map ((letter) => {
            const randomNumber = Math.floor(Math.random() * 2);
           return randomNumber < 1 ? letter : '_'
        })
        return changeLetters.join('');
        
   },[wordToGuess])

  return (
    <>
    {wordToGuess == undefined ?
    <></> :
    <h1>{hideLetters}</h1> 
    }
    </>
  )
}

export default HideLetters
import React, { useEffect, useRef } from 'react'

const useGuessWord = (wordToGuess) => {
    const wordWithHiddenLetters = useRef('');

    const hideLetters = (word) => {
        if(word === undefined){
            return
        }
        const lettersOfTheWord = word.split('');
        const changeLetters = lettersOfTheWord.map ((letter) => {
            const randomNumber = Math.floor(Math.random() * 2);
           return randomNumber < 1 ? letter : '_'
        })
        return changeLetters.join('');
        };
     
    wordWithHiddenLetters.current = hideLetters(wordToGuess)

    return wordWithHiddenLetters.current
}

export default useGuessWord
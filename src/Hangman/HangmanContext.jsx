import { createContext, useState } from "react";

export const HangmanContext = createContext();

export const HangmanProvider = ({children}) => {
    const [wordToGuess, setWordToGuess] = useState('');
    const [strike, setStrike] = useState('')
    const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
    const [playerString, setPlayerString] = useState('')
    const [clue, setClue] =useState('')
    const listOfWords = ['celular', 'paella', 'computadora', 'audifonos', 'chocolate', 'huevo', 'guitarra', 'flauta', 'violin', 'libro']
    
    const ContextValue = {
        wordToGuess, 
        setWordToGuess,
        strike, 
        setStrike,
        letterButtons,
        setLetterButtons,
        playerString, 
        setPlayerString,
        listOfWords,
        clue,
        setClue
    }

    return(
        <HangmanContext.Provider value={ContextValue}>
            {children}
        </HangmanContext.Provider>
    )
}
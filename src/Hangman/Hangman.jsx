import{ useRef, useState } from 'react'
import StartButton from './components/StartButton'
import useGuessWord from './hooks/useGuessWord';
import Clues from './components/Clues';
import StartMatch from './components/StartMatch';
import PlayingWindow from './components/PlayingWindow';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [strike, setStrike] = useState('')
  const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

  const listOfWords = ['celular']
  const getTreatedWord = useGuessWord(wordToGuess)

  return (
    <>
    <h1>Hangman</h1>
    
  
    {strike === '❌❌❌❌❌❌' ? 
      <> 
      <h1>Perdiste 😰 quieres volver a intentar?</h1> 
      <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
      </> 
    : 
      <>
      {wordToGuess == '' ? 
        <>
        <StartMatch setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
        </>
      : 
        <>
     <PlayingWindow getTreatedWord={getTreatedWord}wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
        </> }
      </>
    }
      <Clues wordToGuess={wordToGuess} strike={strike}/> 
    
    
    </>
  )
}

export default Hangman


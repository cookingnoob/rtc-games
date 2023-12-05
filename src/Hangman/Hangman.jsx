import{ useRef, useState } from 'react'
import StartButton from './components/StartButton'
import LetterButtons from './components/LetterButtons';
import useGuessWord from './hooks/useGuessWord';
import Clues from './components/Clues';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [strike, setStrike] = useState('')
  const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

  const listOfWords = ['celular']
  const getTreatedWord = useGuessWord(wordToGuess)

  return (
    <>
    <h1>Hangman</h1>
    <h1>{wordToGuess}</h1>
  
    {strike === '❌❌❌❌❌❌' ? 
      <> 
      <h1>Perdiste 😰 quieres volver a intentar?</h1> 
      <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
      </> 
    : 
      <>
      {strike}
      {wordToGuess == '' ? 
        <>
        <h2>Listo para jugar?🤓</h2> 
        <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} />
        </>
      : 
        <>
      <h1>{getTreatedWord}</h1>
      <LetterButtons wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
        </> }
      </>
    }
      <Clues wordToGuess={wordToGuess} strike={strike}/> 
    
    
    </>
  )
}

export default Hangman


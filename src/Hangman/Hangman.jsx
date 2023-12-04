import{ useState } from 'react'
import StartButton from './components/StartButton'
import LetterButtons from './components/LetterButtons';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [wrongLetters, setWrongLetter] = useState();
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado', 'gimnasio', 'explorador', 'audifonos', 'paella', 'lentejas', 'bocina']
//escoger una palabra random del array

  return (
    <>
    <h1>Hangman</h1>
    {wordToGuess == '' ? 
      <>
      <h1>Listo para jugar?</h1> 
      <StartButton wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} listOfWords={listOfWords}/>
      </>
    : 
      <>
    <h1>{wordToGuess}</h1>
    <LetterButtons wordToGuess={wordToGuess}/>
      </> }
    
    </>
  )
}

export default Hangman
import{ useState } from 'react'
import StartButton from './components/StartButton'
import LetterButtons from './components/LetterButtons';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [wrongLetters, setWrongLetter] = useState();
  const [strike, setStrike] = useState('')
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado', 'gimnasio', 'explorador', 'audifonos', 'paella', 'lentejas', 'bocina']
//escoger una palabra random del array

  return (
    <>
    <h1>Hangman</h1>
    {strike === '❌❌❌❌❌' ? <> 
    <h1>Perdiste</h1> 
    <StartButton wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike}/>
    </> : 
    <>
    {strike}
    {wordToGuess == '' ? 
      <>
      <h1>Listo para jugar?</h1> 
      <StartButton wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike}/>
      </>
    : 
      <>
    <h1>{wordToGuess}</h1>
    <LetterButtons wordToGuess={wordToGuess} setStrike={setStrike} strike={strike}/>
      </> }
    </>}

    
    </>
  )
}

export default Hangman
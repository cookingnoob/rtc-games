import{ useState } from 'react'
import StartButton from './components/StartButton'

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('')
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado', 'gimnasio', 'explorador', 'audifonos', 'paella', 'lentejas', 'bocina']

  //setea el estado WordToGuess con una palabra aleatorea del array listOfWords

//toma el valor WordToGuess y desaparece ciertos elementos

  return (
    <>
    {wordToGuess == '' ? <h1>Listo para jugar?</h1> : <h1>{wordToGuess}</h1>}
    <StartButton wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} listOfWords={listOfWords}/>
    
    </>
  )
}

export default Hangman
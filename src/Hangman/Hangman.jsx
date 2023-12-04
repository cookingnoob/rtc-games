import{ useState } from 'react'

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('')
  const listOfWords = ['celular', 'spiderman', 'nintendo', 'teclado', 'gimnasio', 'explorador', 'audifonos', 'paella', 'lentejas', 'bocina']

  const getWordFromList = () => {
    if(wordToGuess == ''){
      const randomNumber = Math.floor(Math.random() * listOfWords.length);
      const selectWord = listOfWords[randomNumber];
      setWordToGuess(selectWord);
    } else{
      return
    }
  }
getWordFromList()
  return (
    <>
    <h1>{wordToGuess}</h1>
    </>
  )
}

export default Hangman
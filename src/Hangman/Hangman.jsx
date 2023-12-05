import{ useState } from 'react'
import StartButton from './components/StartButton'
import LetterButtons from './components/LetterButtons';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState({word: ''});
  const [strike, setStrike] = useState('')
  const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])

  //separa la palabra del objeto en un array, cambia aleatoreamente las letras por '_' y retorna la nueva palabra
const hideLetters = (word) => {
  const lettersOfTheWord = word.split('');
  const changeLetters = lettersOfTheWord.map ((letter) => {
    const randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber < 1){
      return letter
    } else {
      return '_'
    }
  })
  const guessingWord = changeLetters.join('');
  return guessingWord
}

const listOfWords = [{word:'celular', wordForGuessing: hideLetters('celular')}, {word:'spiderman', wordForGuessing: hideLetters('spiderman')}, {word:'nintendo', wordForGuessing: hideLetters('nintendo')}, {word: 'teclado', wordForGuessing: hideLetters('teclado')}, {word:'gimnasio', wordForGuessing: hideLetters('gimnasio')}, {word: 'explorador', wordForGuessing: hideLetters('explorador')}, {word:'audifonos', wordForGuessing: hideLetters('audifonos')}, {word: 'paella', wordForGuessing: hideLetters('paella')}, {word: 'lentejas', wordForGuessing: hideLetters('lentejas')}, {word:'bocina', wordForGuessing: hideLetters('bocina')}]

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
      {strike}
      {wordToGuess.word == '' ? 
        <>
        <h2>Listo para jugar?🤓</h2> 
        <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} />
        </>
      : 
        <>
      <h1>{wordToGuess.selectedWord.wordForGuessing}</h1>
      <LetterButtons wordToGuess={wordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
        </> }
      </>
    }

    {strike === '❌❌❌' || strike === '❌❌❌❌' || strike === '❌❌❌❌❌'   ?
          <>
          <p>Pistas: </p>
          </> : 
          <>
          </>
    }
    
    </>
  )
}

export default Hangman

// {wordToGuess.selectedWord.word == '' ? <p>empezar partida</p> : <h1>{wordToGuess.selectedWord.word}</h1>}
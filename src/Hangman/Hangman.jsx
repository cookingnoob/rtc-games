import{ useState } from 'react'
import StartMatch from './components/StartMatch';
import PlayingWindow from './components/PlayingWindow';
import YouLostWindow from './components/YouLostWindow';
import WinWindow from './components/WinWindow';

const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState('');
  const [strike, setStrike] = useState('')
  const [letterButtons, setLetterButtons] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
  const [playerString, setPlayerString] = useState('')
  const listOfWords = ['celular', 'paella', 'computadora', 'audifonos', 'chocolate', 'huevo', 'guitarra', 'flauta', 'violin', 'libro']
  
  return (
    <>
    <h1>Hangman</h1>
  
    {strike === '❌❌❌❌❌❌' ? 
      <> 
    <YouLostWindow strike={strike} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
      </> 
    : 
      <>
      {wordToGuess == '' ? 
        <>
        <StartMatch setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
        </>
      : 
        <>
        {playerString === wordToGuess ? 
        <WinWindow strike={strike} setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons}/>
        :
        <PlayingWindow playerString={playerString} setPlayerString={setPlayerString} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
        }
        
        </> }
      </>
    }
    </>
  )
}

export default Hangman


import LetterButtons from './LetterButtons'
import Clues from './Clues'
import HideLetters from './HideLetters'

const PlayingWindow = ({strike, wordToGuess, setWordToGuess, setStrike, setLetterButtons, letterButtons}) => {

  return (
    <>
    <h1>{strike}</h1>
    {strike === '❌❌❌❌❌' ? <p>último intento💀</p> : <></>}
    <HideLetters wordToGuess={wordToGuess}/>
    <LetterButtons wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons}/>
    <Clues wordToGuess={wordToGuess} strike={strike}/> 
    </>
  )
}

export default PlayingWindow
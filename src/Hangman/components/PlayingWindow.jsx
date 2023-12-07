import LetterButtons from './LetterButtons'
import Clues from './Clues'
import HideLetters from './HideLetters'
import StartButton from './StartButton'

const PlayingWindow = ({playerString, setPlayerString, strike, wordToGuess, setWordToGuess, setStrike, setLetterButtons, letterButtons, listOfWords}) => {

  return (
    <>
    {playerString === wordToGuess ? <> 
    <h1>Ganaste!! 🥳</h1> 
    <StartButton setWordToGuess={setWordToGuess} listOfWords={listOfWords} setStrike={setStrike} setLetterButtons={setLetterButtons} />
    </> : 
    <>
       <h1>{strike}</h1>
    {strike === '❌❌❌❌❌' ? <p>último intento💀</p> : <></>}
    <HideLetters wordToGuess={wordToGuess} playerString={playerString} setPlayerString={setPlayerString}/>
    <LetterButtons wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} setStrike={setStrike} strike={strike} setLetterButtons={setLetterButtons} letterButtons={letterButtons} playerString={playerString} setPlayerString={setPlayerString}/>
    <Clues wordToGuess={wordToGuess} strike={strike}/> 
    </>}
 
    </>
  )
}

export default PlayingWindow
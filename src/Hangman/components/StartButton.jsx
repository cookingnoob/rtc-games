import { useContext } from "react";
import { HangmanContext } from "../HangmanContex";


const StartButton = () => {
const {setWordToGuess, listOfWords, setStrike, setLetterButtons} = useContext(HangmanContext)
    const startGame = () => {
          const randomNumber = Math.floor(Math.random() * listOfWords.length);
          const selectedWord = listOfWords[randomNumber];
          setWordToGuess(selectedWord);
          setStrike('');
          setLetterButtons(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
          
      }
  
  return (
    <>
    <button onClick={startGame}>Empieza la Partida</button>
    </>
  )
}

export default StartButton
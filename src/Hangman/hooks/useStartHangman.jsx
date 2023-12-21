import { useContext } from "react";
import { HangmanContext } from "../HangmanContext";

const useStartHangman = () => {
    const {setWordToGuess, listOfWords, setStrike, setLetterButtons, setClue} = useContext(HangmanContext)
    const startGame = () => {
          const randomNumber = Math.floor(Math.random() * listOfWords.length);
          const selectedWord = listOfWords[randomNumber];
          setWordToGuess(selectedWord);
          setStrike('');
          setLetterButtons(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
          setClue('')
      }
  return {startGame}
}

export default useStartHangman
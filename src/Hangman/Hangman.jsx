import { HangmanProvider } from "./HangmanContex"
import StartWindow from "./components/StartWindow"


const Hangman = () => {

  return (
  <HangmanProvider>
  <StartWindow/>
  </HangmanProvider>
  )
}

export default Hangman


import { HangmanProvider } from "./HangmanContext"
import GameFlowWindow from "./components/GameFlowWindow"


const Hangman = () => {

  return (
  <HangmanProvider>
  <GameFlowWindow/>
  </HangmanProvider>
  )
}

export default Hangman


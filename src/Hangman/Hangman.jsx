import { LoginProvider } from "../Login/LoginContext"
import { HangmanProvider } from "./HangmanContext"
import GameFlowWindow from "./components/GameFlowWindow"


const Hangman = () => {

  return (
  <LoginProvider>
  <HangmanProvider>
  <GameFlowWindow/>
  </HangmanProvider>
  </LoginProvider>
  )
}

export default Hangman


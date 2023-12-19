import { useContext } from 'react'
import ChooseValue from './ChooseValue';
import StartGame from './StartGame';
import PlayingWindow from './PlayingWindow';
import { TicTacToeContext } from '../TicTacToeContext';

const StartWindow = () => {
  const { text } = useContext(TicTacToeContext)
  return (
    <div className="ticPlayingWindow">
      <h1 className="gameTitle">Tic Tac Toe</h1>
      <h2 className="instructionText">{text}</h2>
      <ChooseValue />
      <StartGame />
      <PlayingWindow />
    </div>

  )
}


export default StartWindow
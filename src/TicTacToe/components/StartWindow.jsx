import { useContext } from 'react'
import ChooseValue from './ChooseValue';
import StartGame from './StartGame';
import PlayingWindow from './PlayingWindow';
import { TicTacToeContext } from '../TicTacToeContext';
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';

const StartWindow = () => {
  const { text } = useContext(TicTacToeContext)
  const {user} = useContext(LoginContext)
  useLocalUser()
  return (
    <>
    {user !== null ?     
    <div className="ticPlayingWindow">
    <h1>Hola {user.name}!</h1>
    <h1 className="gameTitle">Tic Tac Toe</h1>
    <h2 className="instructionText">{text}</h2>
    <ChooseValue />
    <StartGame />
    <PlayingWindow />
  </div>
:
  <h1>Inicia sesión para jugar</h1>}
</>

  )
}


export default StartWindow
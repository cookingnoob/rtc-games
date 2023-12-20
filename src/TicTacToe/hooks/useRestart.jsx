import { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const useRestart = () => {
    const{setBoard, setPlayer, setComputer, setText, setTurn, setWinner} = useContext(TicTacToeContext)
    //takes all the values to what they were when the match started
    const resetGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setPlayer(null);
        setComputer(null);
        setText('Escoge una ficha');
        setTurn(null);
        setWinner(null)
      }
  return {resetGame}
}

export default useRestart
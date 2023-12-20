import { useCallback, useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import useGameState from './useGameState';
import useTurn from './useTurn';

const useBoardInput = () => {
    const {player, board, winner, turn, setBoard, setText} = useContext(TicTacToeContext);
    const {checkTie, checkWinner} = useGameState() 
    const {passTurnTo} = useTurn()
  

    const handleBoardInput = useCallback(
      (index, currentPlayer) => {
        if(!isValidMove(index)) return;
        addValueToBoard(currentPlayer, index)
        passTurnTo(turn === 'computadora' ? 'player' : 'computadora')
        checkWinner(board);
        checkTie(board)
      }
      , [winner, turn]);

    const isValidMove = (index) => {
        if (player == null) {
            setText("Has clic en el botón para iniciar la partida");
            return;
          } else if (board[index] !== null) {
            return;
          } else if (winner != null) {
            return
          }
          return true
      }
  
    const addValueToBoard = (currentPlayer, index) => {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
      }
  return {handleBoardInput}
}

export default useBoardInput
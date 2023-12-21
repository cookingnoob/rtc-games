import { useCallback, useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import useGameState from './useGameState';
import useTurn from './useTurn';

const useBoardInput = () => {
    const {player, board, winner, turn, setBoard, setText} = useContext(TicTacToeContext);

    const {checkTie, checkWinner} = useGameState()

    const {passTurnTo} = useTurn()

    const handleBoardInput = (index, currentPlayer) => {
        if (player == null) {
          setText("Has clic en el botón para iniciar la partida");
          return;
        } else if (board[index] !== null) {
          return;
        } else if (winner != null) {
          return
        }

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (turn === 'computadora') {
          passTurnTo('player')
        } else if (turn === 'player') {
          passTurnTo('computadora')
        }
        checkWinner(newBoard);
        checkTie(newBoard)
      }



  return {handleBoardInput}
}

export default useBoardInput
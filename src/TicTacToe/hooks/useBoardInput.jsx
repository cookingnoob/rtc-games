import {  useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import useGameState from './useGameState';
import useTurn from './useTurn';

const useBoardInput = () => {
    const {isBoardDisabled, player, board, winner, turn, setBoard, setText} = useContext(TicTacToeContext);
    const {checkTie, checkWinner} = useGameState()
    const {passTurnTo} = useTurn()

    //updates board with current player value
    const handleBoardInput = (index, currentPlayer) => {
      //checks if it is a valid move and if the winner has been declared
      if(!isValidMove(index)){
        return;
      }
      //updates board with value
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard)
      
        passTurnTo(turn === 'computadora' ? 'player' : 'computadora')
        checkWinner(newBoard);
        checkTie(newBoard)
      }


      const isValidMove = (index) => {
        if (player == null) {
          setText("Has clic en el botón para iniciar la partida");
          return false
        } else if (isBoardDisabled){
          return false
        }else if (board[index] !== null) {
          return false
        } else if (winner != null) {
          return false
        }
        return true
      }
      

  return {handleBoardInput}
}

export default useBoardInput
import React, { useCallback, useContext } from 'react'
import Board from './Board'
import Computer from './Computer'
import ResetButton from './ResetButton'
import { TicTacToeContext } from '../TicTacToeContext'
import useGameState from '../hooks/useGameState'
import useTurn from '../hooks/useTurn'

const PlayingWindow = () => {
  const { setText, board, setBoard, player, turn, winner } = useContext(TicTacToeContext);

  const {checkTie, checkWinner} = useGameState()
  const {passTurnTo} = useTurn()
  
  const handleBoardInput = useCallback(
    (index, currentPlayer) => {
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
    , [winner, turn]);

  return (
    <div className='ticBoardWindow'>
      {turn != null && player != null ? <>
        <Board handleBoardInput={handleBoardInput} />
        <Computer handleBoardInput={handleBoardInput} />
        <ResetButton />
      </> : <></>}

    </div>
  )
}

export default PlayingWindow
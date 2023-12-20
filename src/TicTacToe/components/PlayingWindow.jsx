import React, { useCallback, useContext } from 'react'
import Board from './Board'
import Computer from './Computer'
import ResetButton from './ResetButton'
import { TicTacToeContext } from '../TicTacToeContext'
import useGameState from '../hooks/useGameState'

const PlayingWindow = () => {
  const { setText, board, setBoard, player, setTurn, turn, winner } = useContext(TicTacToeContext);
  const {checkTie, checkWinner} = useGameState()
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


  //cambia el estado de turno para saber quien esta jugando
  const passTurnTo = (nextPlayer) => {
    if (nextPlayer === null) {
      return;
    } else if (nextPlayer === "computadora") {
      setTurn("computadora");
      setText('Turno de la computadora')
    } else if (nextPlayer === "player") {
      setTurn("player");
      setText('Turno del jugador')
    }
  };

  //Checa si alguien gano

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
import React, { useCallback, useContext } from 'react'
import Board from './Board'
import Computer from './Computer'
import ResetButton from './ResetButton'
import { TicTacToeContext } from '../TicTacToeContext'

const PlayingWindow = () => {
  const { setText, board, setBoard, player, setTurn, turn, winningCombinations, winner, setWinner } = useContext(TicTacToeContext);

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
  const checkWinner = (board) => {
    winningCombinations.forEach(combination => {
      const [a, b, c] = combination;
      if (board[a] != null) {
        if (board[a] == board[b] && board[b] == board[c] && board[a] == board[c]) {
          if (turn == 'computadora') {
            setWinner('computadora')
            setText(`Ganó la computadora!! 🤖`);
          } else if (turn == 'player') {
            setWinner('jugador')
            setText('Gano el jugador 🧘🏽')
          }
        }
      }
    }
    )
  }

  const checkTie = (board) => {
    if (board.every(cell => cell != null)) {
      setText('Empate')
    }
  }
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
import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const useGameState = () => {
    const {setWinner, setText, winningCombinations, turn} = useContext(TicTacToeContext);

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

  return {checkTie, checkWinner}
  
}

export default useGameState
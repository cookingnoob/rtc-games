import  { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const useGameState = () => {
    const {setWinner, setText, winningCombinations,board, turn} = useContext(TicTacToeContext);
    //checks if one of the possible winning combinations has been declared
    //if there is a winner it sets winner and text state

    const checkWinner = (newBoard) => {
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
    
      const checkTie = () => {
        if (board.every(cell => cell != null)) {
          setText('Empate')
        }
      }



  return {checkTie, checkWinner}
  
}

export default useGameState
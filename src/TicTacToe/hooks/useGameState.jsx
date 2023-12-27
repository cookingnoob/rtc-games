import { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';

const useGameState = () => {
    const {setWinner, setText, winningCombinations, turn, winner} = useContext(TicTacToeContext);
    const {user} = useContext(LoginContext)
    useLocalUser()
  //declares winner if one of the conditions has been met
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
                setText(`Gano ${user.name} 🧘🏽`)
              }
            }
          }
        }
        )
      }
      //if no one won it is a tie
      const checkTie = (board) => {
        if (board.every(cell => cell != null && winner === null)) {
          setText('Empate')
        }
      }

  return {checkTie, checkWinner}

}

export default useGameState
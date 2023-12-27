import { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';

const useTurn = () => {
    const {setTurn, setText} = useContext(TicTacToeContext)
    const {user} = useContext(LoginContext)
    useLocalUser()
    //it passes the turn to the next player whos playing, declares new turn and text state
    //It recieves the same name as it passes because player passes computer and computer passes player
    const passTurnTo = (nextPlayer) => {
        if (nextPlayer === null) {
          return;
        } else if (nextPlayer === "computadora") {
          setTurn("computadora");
          setText('Turno de la computadora')
        } else if (nextPlayer === "player") {
          setTurn("player");
          setText(`Turno de ${user.name}`)
        }
      };
    
  return {passTurnTo}
}

export default useTurn
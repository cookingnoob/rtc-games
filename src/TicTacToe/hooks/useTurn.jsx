import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const useTurn = () => {
    const {setTurn, setText} = useContext(TicTacToeContext)

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
    
  return {passTurnTo}
}

export default useTurn
import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const useStartGame = () => {
    const {setTurn, setText} = useContext(TicTacToeContext)
//randomly chooses who begins the match, sets the turn and text states 
  const gameStart = () => {
      let randomNumber = Math.floor(Math.random() * 2);
        if (randomNumber === 0) {
          setTurn("computadora");
          setText("La computadora comienza la partida");
        } else {
          setTurn("player");
          setText("El jugador comienza la partida");
            }
    };
  return {gameStart}
}

export default useStartGame
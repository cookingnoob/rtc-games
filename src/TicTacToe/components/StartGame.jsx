import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const StartGame = () => {
const {turn,setTurn, setText, player} = useContext(TicTacToeContext)
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
  return (
    <>
    {turn == null && player != null ? <button onClick={gameStart}>Empieza la partida</button> : <></>}
    
    </>
  )
}

export default StartGame
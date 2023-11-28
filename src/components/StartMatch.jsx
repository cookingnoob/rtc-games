import React from 'react'

const StartMatch = ({turn, setTurn, setText}) => {

const gameStart = () => {
    if (turn == null) {
      let randomNumber = Math.floor(Math.random() * 2);
      if (randomNumber === 0) {
        setTurn("computadora");
        setText("La computadora comienza la partida");
      } else {
        setTurn("player");
        setText("El jugador comienza la partida");
      }
    }
  };

  return (
    <button onClick={gameStart}>Empieza la partida</button>
  )
}

export default StartMatch
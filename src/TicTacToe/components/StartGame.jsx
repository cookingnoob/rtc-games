import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';
import useStartGame from '../hooks/useStartGame';

const StartGame = () => {
  const {turn, player} = useContext(TicTacToeContext);
  const {gameStart} = useStartGame() 
  return (
    <>
    {turn == null && player != null ? <button onClick={gameStart}>Empieza la partida</button> : <></>}
    
    </>
  )
}

export default StartGame
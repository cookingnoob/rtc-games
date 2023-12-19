import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const ResetButton = () => {
  const{setBoard, setPlayer, setComputer, setText, setTurn, setWinner} = useContext(TicTacToeContext)
    const resetGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setPlayer(null);
        setComputer(null);
        setText('Escoge una ficha');
        setTurn(null);
        setWinner(null)
      }
  return (
    <>
        <button onClick={resetGame}>Reinicia el juego </button>
    </>
  )
}

export default ResetButton
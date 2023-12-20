import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'

const useRestart = () => {
    const{setBoard, setPlayer, setComputer, setText, setTurn, setWinner} = useContext(TicTacToeContext)
    const resetGame = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setPlayer(null);
        setComputer(null);
        setText('Escoge una ficha');
        setTurn(null);
        setWinner(null)
      }
  return {resetGame}
}

export default useRestart
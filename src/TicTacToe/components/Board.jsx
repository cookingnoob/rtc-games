import React, { useContext } from 'react'
import { TicTacToeContext } from '../TicTacToeContext';

const Board = () => {
  const{board, handleBoardInput, player} = useContext(TicTacToeContext)
  return (
    <div className="board">
    {board.map((cell, index) => {
      return (
        <button key={index} onClick={() => { handleBoardInput(index, player);}} value={cell} className="cell">{cell}</button>
      );
    })}
  </div>
  )
}

export default Board
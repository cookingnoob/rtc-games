import React from 'react'

const Board = ({board, handleBoardInput, player}) => {
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
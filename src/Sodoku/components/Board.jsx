import React, { useEffect } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

const Board = ({sudokuBoard }) => {

const gridArrays = [sudokuBoard.slice(0,9), sudokuBoard.slice(9,18),sudokuBoard.slice(18,27), sudokuBoard.slice(27,36),sudokuBoard.slice(36,45), sudokuBoard.slice(45,54),sudokuBoard.slice(54,63), sudokuBoard.slice(63,72),sudokuBoard.slice(72,81)];
console.log(gridArrays)

  return (
   <div className="sudokuBoard">
    {gridArrays.map((grid, gridIndex) => {
      return <div className='sudokuGrid' key={gridIndex}>
          
          {grid.map((cell, cellIndex) => {
            const uniqueIndex = `grid-${gridIndex}-cell${cellIndex}`
            return <button key={uniqueIndex} className='sudokuCell'>{cell}</button>
          })}
          
      </div>
      
    })}
    </div>
  )
}

export default Board

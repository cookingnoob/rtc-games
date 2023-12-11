import React, { useEffect, useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';
import Board from './components/Board';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);

useEffect(() => {
  const newBoard = makepuzzle();
  const gridArrays = [[newBoard.slice(0,8)], [newBoard.slice(9,17)],[newBoard.slice(18,26)], [newBoard.slice(27,35)],[newBoard.slice(36,44)], [newBoard.slice(45,53)],[newBoard.slice(54,62)], [newBoard.slice(63,71)],[newBoard.slice(72,80)]];
  setSudokuBoard(newBoard);
}, []);


  return (
    <>
    <h1>Sudoku</h1>
  {sudokuBoard == null ? 
  <>
  </> 
  : 
  // por cada 9 celdas se crea un div que contenga un tablero - en vez de que sea una fila
  <Board sudokuBoard={sudokuBoard}/>
  }
    </>
  )
}

export default Sodoku
import React, { useEffect, useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';
import Board from './components/Board';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);

useEffect(() => {
  const newBoard = makepuzzle();
  const gridArrays = [newBoard.slice(0,9), newBoard.slice(9,18),newBoard.slice(18,27), newBoard.slice(27,36),newBoard.slice(36,45), newBoard.slice(45,54),newBoard.slice(54,63), newBoard.slice(63,72),newBoard.slice(72,81)];
  console.log(gridArrays)
  setSudokuBoard(gridArrays);
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
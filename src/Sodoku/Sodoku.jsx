import React, { useEffect, useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';
import Board from './components/Board';
import StartSudoku from './components/StartSudoku';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);



  return (
    <>
    <h1>Sudoku</h1>
  {sudokuBoard == null ? 
  <>
  <StartSudoku makepuzzle={makepuzzle} setSudokuBoard={setSudokuBoard}/>
  </> 
  : 
  <Board sudokuBoard={sudokuBoard}/>
  }
    </>
  )
}

export default Sodoku
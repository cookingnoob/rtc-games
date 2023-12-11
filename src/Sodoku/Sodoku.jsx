import React, { useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';

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
  <PlayingSudokuWindow sudokuBoard={sudokuBoard}/>
  }
    </>
  )
}

export default Sodoku
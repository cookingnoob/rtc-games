import React, { useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';
import RestartSudoku from './components/RestartSudoku';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  


  return (
    <>
    <h1>Sudoku</h1>
  {sudokuBoard == null ? 
  <>
  <StartSudoku makepuzzle={makepuzzle} setSudokuBoard={setSudokuBoard}  buttonName={'inicia la partida'}/>
  </> 
  : 
  <>
  <PlayingSudokuWindow sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard}/>

  <StartSudoku makepuzzle={makepuzzle} setSudokuBoard={setSudokuBoard}  buttonName={'Nuevo tablero'}/>
  </>
  }
    </>
  )
}

export default Sodoku
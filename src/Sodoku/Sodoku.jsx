import React, { useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';
import RestartSudoku from './components/RestartSudoku';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [originalSudoku, setOriginalSudoku] = useState('')

 if(originalSudoku != ''){
  console.log(originalSudoku)
 }
  return (
    <>
    <h1>Sudoku</h1>
  {sudokuBoard == null ? 
  <>
  <StartSudoku makepuzzle={makepuzzle} setSudokuBoard={setSudokuBoard} setOriginalSudoku={setOriginalSudoku} buttonName={'inicia la partida'}/>
  </> 
  : 
  <>
  <PlayingSudokuWindow sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard}/>
  <StartSudoku makepuzzle={makepuzzle} setSudokuBoard={setSudokuBoard} setOriginalSudoku={setOriginalSudoku} buttonName={'Nuevo tablero'}/>
  </>
  }
    </>
  )
}

export default Sodoku
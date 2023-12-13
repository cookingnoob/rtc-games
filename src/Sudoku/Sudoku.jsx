import React, { useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';


const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [copyOfSudoku, setCopyOfSudoku] = useState(null)
  const [text, setText] = useState('Empieza la partida')
  const solved = solvepuzzle(sudokuBoard);
  return (
    <>
    <h1>Sudoku</h1>
    <h2>{text}</h2>
  {sudokuBoard == null ? 
  <StartSudoku makepuzzle={makepuzzle} copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} setText={setText} buttonName={'inicia la partida'}/>
  : 
  <>
  <PlayingSudokuWindow sudokuBoard={sudokuBoard} copyOfSudoku={copyOfSudoku} setText={setText} setCopyOfSudoku={setCopyOfSudoku} setSudokuBoard={setSudokuBoard} makepuzzle={makepuzzle}/>
  <button onClick={() => console.log(solved)}>Subir tus respuestas</button>
  </>
  }
    </>
  )
}

export default Sodoku

//falta:
  //boton de solvepuzzle
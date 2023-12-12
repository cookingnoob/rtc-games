import React, { useState } from 'react'
import sudoku, { makepuzzle, solvepuzzle } from 'sudoku';

import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';
import RestartSudoku from './components/RestartSudoku';

const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [copyOfSudoku, setCopyOfSudoku] = useState(null)
  const [text, setText] = useState('Empieza la partida')

  return (
    <>
    <h1>Sudoku</h1>
    <h2>{text}</h2>
  {sudokuBoard == null ? 
  <StartSudoku makepuzzle={makepuzzle} copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} setText={setText} buttonName={'inicia la partida'}/>
  : 
  <PlayingSudokuWindow sudokuBoard={sudokuBoard} copyOfSudoku={copyOfSudoku} setText={setText} setCopyOfSudoku={setCopyOfSudoku} setSudokuBoard={setSudokuBoard} makepuzzle={makepuzzle}/>
  }
    </>
  )
}

export default Sodoku

//falta:
  //no puedas sobreescribir en los valores originales
  //verificacion de que no repites el mismo numero en la fila 
  //verificacion que no repites el mismo numero en la columna
  //verificacionque no repites el mismo numero en el bloque
  //boton de reiniciar el sudoku
  //boton de solvepuzzle
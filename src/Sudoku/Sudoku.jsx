import React, { useState } from 'react'
import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';


const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [copyOfSudoku, setCopyOfSudoku] = useState(null)
  const [text, setText] = useState('Empieza la partida')


  return (
    <>
    <h1 className="gameTitle">Sudoku</h1>
    <h2>{text}</h2>
  {sudokuBoard == null ? 
  <StartSudoku copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} setText={setText} buttonName={'inicia la partida'}/>
  : 
  <>
  <PlayingSudokuWindow sudokuBoard={sudokuBoard} copyOfSudoku={copyOfSudoku} setText={setText} setCopyOfSudoku={setCopyOfSudoku} setSudokuBoard={setSudokuBoard}/>
  <button>Subir tus respuestas</button>
  </>
  }
    </>
  )
}

export default Sodoku
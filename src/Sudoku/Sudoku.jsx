import { useState } from 'react'
import StartSudoku from './components/StartSudoku';
import PlayingSudokuWindow from './components/PlayingSudokuWindow';

//cambiar peticion del sudoku a https://sudoku-api.vercel.app/api/dosuku de esta peticion, separar los datos
  //dificultad
  //value (es el sudoku que resolvera el usuario)
  //solution que es el que vamos a comparar para felicitar o no al usuario
const Sodoku = () => {

  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [copyOfSudoku, setCopyOfSudoku] = useState(null)
  const [text, setText] = useState('Empieza la partida')
  const [solution, setSolution] = useState(null)

  return (
    <>
    <h1 className="gameTitle">Sudoku</h1>
    <h2>{text}</h2>
  {sudokuBoard === null ? 
  <StartSudoku sudokuBoard={sudokuBoard} setSolution={setSolution} copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} setText={setText} buttonName={'inicia la partida'}/>
  : 
  <>
  <PlayingSudokuWindow solution={solution} setSolution={setSolution} sudokuBoard={sudokuBoard} copyOfSudoku={copyOfSudoku} setText={setText} setCopyOfSudoku={setCopyOfSudoku} setSudokuBoard={setSudokuBoard}/>
  </>
  }
    </>
  )
}

export default Sodoku
import { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'
import StartSudoku from './StartSudoku'

const PlayingSudokuWindow = ({sudokuBoard, setSudokuBoard, makepuzzle, setText}) => {
    const [grid, setGrid] = useState(null);
    const [cellIndex, setCellIndex] = useState(null)
    const [numberToAdd, setNumberToAdd] = useState(null)

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGrid={setGrid} setCellIndex={setCellIndex} setText={setText}/>
    <NumbersButtons grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setText={setText} setNumberToAdd={setNumberToAdd}/>
    <AddValidNumber numberToAdd={numberToAdd} setText={setText} cellIndex={cellIndex} grid={grid} setSudokuBoard={setSudokuBoard} sudokuBoard={sudokuBoard} setNumberToAdd={setNumberToAdd} setGrid={setGrid} setCellIndex={setCellIndex}/>
    <DeleteButton grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard} />
    <StartSudoku  setSudokuBoard={setSudokuBoard}  makepuzzle={makepuzzle} buttonName={'Nuevo tablero'}/>
    </>
  )
}

export default PlayingSudokuWindow
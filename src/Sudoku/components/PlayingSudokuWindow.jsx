import { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'
import StartSudoku from './StartSudoku'
import RestartSudoku from './RestartSudoku'

const PlayingSudokuWindow = ({sudokuBoard, copyOfSudoku, setSudokuBoard, makepuzzle, setText, setCopyOfSudoku}) => {
    const [grid, setGrid] = useState(null);
    const [cellIndex, setCellIndex] = useState(null)
    const [numberToAdd, setNumberToAdd] = useState(null)

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGrid={setGrid} setCellIndex={setCellIndex} setText={setText}/>
    <NumbersButtons grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setText={setText} setNumberToAdd={setNumberToAdd}/>
    <AddValidNumber copyOfSudoku={copyOfSudoku} numberToAdd={numberToAdd} setText={setText} cellIndex={cellIndex} grid={grid} setSudokuBoard={setSudokuBoard} sudokuBoard={sudokuBoard} setNumberToAdd={setNumberToAdd} setGrid={setGrid} setCellIndex={setCellIndex}/>
    <DeleteButton grid={grid} copyOfSudoku={copyOfSudoku} setText={setText} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard} />
    <div className="refreshSudoku"> 
    <StartSudoku  setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} makepuzzle={makepuzzle} buttonName={'Nuevo tablero'}/>
    <RestartSudoku copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard}/>
    </div>
    </>
  )
}

export default PlayingSudokuWindow
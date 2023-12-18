import { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'
import StartSudoku from './StartSudoku'
import RestartSudoku from './RestartSudoku'
import SolveButton from './SolveButton'

const PlayingSudokuWindow = ({sudokuBoard,solution, setSolution, copyOfSudoku, setSudokuBoard, makepuzzle, setText, setCopyOfSudoku}) => {
    const [gridIndex, setGridIndex] = useState(null);
    const [cellIndex, setCellIndex] = useState(null)
    const [numberToAdd, setNumberToAdd] = useState(null)

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGridIndex={setGridIndex} setCellIndex={setCellIndex} setText={setText}/>
    <NumbersButtons gridIndex={gridIndex} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setText={setText} setNumberToAdd={setNumberToAdd}/>
    <div className="modifySudoku">
      <AddValidNumber copyOfSudoku={copyOfSudoku} numberToAdd={numberToAdd} setText={setText} cellIndex={cellIndex} gridIndex={gridIndex} setSudokuBoard={setSudokuBoard} sudokuBoard={sudokuBoard} setNumberToAdd={setNumberToAdd} setGridIndex={setGridIndex} setCellIndex={setCellIndex}/>
      <DeleteButton gridIndex={gridIndex} copyOfSudoku={copyOfSudoku} setText={setText} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard} />
    </div>
    <div className="refreshSudoku"> 
      <SolveButton solution={solution} sudokuBoard={sudokuBoard} setText={setText}/>
      <StartSudoku  setSolution={setSolution} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku} makepuzzle={makepuzzle} buttonName={'Nuevo tablero'}/>
      <RestartSudoku copyOfSudoku={copyOfSudoku} setSudokuBoard={setSudokuBoard} setCopyOfSudoku={setCopyOfSudoku}/>
    </div>
    </>
  )
}

export default PlayingSudokuWindow

// solution={solution} setSolution={setSolution}
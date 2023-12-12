import React, { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'
import AddValidNumber from './AddValidNumber'

const PlayingSudokuWindow = ({sudokuBoard, setSudokuBoard}) => {
    const [grid, setGrid] = useState(null);
    const [cellIndex, setCellIndex] = useState(null)
    const [numberToAdd, setNumberToAdd] = useState(null)

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGrid={setGrid} setCellIndex={setCellIndex}/>
    <NumbersButtons grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setNumberToAdd={setNumberToAdd}/>
    <AddValidNumber numberToAdd={numberToAdd} cellIndex={cellIndex} grid={grid} setSudokuBoard={setSudokuBoard} sudokuBoard={sudokuBoard} setNumberToAdd={setNumberToAdd} setGrid={setGrid} setCellIndex={setCellIndex}/>
    <DeleteButton grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard} />
    </>
  )
}

export default PlayingSudokuWindow
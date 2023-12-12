import React, { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'
import DeleteButton from './DeleteButton'

const PlayingSudokuWindow = ({sudokuBoard, setSudokuBoard}) => {
    const [grid, setGrid] = useState('');
    const [cellIndex, setCellIndex] = useState('')

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGrid={setGrid} setCellIndex={setCellIndex}/>
    <NumbersButtons grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard}/>
    <DeleteButton grid={grid} cellIndex={cellIndex} sudokuBoard={sudokuBoard} setSudokuBoard={setSudokuBoard} />
    </>
  )
}

export default PlayingSudokuWindow
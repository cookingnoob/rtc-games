import React, { useState } from 'react'
import Board from './Board'
import NumbersButtons from './numbersButtons'

const PlayingSudokuWindow = ({sudokuBoard}) => {
    const [grid, setGrid] = useState('')

  return (
    <>
    <Board sudokuBoard={sudokuBoard} setGrid={setGrid}/>
    <NumbersButtons grid={grid} sudokuBoard={sudokuBoard}/>
    </>
  )
}

export default PlayingSudokuWindow
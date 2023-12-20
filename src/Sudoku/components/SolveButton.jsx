import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const SolveButton = () => {
  const {solution, sudokuBoard, setText} = useContext(SudokuContext)
    const handleSubmitAnswers = () =>{
      for(let g = 0; g < 9; g++){
        for(let c = 0; c <9; c++){
          solution[g][c] === sudokuBoard[g][c] ? setText('Ganaste!!!🥳') : setText('Aún no está resuelto el sudoku🤔')
        }
      }
    //  sudokuBoard.map((grid, gridIndex) => {
    //   grid.map((cell, cellIndex) => {

    }
  
    
  return (
    <button onClick={handleSubmitAnswers}>SolveButton</button>
  )
}

export default SolveButton
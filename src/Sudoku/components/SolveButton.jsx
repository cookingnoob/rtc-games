import React from 'react'

const SolveButton = ({solution, sudokuBoard, setText}) => {
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
import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const useCheckAnswer = () => {
    const {solution, sudokuBoard, setText} = useContext(SudokuContext)
    //checks if the player board is equal to the solution board and sets a text
    const handleSubmitAnswers = () =>{
      for(let g = 0; g < 9; g++){
        for(let c = 0; c <9; c++){
          solution[g][c] === sudokuBoard[g][c] ? setText('Ganaste!!!🥳') : setText('Aún no está resuelto el sudoku🤔')
        }
      }
    }
  
  return {handleSubmitAnswers}
}

export default useCheckAnswer
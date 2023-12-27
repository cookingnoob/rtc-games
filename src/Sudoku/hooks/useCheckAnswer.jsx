import { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const useCheckAnswer = () => {

    const {solution, sudokuBoard, setText} = useContext(SudokuContext)

    //checks if the player board is equal to the solution board and sets a text
    const handleSubmitAnswers = () =>{
      areBoardsEqual(solution, sudokuBoard) ? setText('Ganaste!!!🥳') : setText('Aún no está resuelto el sudoku🤔')
    }

    const areBoardsEqual = (originalBoard, playerBoard)=> {
      for (let g = 0; g < originalBoard.length; g++) {
       for(let c = 0; c < originalBoard[g].length; c++ ){
        if(playerBoard[g][c] === null && originalBoard[g][c] !== playerBoard[g][c]){
          return false
        }
       }
      }
      return true;
  }

  
  
  return {handleSubmitAnswers}
}

export default useCheckAnswer


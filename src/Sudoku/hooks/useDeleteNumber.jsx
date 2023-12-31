import { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const useDeleteNumber = () => {
    const {cellIndex, gridIndex, sudokuBoard, setSudokuBoard,copyOfSudoku, setText} = useContext(SudokuContext)
    //checks if the number is from the original board
    //if its not it changes the value of the selected number to null
    const handleDelete = () => {
      if(!isOriginalNumber()){
        setText('No se pueden cambiar los números originales')
        return
    }else{
     addNewValueToBoard()
    }      
    }

    const isOriginalNumber = () => {
        if(copyOfSudoku[gridIndex][cellIndex] !== null){
            return false
        }
        return true
    }

    const addNewValueToBoard = () => {
        const arrayToBeChanged = [...sudokuBoard]
        arrayToBeChanged[gridIndex][cellIndex] = null
        setSudokuBoard(arrayToBeChanged)
    }
  return {handleDelete}
}

export default useDeleteNumber
import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const DeleteButton = () => {
  const {cellIndex, gridIndex, sudokuBoard, setSudokuBoard,copyOfSudoku, setText} = useContext(SudokuContext)
    const handleDelete = () => {
      if(copyOfSudoku[gridIndex][cellIndex] !== null){
        setText('No se pueden cambiar los números originales')
        return
    }else{
      const arrayToBeChanged = [...sudokuBoard]
      arrayToBeChanged[gridIndex][cellIndex] = null
      setSudokuBoard(arrayToBeChanged)
    }      
    }
  return (
    <button onClick={handleDelete}>Borrar</button>
  )
}

export default DeleteButton
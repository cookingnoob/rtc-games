import React from 'react'

const DeleteButton = ({ cellIndex, gridIndex, sudokuBoard, setSudokuBoard,copyOfSudoku, setText }) => {
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
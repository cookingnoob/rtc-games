import React from 'react'

const DeleteButton = ({grid, cellIndex, sudokuBoard, setSudokuBoard,copyOfSudoku, setText }) => {
    const handleDelete = () => {
      if(copyOfSudoku[grid][cellIndex] !== null){
        setText('No se pueden cambiar los números originales')
        return
    }else{
      const arrayToBeChanged = [...sudokuBoard]
      arrayToBeChanged[grid][cellIndex] = null
      setSudokuBoard(arrayToBeChanged)
    }      
    }
  return (
    <button onClick={handleDelete}>Borrar</button>
  )
}

export default DeleteButton
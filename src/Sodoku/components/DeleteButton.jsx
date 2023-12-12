import React from 'react'

const DeleteButton = ({grid, cellIndex, sudokuBoard, setSudokuBoard}) => {
    const handleDelete = () => {
            const arrayToBeChanged = [...sudokuBoard]
            arrayToBeChanged[grid][cellIndex] = null
            setSudokuBoard(arrayToBeChanged)
            console.log(sudokuBoard)
    }
  return (
    <button onClick={handleDelete}>Borrar</button>
  )
}

export default DeleteButton
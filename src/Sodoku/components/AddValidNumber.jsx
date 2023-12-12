import React from 'react'

const AddValidNumber = ({numberToAdd,sudokuBoard,grid,cellIndex,setSudokuBoard,setNumberToAdd,setGrid,setCellIndex }) => {

   const handleSubmit = () => {
    addValueToBoard()
    resetValues()
    }

const addValueToBoard = () => {
    const arrayToBeChanged = [...sudokuBoard]
    arrayToBeChanged[grid][cellIndex] = numberToAdd
    setSudokuBoard(arrayToBeChanged)
}

const resetValues = () => {
    setNumberToAdd(null);
    setGrid(null)
    setCellIndex(null)
}

  return (
    <button onClick={handleSubmit}>Colocar numero</button>
  )
}

export default AddValidNumber
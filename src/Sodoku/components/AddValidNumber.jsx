import React from 'react'

const AddValidNumber = ({numberToAdd,sudokuBoard,grid,cellIndex,setSudokuBoard,setNumberToAdd,setGrid,setCellIndex, setText }) => {

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
    setText('Selecciona una casilla')
}

  return (
    <button onClick={handleSubmit}>Colocar numero</button>
  )
}

export default AddValidNumber
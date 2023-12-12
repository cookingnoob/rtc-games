import React from 'react'

const AddValidNumber = ({copyOfSudoku, numberToAdd,sudokuBoard,grid,cellIndex,setSudokuBoard,setNumberToAdd,setGrid,setCellIndex, setText }) => {

   const handleSubmit = () => {
    if(numberToAdd === null){
        setText('No has seleccionado un número!')
        return
    } else if(copyOfSudoku[grid][cellIndex] !== null){
        setText('No se pueden cambiar los números originales')
        return
    }else{
        addValueToBoard()
        resetValues()
    }
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

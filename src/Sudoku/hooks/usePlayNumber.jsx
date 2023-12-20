import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const usePlayNumber = () => {
    const {setGridIndex, setCellIndex, setText} = useContext(SudokuContext);
    //sets the grid and cell indexes to be able to know which cell the player chose
    const handleSudokuClick = (gridIndex, cellIndex) => {
        setGridIndex(gridIndex)
        setCellIndex(cellIndex)
        setText('Selecciona un número')
      }
      
  return {handleSudokuClick}
}

export default usePlayNumber
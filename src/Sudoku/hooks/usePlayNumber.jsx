import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext'

const usePlayNumber = () => {
    const {setGridIndex, setCellIndex, setText} = useContext(SudokuContext);
    
    const handleSudokuClick = (gridIndex, cellIndex) => {
        setGridIndex(gridIndex)
        setCellIndex(cellIndex)
        setText('Selecciona un número')
      }
      
  return {handleSudokuClick}
}

export default usePlayNumber
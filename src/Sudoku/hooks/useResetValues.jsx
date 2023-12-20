import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';

const useResetValues = () => {
    const {setNumberToAdd, setCellIndex, setText} = useContext(SudokuContext)
    const resetValues = () => {
        setNumberToAdd(null);
        setCellIndex(null);
        setText("Selecciona una casilla");
      };
    
  return {resetValues}
}

export default useResetValues
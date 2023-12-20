import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';

const useResetValues = () => {
    const {setNumberToAdd, setCellIndex, setText} = useContext(SudokuContext)
    //after player printed a new value to the board, these values return to what they where before
    const resetValues = () => {
        setNumberToAdd(null);
        setCellIndex(null);
        setText("Selecciona una casilla");
      };
    
  return {resetValues}
}

export default useResetValues
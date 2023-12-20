import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';

const useUneditableNumber = () => {
const {copyOfSudoku, gridIndex, cellIndex, setText} = useContext(SudokuContext)
    const isUneditableNumber = () => {
        if (copyOfSudoku[gridIndex][cellIndex] !== null) {
          setText("No se pueden cambiar los números originales");
          return true;
        }
        return false;
      };
      
  return {isUneditableNumber}
}

export default useUneditableNumber
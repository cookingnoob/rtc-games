import React, { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';

const useNumberNotSelected = () => {
    const {numberToAdd, setText} = useContext(SudokuContext)
    const isNumberNotSelected = () => {
        if (numberToAdd === null) {
          setText("No has seleccionado un número!");
          return true;
        }
        return false;
      };
    
  return {isNumberNotSelected}
}

export default useNumberNotSelected
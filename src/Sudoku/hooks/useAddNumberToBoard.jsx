import { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';
import useResetValues from './useResetValues';

const useAddNumberToBoard = () => {
    const {sudokuBoard, gridIndex, cellIndex, setSudokuBoard, numberToAdd} = useContext(SudokuContext)
    const {resetValues} = useResetValues()
    //adds selected value to the board and sets a new the cell and number values 
    const addValueToBoard = () => {
        const arrayToBeChanged = [...sudokuBoard];
        arrayToBeChanged[gridIndex][cellIndex] = numberToAdd;
        setSudokuBoard(arrayToBeChanged);
        resetValues();
      };
    
  return {addValueToBoard}
}

export default useAddNumberToBoard
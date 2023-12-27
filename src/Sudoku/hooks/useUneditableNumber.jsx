import { useContext } from 'react'
import { SudokuContext } from '../SudokuContext';
import { LoginContext } from '../../Login/LoginContext';
import useLocalUser from '../../Login/hooks/useLocalUser';

const useUneditableNumber = () => {
const {copyOfSudoku, gridIndex, cellIndex, setText} = useContext(SudokuContext)

useLocalUser()
    //checks if the player is trying to edit one of the original array numbers
    const isUneditableNumber = () => {
        if (copyOfSudoku[gridIndex][cellIndex] !== null) {
          setText(`No se pueden cambiar los números originales`);
          return true;
        }
        return false;
      };
      
  return {isUneditableNumber}
}

export default useUneditableNumber
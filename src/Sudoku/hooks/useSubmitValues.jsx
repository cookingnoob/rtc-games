import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";
import useValidSudokuMove from "../hooks/useValidSudokuMove";
import useNumberNotSelected from "../hooks/useNumberNotSelected";
import useUneditableNumber from "../hooks/useUneditableNumber";
import useAddNumberToBoard from "../hooks/useAddNumberToBoard";

const useSubmitValues = () => {
    const {gridIndex,numberToAdd,sudokuBoard,cellIndex} = useContext(SudokuContext)
    const {validSudoku} = useValidSudokuMove()
    const {isNumberNotSelected} = useNumberNotSelected()
    const {isUneditableNumber} = useUneditableNumber()
    const {addValueToBoard} = useAddNumberToBoard()
    
    const handleSubmit = () => {
      if (isNumberNotSelected()) {
        return;
      }
      if (isUneditableNumber()) {
        return;
      }
      if (!validSudoku({ sudokuBoard, numberToAdd, cellIndex, gridIndex })) {
        return;
      }
      addValueToBoard();
    };
  
  return {handleSubmit}
}

export default useSubmitValues
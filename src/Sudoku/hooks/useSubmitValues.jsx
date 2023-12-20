import useValidSudokuMove from "../hooks/useValidSudokuMove";
import useNumberNotSelected from "../hooks/useNumberNotSelected";
import useUneditableNumber from "../hooks/useUneditableNumber";
import useAddNumberToBoard from "../hooks/useAddNumberToBoard";

const useSubmitValues = () => {
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
      if (!validSudoku()) {
        return;
      }
      addValueToBoard();
    };
  
  return {handleSubmit}
}

export default useSubmitValues
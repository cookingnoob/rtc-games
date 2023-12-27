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
    //checks if there is no number selected
      if (isNumberNotSelected()) {
        return;
      }
    // checks if the player is trying to change one of the original numbers
      if (isUneditableNumber()) {
        return;
      }
      //checks if the number is being repeated
      if (!validSudoku()) {
        return;
      }
      addValueToBoard();
    };
  
  return {handleSubmit}
}

export default useSubmitValues
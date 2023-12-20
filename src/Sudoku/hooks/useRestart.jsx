import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const useRestart = () => {
    const {copyOfSudoku,setSudokuBoard} = useContext(SudokuContext)
    //takes a hard copy of the original array and sets the board to it
    const handleRestart = () => {
    const copyOfCopy = JSON.parse(JSON.stringify(copyOfSudoku));
    setSudokuBoard(copyOfCopy)
    }
  return {handleRestart}
}

export default useRestart
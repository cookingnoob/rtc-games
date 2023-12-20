import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const useRestart = () => {
    const {copyOfSudoku,setSudokuBoard} = useContext(SudokuContext)

    const handleRestart = () => {
    const copyOfCopy = JSON.parse(JSON.stringify(copyOfSudoku));
    setSudokuBoard(copyOfCopy)
    }
  return {handleRestart}
}

export default useRestart
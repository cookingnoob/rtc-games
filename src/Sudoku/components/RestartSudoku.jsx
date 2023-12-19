import { useContext } from "react";
import { SudokuContext } from "../SudokuContext";

const RestartSudoku = ({}) => {
const {copyOfSudoku,setSudokuBoard} = useContext(SudokuContext)
    const handleRestart = () => {
    const copyOfCopy = JSON.parse(JSON.stringify(copyOfSudoku));
    setSudokuBoard(copyOfCopy)
    }

  return (
    <>
    <button onClick={handleRestart}>Reinicia el Sudoku</button>
    </>
  )
}

export default RestartSudoku